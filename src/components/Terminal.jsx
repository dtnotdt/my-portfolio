import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal({ setActiveTab }) {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to DhiteeOS Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, projects, experience, achievements, contact, current_focus, resume, clear',
    whoami: 'Dhitee Shah. Cyber Security Enthusiast, Web Developer, and AI/ML explorer. Built on logic, driven by curiosity.',
    skills: 'Executing... Try typing "nav skills" to seamlessly open the skills window, or just browse my stack: React, JS, Tailwind, Python, C/C++.',
    projects: 'Grade Calculator - Error-free CGPA evaluation app natively built for University students.',
    experience: 'Media & Promotion Head @ ACM Student Chapter, driving digital engagement and events.',
    achievements: 'Oracle Cloud Foundations | Deloitte Externship | Smart India Hackathon.',
    contact: 'dhitee018@gmail.com | Connect to ping me.',
    current_focus: 'Prompt Engineering, scalable systems, and designing aesthetic interactions.',
    resume: 'Try typing "download resume" or click the file icon in the OS window.',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: `guest@dhitee:~$ ${cmd}` }];
      
      if (cmd === 'clear') {
        setHistory([]);
      } else if (commands[cmd]) {
        newHistory.push({ type: 'output', content: commands[cmd] });
      } else if (cmd.startsWith('nav ')) {
        const dest = cmd.split(' ')[1];
        if (dest && setActiveTab) {
          setActiveTab(dest);
          newHistory.push({ type: 'output', content: `Navigating to ${dest}...` });
        } else {
          newHistory.push({ type: 'output', content: `Unknown destination: ${dest}` });
        }
      } else if (cmd !== '') {
        newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type "help" for a list.` });
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="p-6 md:p-10 h-full flex flex-col font-pixel text-sm md:text-base">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
        <h2 className="text-xl md:text-2xl text-[#4c1d95] tracking-widest uppercase">bash.exe</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 bg-white/50 border border-white/80 rounded-2xl shadow-inner p-4 md:p-6 overflow-y-auto flex flex-col gap-3 text-[#4c1d95] backdrop-blur-sm"
      >
        {history.map((line, i) => (
          <div key={i} className={line.type === 'input' ? 'font-bold text-[#701a75]' : 'opacity-80 leading-relaxed'}>
            {line.content}
          </div>
        ))}
        <div className="flex gap-3 items-center mt-2 border-t border-white/40 pt-2">
          <span className="font-bold text-[#701a75]">guest@dhitee:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-[#4c1d95] placeholder-[#4c1d95]/30 focus:ring-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
            placeholder="Type a command..."
          />
        </div>
        <div ref={bottomRef} />
      </motion.div>
    </div>
  );
}
