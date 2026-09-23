import { useEffect, useState } from "react";
import {
  FiGithub,
  FiFolder,
  FiStar,
  FiUsers,
  FiUserPlus,
  FiPieChart,
  FiExternalLink,
} from "react-icons/fi";
import { getGitHubStats, languageColor } from "../utils/github";

const StatTile = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
    <span className="text-xl text-blue-400">{icon}</span>
    <div className="min-w-0">
      <p className="text-lg font-bold leading-tight text-white">{value}</p>
      <p className="truncate text-[11px] uppercase tracking-widest text-slate-500">
        {label}
      </p>
    </div>
  </div>
);

const Card = ({ children }) => (
  <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 sm:p-8">
    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
    <div className="relative z-10 flex h-full flex-col">{children}</div>
  </div>
);

const CardTitle = ({ children }) => (
  <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400">
    {children}
  </h4>
);

const Skeleton = ({ className }) => (
  <div className={`animate-pulse rounded bg-white/10 ${className}`} />
);

const LoadingState = () => (
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
    {[0, 1].map((card) => (
      <Card key={card}>
        <Skeleton className="mb-6 h-4 w-40" />
        <div className="mb-6 flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((tile) => (
            <Skeleton key={tile} className="h-16" />
          ))}
        </div>
      </Card>
    ))}
  </div>
);

const ErrorState = ({ username }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-10 text-center">
    <FiGithub className="mx-auto mb-3 text-2xl text-blue-400" />
    <p className="text-slate-400">
      Live GitHub stats are unavailable right now.
    </p>
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
    >
      View profile on GitHub
      <FiExternalLink className="h-4 w-4" />
    </a>
  </div>
);

const GitHubStats = ({ username = "morindat" }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let active = true;

    getGitHubStats(username).then((result) => {
      // Guard against setting state after the component has unmounted.
      if (active) setData(result);
    });

    return () => {
      active = false;
    };
  }, [username]);

  // `data` is null until the first response resolves, including on failure
  // (the error is carried inside the resolved object).
  if (data === null) return <LoadingState />;
  if (data.error) return <ErrorState username={username} />;

  const { profile, stats, languages } = data;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Profile & headline numbers */}
      <Card>
        <CardTitle>
          <FiGithub className="h-4 w-4" />
          GitHub Stats
        </CardTitle>

        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 flex items-center gap-4"
        >
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            loading="lazy"
            className="h-14 w-14 rounded-full border border-white/10 transition-colors group-hover:border-blue-500/40"
          />
          <div className="min-w-0">
            <p className="truncate font-bold text-white transition-colors group-hover:text-blue-300">
              {profile.name}
            </p>
            <p className="truncate text-sm text-slate-500">
              @{profile.username}
              {profile.bio ? ` · ${profile.bio}` : ""}
            </p>
          </div>
        </a>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <StatTile icon={<FiFolder />} label="Repositories" value={stats.repos} />
          <StatTile icon={<FiStar />} label="Total Stars" value={stats.stars} />
          <StatTile icon={<FiUsers />} label="Followers" value={stats.followers} />
          <StatTile
            icon={<FiUserPlus />}
            label="Following"
            value={stats.following}
          />
        </div>
      </Card>

      {/* Language mix */}
      <Card>
        <CardTitle>
          <FiPieChart className="h-4 w-4" />
          Most Used Languages
        </CardTitle>

        {languages.length === 0 ? (
          <p className="text-sm text-slate-400">
            No public language data available yet.
          </p>
        ) : (
          <div className="space-y-5">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-gray-300">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: languageColor(language.name) }}
                    />
                    {language.name}
                  </span>
                  <span className="font-medium text-slate-500">
                    {language.percent}%
                  </span>
                </div>
                <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${language.percent}%`,
                      backgroundColor: languageColor(language.name),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-auto pt-6 text-xs text-slate-600">
          Primary language across public repositories (forks excluded).
        </p>
      </Card>
    </div>
  );
};

export default GitHubStats;
