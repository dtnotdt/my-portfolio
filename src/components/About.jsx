import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center p-8 md:p-12 lg:p-16 gap-12 lg:gap-16 min-h-full">
      <div className="lg:w-5/12 relative order-2 lg:order-1">
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="aspect-[4/5] rounded-[2.5rem] bg-white/40 border border-white/60 p-4 shadow-[0_20px_50px_rgba(76,29,149,0.1)] backdrop-blur-md relative group"
        >
          <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 overflow-hidden relative">
            {/* Visual Element representing connections */}
            <div className="absolute inset-0 flex items-center justify-center opacity-80">
              <div className="w-32 h-48 border-[6px] border-white/50 rounded-t-full rotate-12 transition-all duration-700 bg-white/20 backdrop-blur-sm shadow-xl flex items-center justify-center">
                 <div className="font-pixel text-4xl text-[#701a75]/40 opacity-50">&lt;/&gt;</div>
              </div>
            </div>
          </div>
          
          {/* Decorative sticker */}
          <div className="absolute -bottom-5 -left-5 bg-white px-4 py-2 rounded-2xl shadow-lg border border-pink-100 font-pixel text-pink-500 text-sm -rotate-6">
            chapter_01.txt
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="lg:w-7/12 flex flex-col justify-center order-1 lg:order-2"
      >
        <motion.div variants={textVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-white/50 rounded-full border border-white/50 text-sm font-pixel text-[#701a75]/70 mb-6 self-start backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
          The Origin Story
        </motion.div>
        
        <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-8 text-[#4c1d95] leading-[1.1]">
          Code, Logic, <br />
          & Context.
        </motion.h2>
        
        <div className="space-y-6 text-[#374151] text-lg md:text-xl font-light leading-relaxed">
          <motion.p variants={textVariants}>
            My journey didn’t start with just writing code; it started with trying to understand how systems communicate, scale, and occasionally break. I constantly explore the beautiful overlap where <span className="font-medium text-[#701a75]">cybersecurity, web development, and AI intersect.</span>
          </motion.p>
          <motion.p variants={textVariants}>
            Technical logic builds the engine, but <span className="bg-pink-200/50 px-1 rounded">empathy and design</span> determine how the world experiences it. I believe the best tools are built with both.
          </motion.p>
          <motion.p variants={textVariants}>
            Whether I’m securing a vulnerability, crafting a fluid UI, or training an ML model, my goal remains the same: to build digital experiences that feel intentional, solve real problems, and look absolutely stunning doing it.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
