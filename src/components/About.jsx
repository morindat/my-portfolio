import React from 'react';
import Terminal from './Terminal';

const About = () => {
  const softwareSkills = [
    "Web design",
    "Web development", 
    "Design and Analysis of Algorithms",
    "Photography",
    "Photoshop"
  ];

  const languages = [
    { name: "Swahili", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Mandarin", level: "Learning" }
  ];

  const personalSkills = [
    "Creativity",
    "Team Work",
    "Organisation"
  ];

  const experiences = [
    { role: "Developer", company: "INDIVIDUAL PROJECTS.", period: "2024-Present" },
    { role: "Data Analyst", company: "DOT.", period: "2023-2024" },
    { role: "Graphic Designer", company: "STORY LAB.", period: "2022" },
    { role: "Videographer", company: "STORY LAB.", period: "2020-2022" }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400 tracking-tight">
            About Me
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-blue-500/20 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Software Skills */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all group">
              <h2 className="text-xl font-bold mb-6 text-blue-400 tracking-wide border-b border-gray-700 pb-2">
                SOFTWARE SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {softwareSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-blue-400">▹</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all group">
              <h2 className="text-xl font-bold mb-6 text-blue-400 tracking-wide border-b border-gray-700 pb-2">
                LANGUAGES
              </h2>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-sm text-gray-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Skills */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all group">
              <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide border-b border-gray-700 pb-2">
                PERSONAL SKILLS
              </h2>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-slate-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all group">
              <h2 className="text-xl font-bold mb-6 text-blue-400 tracking-wide border-b border-gray-700 pb-2">
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-white font-semibold">
                      {exp.company}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {exp.role}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      {exp.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-blue-500/20 transition-all group">
              <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide border-b border-gray-700 pb-2">
                EDUCATION
              </h2>
              <div className="pl-6 border-l-2 border-blue-500/30 relative">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1"></div>
                <p className="text-white font-semibold">
                  BSc/Hon in Computer Science
                </p>
                <p className="text-gray-400">
                  Ashoka University
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-mono text-gray-500 uppercase tracking-[0.3em]">System Interface</h3>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default About;
