import React from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "My personal portfolio built with React and TailwindCSS. Features a clean, modern design with smooth animations and a minimalist aesthetic.",
      tech: ["React", "TailwindCSS", "Vite", "React Icons"],
      liveDemo: "https://morindat.netlify.app/", 
      isPortfolio: true 
    },
    {
    title: "Mars Retrograde Motion Analysis",
    description: "Tracked Mars' position over 3 months using Stellarium to observe its apparent retrograde motion. Collected daily altitude and azimuth data, converted DMS to decimal degrees, and visualized the planet's path across the sky.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Astronomy"],
    github: "https://github.com/morindat/mars-retrograde-analysis", 
    isPortfolio: false
    },
    {
      title: "Dynamic Array API",
      description: "A custom dynamic array API implemented from scratch in C that works like std::vector in C++.",
      tech: ["C", "C++"],
      github: "https://github.com/morindat/dynamic-array-api",
      isPortfolio: false
    },
    {
      title: "myMalloc",
      description: "A custom memory allocator implemented in C++17, replacing malloc, free, calloc, and realloc with a from-scratch implementation using sbrk for small allocations and mmap for large ones.",
      tech: ["C++", "sbrk", "mmap"],
      github: "https://github.com/morindat/malloc",
      isPortfolio: false
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden bg-black border-t border-white/5">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400 tracking-tight">
            Featured Projects
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-blue-500/20 rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/[0.07]"
            >
              {/* Subtle Glowing Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-all">
                    {project.title}
                  </h3>
                  <div className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    <FiCode className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.isPortfolio ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/20 text-blue-300 rounded-lg font-medium hover:bg-blue-500/30 transition-all group/btn border border-blue-500/10"
                    >
                      <FiExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-medium text-white hover:bg-white/10 hover:border-blue-500/30 transition-all group/btn"
                    >
                      <FiGithub className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      View Source
                    </a>
                  )}
                  
                  {!project.isPortfolio && (
                    <button
                      onClick={() => window.open(project.github, '_blank')}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-blue-500/30 transition-all"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/morindat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-blue-300 hover:border-blue-500/30 transition-all group"
          >
            <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explore More on GitHub
            <FiExternalLink className="w-4 h-4 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
