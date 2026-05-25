import React from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My personal portfolio built with React and TailwindCSS. Features a clean, modern design with smooth animations and a sci-fi inspired aesthetic.",
      tech: ["React", "TailwindCSS", "Vite", "React Icons"],
      liveDemo: "https://morindat.netlify.app/", // Replace with your actual URL
      isPortfolio: true // Special flag for portfolio project
    },
    {
    title: "Mars Retrograde Motion Analysis",
    description: "Tracked Mars' position over 3 months using Stellarium to observe its apparent retrograde motion. Collected daily altitude and azimuth data, converted DMS to decimal degrees, and visualized the planet's path across the sky.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Astronomy"],
    github: "https://github.com/Papadizzo/mars-retrograde-analysis", 
    highlights: [
        "Collected 90+ days of planetary position data",
        "Analyzed retrograde motion pattern",
        "Created interactive visualizations with mplcursors"
    ],
    isPortfolio: false
    },
    {
      title: "Dynamic Array API",
      description: "A custom dynamic array API implemented from scratch in C that works like std::vector in C++.",
      tech: ["C", "C++"],
      github: "https://github.com/Papadizzo/dynamic-array-api",
      isPortfolio: false
    },
    {
      title: "myMalloc",
      description: "A custom memory allocator implemented in C++17, replacing malloc, free, calloc, and realloc with a from-scratch implementation using sbrk for small allocations and mmap for large ones.",
      tech: ["C++", "sbrk", "mmap"],
      github: "https://github.com/Papadizzo/malloc",
      isPortfolio: false
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Project Image Placeholder (optional) */}
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center border-b border-white/10">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  <FiCode className="w-16 h-16 text-purple-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.isPortfolio ? (
                    // Special button for portfolio - Live Demo
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:opacity-90 transition-opacity group/btn"
                    >
                      <FiExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  ) : (
                    // Regular projects - View Code
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 hover:border-purple-500/50 transition-all group/btn"
                    >
                      <FiGithub className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Code
                    </a>
                  )}
                  
                  {/* Optional: Add a secondary button for all projects */}
                  {!project.isPortfolio && (
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Papadizzo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition-all"
          >
            <FiGithub className="w-5 h-5" />
            View All on GitHub
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
