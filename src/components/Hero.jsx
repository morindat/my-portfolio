import { useState, useEffect } from "react";
import profileFront from "../assets/Pops.jpg";
import profileBack from "../assets/Papaa.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const roles = [
    "Web Developer",
    "Aspiring SWE",
    "Full Stack Developer",
    "Tech Enthusiast",
  ];

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
  }, [text, isDeleting, index, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 relative overflow-hidden pt-24 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a0f1a]">

      {/* Subtle animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side: Text Content */}
          <div className="order-2 lg:order-1">

            <p className="text-purple-400 text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold break-words"
               style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif" }}>
              HELLO,
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight break-words"
                style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif" }}>
              It's Morindat,
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mb-8 flex items-center gap-2 flex-wrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                A
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {text}
              </span>
              <span className="w-3 h-8 bg-purple-400 animate-pulse shrink-0"></span>
            </div>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
               style={{ fontFamily: "'Amatic SC', cursive", fontWeight: "400" }}>
              A personal website of another one of the so called{" "}
              <span className="text-white font-bold">"self-taught"</span>{" "}
              developer. Building cool stuff one line at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
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

          {/* Right Side: Flip Card */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div
              className="relative w-64 h-80 sm:w-72 sm:h-96 cursor-pointer group perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              {/* Card Container */}
              <div 
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-500/30 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img 
                    src={profileFront} 
                    alt="Profile Front" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-xl">Morindat</p>
                    <p className="text-purple-300 text-sm">Developer</p>
                  </div>
                </div>

                {/* Back of Card - NO OVERLAY (Clean Image) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20 border-2 border-pink-500/30 bg-[#0a0a0f]"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <img 
                    src={profileBack} 
                    alt="Profile Back" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
            
            {/* Hint text */}
            <p className="absolute -bottom-10 text-gray-500 text-sm lg:hidden">Tap to flip</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;