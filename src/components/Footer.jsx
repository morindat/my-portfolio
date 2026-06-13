import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Identity Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold tracking-tighter uppercase font-heading">Morindat</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building digital experiences with a focus on clean code and human-centered design.
            </p>
          </div>

          {/* Quote Column - The Heart */}
          <div className="flex flex-col justify-center border-l border-r border-white/5 px-8 text-center md:text-left">
            <p className="text-purple-300/80 italic text-lg font-medium leading-relaxed">
              "I am a programmer, I code, I said, he looked at me and said, I am a teacher, I teach. I can not guarantee everyone I teach will become successful, but I do make sure they follow their heart, and live a life they do not regret."
            </p>
          </div>

          {/* Links & Socials Column */}
          <div className="flex flex-col items-center md:items-end space-y-8">
            <nav className="flex gap-6 text-sm font-medium text-gray-400 uppercase tracking-widest font-heading">
              <button onClick={() => handleNavClick('hero')} className="hover:text-purple-400 transition-colors">Home</button>
              <button onClick={() => handleNavClick('projects')} className="hover:text-purple-400 transition-colors">Projects</button>
              <button onClick={() => handleNavClick('skills')} className="hover:text-purple-400 transition-colors">Skills</button>
            </nav>

            <div className="flex gap-6">
              <a href="mailto:papaadennis@gmail.com" className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaEnvelope size={20} /></a>
              <a href="https://github.com/Papadizzo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaGithub size={20} /></a>
              <a href="https://linkedin.com/in/morindat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/justindizzo17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"><FaInstagram size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono tracking-widest">
          <p>© {currentYear} MORINDAT. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT, TAILWIND & PASSION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
