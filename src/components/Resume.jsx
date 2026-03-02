import React from 'react';

const Skills = () => {
  const softwareSkills = [
    "Photoshop",
    "Illustrator", 
    "InDesign",
    "Premiere",
    "After Effect"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Arabic", level: "Native" },
    { name: "Turkish", level: "Intermediate" }
  ];

  const personalSkills = [
    "Creativity",
    "Team Work",
    "Organisation"
  ];

  const experiences = [
    { role: "Art Director", company: "WHITE FISH ADVERTISING CO.", period: "2020-Present" },
    { role: "Senior Graphic Designer", company: "PYRAMIDS SUN ADVERTISING CO.", period: "2018-2020" },
    { role: "Graphic Designer", company: "PLANET STATIONARY & PRINTING SERVICES CO.", period: "2016-2018" },
    { role: "Graphic Designer", company: "PLAY GRAPHIC ADVERTISING AGENCY.", period: "2014-2016" },
    { role: "Graphic Designer", company: "MARCO FLORIDA INTERNET & COMPUTERS SERVICES CO.", period: "2012-2014" }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-8">
            {/* Software Skills */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6 text-purple-400 tracking-wide border-b border-gray-700 pb-2">
                SOFTWARE SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {softwareSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-purple-400">▹</span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6 text-purple-400 tracking-wide border-b border-gray-700 pb-2">
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
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-purple-400 tracking-wide border-b border-gray-700 pb-2">
                PERSONAL SKILLS
              </h2>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
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
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-6 text-purple-400 tracking-wide border-b border-gray-700 pb-2">
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-purple-500/30">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1"></div>
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
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-purple-400 tracking-wide border-b border-gray-700 pb-2">
                EDUCATION
              </h2>
              <div className="pl-6 border-l-2 border-purple-500/30 relative">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-1"></div>
                <p className="text-white font-semibold">
                  BS/MS in Computer Science
                </p>
                <p className="text-gray-400">
                  University of Maryland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;