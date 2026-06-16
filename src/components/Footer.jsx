import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaSpotify } from 'react-icons/fa';
import Logo from './Logo';
import { getNowPlaying } from '../utils/spotify';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [spotifyData, setSpotifyData] = useState({ isPlaying: false });

  useEffect(() => {
    const fetchSpotify = async () => {
      const data = await getNowPlaying();
      setSpotifyData(data);
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
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
            <p className="text-slate-300/80 italic text-lg font-medium leading-relaxed">
              "I am a programmer, I code, I said, he looked at me and said, I am a teacher, I teach. I can not guarantee everyone I teach will become successful, but I do make sure they follow their heart, and live a life they do not regret."
            </p>
          </div>

          {/* Links & Socials Column */}
          <div className="flex flex-col items-center md:items-end space-y-8">
            <nav className="flex gap-6 text-sm font-medium text-gray-400 uppercase tracking-widest font-heading">
              <button onClick={() => handleNavClick('hero')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => handleNavClick('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => handleNavClick('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
            </nav>

            <div className="flex gap-6">
              <a href="mailto:papaadennis@gmail.com" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"><FaEnvelope size={20} /></a>
              <a href="https://github.com/morindat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"><FaGithub size={20} /></a>
              <a href="https://linkedin.com/in/morindat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/justindizzo17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"><FaInstagram size={20} /></a>
            </div>

            {/* Spotify Integration */}
            <a 
              href={spotifyData.isPlaying ? spotifyData.songUrl : 'https://open.spotify.com/user/morindat'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 group hover:border-blue-500/30 transition-all"
            >
              <div className="relative flex items-center justify-center">
                {spotifyData.isPlaying && (
                  <div className={`w-2 h-2 bg-blue-500 rounded-full animate-ping absolute`}></div>
                )}
                <div className={`w-2 h-2 ${spotifyData.isPlaying ? 'bg-blue-500' : 'bg-gray-500'} rounded-full relative`}></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase leading-none mb-1">
                  {spotifyData.isPlaying ? 'Now Playing' : 'Offline'}
                </span>
                <span className="text-xs text-gray-300 font-medium group-hover:text-blue-400 transition-colors line-clamp-1">
                  {spotifyData.isPlaying ? `${spotifyData.title} — ${spotifyData.artist}` : 'Not listening right now'}
                </span>
              </div>
              {spotifyData.isPlaying && (
                <FaSpotify className="text-blue-400 ml-1 group-hover:animate-spin" />
              )}
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono tracking-widest">
          <p>© {currentYear} MORINDAT. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT, TAILWIND & <span className="text-blue-400">PASSION</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
