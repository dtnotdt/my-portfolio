import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Terminal as Codeforces, CheckSquare2, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("dhitee018@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("+919023109307");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
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
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <motion.div variants={itemVariants} className="w-20 h-20 bg-pink-100 rounded-[2rem] border border-pink-200 shadow-inner flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
           <span className="text-4xl font-pixel animate-pulse text-pink-400">♥</span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-heading font-extrabold text-[#4c1d95] mb-6">
          Let's create <br/> something cute.
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-[#701a75]/80 mb-16 font-medium max-w-2xl px-4">
          Always open to discussing web development, AI projects, cybersecurity, or whatever curious ideas you have in mind.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 lg:gap-8 mb-16 flex-wrap justify-center w-full">
          {/* Email Button */}
          <div className="relative">
            <a 
              href="mailto:dhitee018@gmail.com" 
              onClick={handleCopyEmail}
              className="group flex flex-col items-center gap-3 p-6 bg-white/60 border border-white/80 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-2 hover:bg-white transition-all min-w-[170px] cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <span className="font-heading font-bold text-[#4c1d95] text-lg">Email Me</span>
              <span className="text-xs font-mono opacity-60 group-hover:text-blue-500 transition-colors">Click to copy</span>
            </a>
            <AnimatePresence>
              {emailCopied && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -20 }} exit={{ opacity: 0, y: 0 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 border border-emerald-200 rounded-xl shadow-lg flex items-center gap-2 text-emerald-600 font-bold text-sm pointer-events-none z-50 whitespace-nowrap"
                >
                   <CheckSquare2 size={16} /> Copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phone Button */}
          <div className="relative">
            <a 
              href="tel:+919023109307" 
              onClick={handleCopyPhone}
              className="group flex flex-col items-center gap-3 p-6 bg-white/60 border border-white/80 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-2 hover:bg-white transition-all min-w-[170px] cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <span className="font-heading font-bold text-[#4c1d95] text-lg">Call Me</span>
              <span className="text-xs font-mono opacity-60 group-hover:text-green-500 transition-colors">Click to copy</span>
            </a>
            <AnimatePresence>
              {phoneCopied && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -20 }} exit={{ opacity: 0, y: 0 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 border border-emerald-200 rounded-xl shadow-lg flex items-center gap-2 text-emerald-600 font-bold text-sm pointer-events-none z-50 whitespace-nowrap"
                >
                   <CheckSquare2 size={16} /> Copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LinkedIn Button */}
          <div className="relative">
            <a 
              href="https://www.linkedin.com/in/dhitee-shah-936a64351/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-white/60 border border-white/80 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-2 hover:bg-white transition-all min-w-[170px]"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <span className="font-heading font-bold text-[#4c1d95] text-lg">Connect</span>
              <span className="text-xs font-mono opacity-60">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <a href="https://github.com/dtnotdt" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#701a75]/80 hover:text-[#4c1d95] transition-colors group">
            <Github size={18} /> GitHub <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
          </a>
          <a href="https://codeforces.com/profile/dhitee018" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#701a75]/80 hover:text-[#4c1d95] transition-colors group">
            <Codeforces size={18} /> Codeforces <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#4c1d95]/50 bg-white/50 px-4 py-2 rounded-xl border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm">
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
