import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, ArrowRight, Heart, Download } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

export default function Hero() {
  const [secret, setSecret] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-12 lg:gap-16 min-h-full overflow-hidden">
      
      {/* Pastel Text Column */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:w-1/2 flex flex-col justify-center">
        
        <motion.div variants={itemVariants} className="inline-flex items-center self-start gap-2 px-4 py-2 bg-white/60 rounded-full border border-white/60 text-sm font-medium mb-8 text-[#701a75] shadow-sm backdrop-blur-md">
          <Heart size={14} className="text-pink-400 fill-pink-400 animate-pulse" />
          Welcome to my digital space
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 text-[#4c1d95] drop-shadow-sm">
          Dhitee Shah.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#701a75] font-medium mb-6 flex flex-col gap-2">
          <span>Cyber Security Enthusiast</span>
          <span className="opacity-80">Web Dev & AI/ML</span>
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-[#701a75]/80 mb-10 leading-relaxed max-w-lg">
          I’m driven by curiosity, built on logic, and drawn to creating digital experiences that are both brilliantly useful and cheerfully designed.
        </motion.p>
        
        {/* Pastel CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
          <a href="/resume.pdf" download className="group bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-[#4c1d95] px-8 py-3.5 rounded-full font-medium shadow-[0_10px_20px_rgba(236,72,153,0.3)] hover:shadow-[0_10px_25px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2 border border-white/50">
            Download Resume 
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          
          <div className="flex gap-3">
            <a href="#" className="p-3.5 bg-white/70 border border-white/80 rounded-full text-[#701a75] hover:text-[#4c1d95] hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <FileText size={20} />
            </a>
            <a href="https://github.com/dtnotdt" target="_blank" rel="noreferrer" className="p-3.5 bg-white/70 border border-white/80 rounded-full text-[#701a75] hover:text-[#4c1d95] hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/dhiteeshah" target="_blank" rel="noreferrer" className="p-3.5 bg-white/70 border border-white/80 rounded-full text-[#701a75] hover:text-[#4c1d95] hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Pastel Polaroid Cutout Portrait */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:w-[45%] relative flex justify-center mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-[3rem] blur-3xl opacity-60 -z-10" />
        
        <div className="relative w-full max-w-sm rounded-[2.5rem] bg-white/50 border border-white/80 p-5 shadow-[0_20px_50px_rgba(76,29,149,0.1)] backdrop-blur-md">
          {/* Cute decorative pixel sticker (EASTER EGG) */}
          <div 
            onClick={() => setSecret(true)}
            className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center font-pixel text-3xl rotate-12 shadow-lg border-4 border-white text-yellow-600 z-50 hover:rotate-45 hover:scale-110 cursor-pointer transition-transform duration-500"
          >
            ★
          </div>
          
          <AnimatePresence>
            {secret && (
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute top-16 -right-16 md:-right-24 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl z-50 border border-pink-200 text-sm font-medium w-56 text-[#701a75]"
              >
                <h4 className="font-heading font-bold text-pink-500 mb-1">Secret File Found! 📁</h4>
                <span className="opacity-80 mt-1 block font-normal leading-relaxed text-[#4c1d95]">Keep building, stay curious, and add a little magic to everything you do. ✨</span>
                <button onClick={(e) => { e.stopPropagation(); setSecret(false); }} className="mt-4 bg-pink-100 px-3 py-1.5 rounded-lg text-xs font-bold text-pink-600 hover:bg-pink-200 transition-colors w-full">Got it</button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Polaroid Frame */}
          <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-blue-50 to-pink-50 relative flex items-end border border-white/50">
            {/* The transparent cutout portrait blending cleanly into background */}
            <img 
              src="/portrait.png" 
              alt="Dhitee Shah" 
              className="w-full h-full object-cover object-bottom drop-shadow-xl"
            />
            
            {/* Overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 to-transparent pointer-events-none" />
          </div>

          <div className="text-center mt-4 font-pixel text-[#701a75]/60 text-sm tracking-widest">
            hello_world.exe
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
