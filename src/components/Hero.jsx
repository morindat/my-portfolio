import { useState, useEffect } from "react";
import profileImg from "../assets/Papaa.jpg";

const roles = [
    "Web Developer",
    "Aspiring SWE",
    "Full Stack Developer",
    "Tech Enthusiast",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentRole = roles[index];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, isDeleting && text === currentRole ? pauseTime : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-black">

      {/* Content Container */}
      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6 pt-20 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">

            <p className="text-blue-400 text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold break-words uppercase tracking-wider">
              HELLO,
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight break-words uppercase">
              It's Morindat,
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mb-8 flex items-center gap-2 flex-wrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-400">
                A
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-400">
                {text}
              </span>
              <span className="w-3 h-8 bg-blue-500 animate-pulse shrink-0"></span>
            </div>

            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 max-w-xl font-light">
              A personal website of an aspiring {" "}
              <span className="text-white font-bold">"software engineer"</span>{" "}
               Building cool stuff one line at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-slate-500 to-blue-600 rounded-lg font-medium text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 border border-white/20 rounded-lg font-medium text-white hover:bg-white/5 transition-colors"
              >
                View Projects
              </a>
            </div>

          </div>

          {/* Right Side: Static Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img 
                    src={profileImg} 
                    alt="Morindat" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x500/1a0f1a/ffffff?text=Morindat';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-2xl tracking-tighter uppercase font-heading">Morindat</p>
                    <p className="text-gray-400 text-sm font-medium tracking-widest font-mono">DEVELOPER</p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* Clickable Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:block cursor-pointer group"
        onClick={scrollToSkills}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500 text-xs font-mono tracking-wider opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300">
            SCROLL
          </span>
          <svg 
            className="w-3 h-3 text-gray-500 animate-bounce opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;