import React, { useState, useEffect, useRef } from 'react';
import { FiTerminal, FiChevronRight } from 'react-icons/fi';

const Terminal = () => {
  const [input, setInput] = useState('');
  const welcomeMessage = [
    { type: 'output', content: 'Welcome to Morindat OS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ];
  const [history, setHistory] = useState(welcomeMessage);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => 'Available commands: about, skills, contact, clear, whoami',
    whoami: () => 'User: Guest\nRole: Explorer\nStatus: Online',
    about: () => 'I am Morindat, an aspiring Software Engineer focused on building high-performance, minimalist digital experiences.',
    skills: () => 'Languages: C, C++, JS, Python, OCaml, Rust\nTools: React, Node.js, Tailwind, MongoDB, Git',
    contact: () => 'Email: papaadennis@gmail.com\nGitHub: @morindat\nLinkedIn: in/morindat',
    clear: () => {
      setHistory(welcomeMessage);
      return null;
    },
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();

      if (cmd === 'clear') {
        setHistory(welcomeMessage);
        setInput('');
        return;
      }

      const newHistory = [...history, { type: 'input', content: input }];

      if (commands[cmd]) {
        const result = commands[cmd]();
        if (result !== null) {
          newHistory.push({ type: 'output', content: result });
        }
      } else if (cmd !== '') {
        newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type "help" for options.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 font-mono text-sm">
      <div className="bg-gray-900/50 rounded-t-lg border-t border-l border-r border-white/10 p-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 ml-2">
          <FiTerminal className="w-3 h-3" />
          <span className="text-[10px] uppercase tracking-widest">bash — morindat@portfolio</span>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="bg-black/80 backdrop-blur-md border border-white/10 p-6 h-80 sm:h-96 overflow-y-auto rounded-b-lg scrollbar-hide"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-2 ${line.type === 'input' ? 'text-blue-400' : 'text-gray-300'}`}>
            {line.type === 'input' && <span className="mr-2 text-blue-500">➜</span>}
            <span className="whitespace-pre-wrap">{line.content}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-blue-400">
          <span className="text-blue-500 font-bold">➜</span>
          <span className="text-blue-300">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none flex-1 text-white caret-blue-500"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
