import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, Terminal as Codeforces, CheckSquare2, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("dhitee018@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-8 md:p-12 h-full flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-2xl mx-auto text-center flex flex-col items-center">
        
        <motion.div variants={itemVariants} className="w-20 h-20 bg-pink-100 rounded-[2rem] border border-pink-200 shadow-inner flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
           <span className="text-4xl font-pixel animate-pulse text-pink-400">♥</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-heading font-extrabold text-[#4c1d95] mb-6">
          Let's create <br/> something cute.
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-[#701a75]/80 mb-12 font-medium">
          Always open to discussing web development, AI projects, cybersecurity, or whatever curious ideas you have in mind.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 relative">
          <a 
            href="mailto:dhitee018@gmail.com" 
            onClick={handleCopyEmail}
            className="group flex flex-col items-center gap-3 p-6 bg-white/60 border border-white/80 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-2 hover:bg-white transition-all min-w-[160px] cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <span className="font-heading font-bold text-[#4c1d95]">Email Me</span>
            <span className="text-xs font-mono opacity-60 group-hover:text-blue-500 transition-colors">Click to copy</span>
          </a>

          <AnimatePresence>
            {copied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0, y: 0 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 border border-emerald-200 rounded-xl shadow-lg flex items-center gap-2 text-emerald-600 font-bold text-sm pointer-events-none z-50 whitespace-nowrap"
              >
                 <CheckSquare2 size={16} /> Copied to clipboard!
              </motion.div>
            )}
          </AnimatePresence>

          <a 
            href="https://linkedin.com/in/dhiteeshah" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col items-center gap-3 p-6 bg-white/60 border border-white/80 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-2 hover:bg-white transition-all min-w-[160px]"
          >
            <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <span className="font-heading font-bold text-[#4c1d95]">Connect</span>
            <span className="text-xs font-mono opacity-60">LinkedIn</span>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-6 mt-auto">
          <a href="https://github.com/dtnotdt" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#701a75]/70 hover:text-[#4c1d95] transition-colors group">
            <Github size={18} /> GitHub <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
          <a href="https://codeforces.com/profile/dhitee018" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#701a75]/70 hover:text-[#4c1d95] transition-colors group">
            <Codeforces size={18} /> Codeforces <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4c1d95]/50 bg-white/50 px-4 py-2 rounded-xl border border-white/60 shadow-sm backdrop-blur-sm">
             <Sparkles size={12} className="text-pink-400" /> Frontend Craftsmanship
          </div>
          <p className="text-[11px] font-mono text-[#701a75]/70 max-w-md mt-2 leading-relaxed">
            Designed & built with absolute attention to visual storytelling, motion, and interaction design. Custom engineered for responsive perfection using React, Tailwind v4, and Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
