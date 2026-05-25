import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaDatabase, FaHtml5, FaCss3Alt, FaCode, FaCog, FaMicrochip  
} from "react-icons/fa";

const Skills = () => {
  const languages = [
    { name: "C++", level: 90, icon: <FaCode /> },
    { name: "C", level: 85, icon: <FaCode /> },
    { name: "JavaScript", level: 80, icon: <FaJs /> },
    { name: "Python", level: 80, icon: <FaPython /> },
    { name: "MIPS Assembly", level: 65, icon: <FaMicrochip /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 /> },
    { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
    { name: "OCaml", level: 50, icon: <FaCode /> },
    { name: "Rust", level: 50, icon: <FaCode /> },
  ];

  const frameworks = [
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "Node.js", level: 70, icon: <FaNodeJs /> },
    { name: "Tailwind", level: 80, icon: <FaCog /> },
    { name: "Express", level: 75, icon: <FaCog /> },
    { name: "MongoDB", level: 70, icon: <FaDatabase /> },
    { name: "Git", level: 85, icon: <FaGitAlt /> },
    { name: "Pandas", level: 70, icon: <FaPython /> },
    { name: "NumPy", level: 70, icon: <FaPython /> },
    { name: "Matplotlib", level: 60, icon: <FaPython /> }
  ];

  // Course work data
  const courses = [
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms",
    "Operating Systems",
    "Computer Organization & Architecture",
    "Database Management Systems",
    "Programming Lab",
    "Intro to Machine Learning",
    "Linear Algebra",
    "Probability & Statistics",
    "Computer Networks",
    "Object-Oriented Programming",
    "Discrete Mathematics"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative">
      
      {/* Subtle top glow to connect with Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Technologies</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-xl font-bold mb-8 text-purple-400 border-b border-white/10 pb-2 inline-block">
              Languages & Core
            </h3>
            <div className="space-y-6">
              {languages.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-pink-400 border-b border-white/10 pb-2 inline-block">
              Frameworks, Tools & Libraries
            </h3>
            <div className="space-y-6">
              {frameworks.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Course Work Marquee Section */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Relevant Course Work
              </span>
            </h3>
          </div>

          {/* Scrolling Marquee - Only one row now */}
          <div className="relative overflow-hidden py-6">
            <div className="animate-scroll-left whitespace-nowrap">
              {courses.map((course, idx) => (
                <span key={idx} className="inline-block mx-4 text-lg md:text-xl text-gray-300 font-medium">
                  {course}
                  {idx < courses.length - 1 && (
                    <span className="mx-6 text-purple-500 text-2xl font-bold">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          display: inline-block;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const SkillBar = ({ name, level, icon }) => {
  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-xl group-hover:border-purple-500 group-hover:text-purple-400 transition-colors bg-white/5">
          {icon}
        </div>
        <div className="flex-1 flex justify-between items-center">
          <span className="text-gray-300 font-medium">{name}</span>
          <span className="text-xs text-gray-500">{level}%</span>
        </div>
      </div>
      <div className="h-[2px] bg-gray-800 rounded-full relative ml-14">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full relative transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0a0a0f] border-2 border-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;