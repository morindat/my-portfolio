const API_BASE = "https://api.github.com";

// Optional: add VITE_GITHUB_TOKEN to your .env to raise the rate limit.
// Unauthenticated requests are capped at 60/hour per IP; a token allows 5000/hour.
const token = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  Accept: "application/vnd.github+json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

// GitHub's language colors, keyed by lowercase language name.
const LANGUAGE_COLORS = {
  c: "#555555",
  "c++": "#f34b7d",
  "c#": "#178600",
  css: "#563d7c",
  go: "#00add8",
  html: "#e34c26",
  java: "#b07219",
  javascript: "#f1e05a",
  "jupyter notebook": "#da5b0b",
  kotlin: "#a97bff",
  lua: "#000080",
  ocaml: "#ef7a08",
  php: "#4f5d95",
  python: "#3572a5",
  ruby: "#701516",
  rust: "#dea584",
  shell: "#89e051",
  swift: "#f05138",
  typescript: "#3178c6",
  vue: "#41b883",
};

export const languageColor = (name) =>
  LANGUAGE_COLORS[name?.toLowerCase()] ?? "#3b82f6";

const fetchJson = async (path) => {
  const response = await fetch(`${API_BASE}${path}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status} for ${path}`);
  }

  return response.json();
};

/**
 * Fetches the public profile and repositories for a GitHub user and derives the
 * stats rendered on the portfolio. Only unauthenticated-friendly endpoints are
 * used, so no key is required for a public profile.
 */
export const getGitHubStats = async (username) => {
  try {
    const [user, repos] = await Promise.all([
      fetchJson(`/users/${username}`),
      fetchJson(`/users/${username}/repos?per_page=100&sort=pushed`),
    ]);

    // Forks are excluded so the language mix reflects work the user actually wrote.
    const ownRepos = repos.filter((repo) => !repo.fork);

    const languageCounts = ownRepos.reduce((counts, repo) => {
      if (!repo.language) return counts;
      counts[repo.language] = (counts[repo.language] ?? 0) + 1;
      return counts;
    }, {});

    const totalWithLanguage = Object.values(languageCounts).reduce(
      (sum, count) => sum + count,
      0
    );

    const languages = Object.entries(languageCounts)
      .map(([name, count]) => ({
        name,
        count,
        percent: totalWithLanguage
          ? Math.round((count / totalWithLanguage) * 100)
          : 0,
      }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
      .slice(0, 6);

    return {
      profile: {
        username: user.login,
        name: user.name ?? user.login,
        avatarUrl: user.avatar_url,
        bio: user.bio,
        url: user.html_url,
      },
      stats: {
        repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        stars: ownRepos.reduce(
          (sum, repo) => sum + (repo.stargazers_count ?? 0),
          0
        ),
      },
      languages,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { profile: null, stats: null, languages: [], error: error.message };
  }
};
