import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">Case Study</h2>
        </div>

        <motion.div variants={itemVariants} className="bg-white/50 border border-white/60 rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(76,29,149,0.06)] backdrop-blur-md flex flex-col lg:flex-row gap-10">
          
          {/* Mac Browser Mockup */}
          <div className="lg:w-1/2">
            <div className="w-full bg-white/80 border border-white/60 rounded-2xl shadow-lg overflow-hidden group">
              {/* Browser Header */}
              <div className="bg-gray-100/50 p-3 flex gap-2 border-b border-gray-200/50">
                <div className="w-3 h-3 rounded-full bg-rose-400 border border-black/10 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-amber-400 border border-black/10 shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-emerald-400 border border-black/10 shadow-sm" />
              </div>
              {/* Content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#fdf2f8] to-[#e0f2fe] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.1)_2px,transparent_2px)]" style={{ backgroundSize: '24px 24px' }} />
                
                {/* Simulated App UI inside browser */}
                <div className="w-full h-full bg-white/80 rounded-xl shadow-md border border-white border-t-4 border-t-pink-400 p-6 relative z-10 group-hover:scale-[1.02] transition-transform duration-500 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold mb-4 shadow-sm border border-pink-200">
                    A+
                  </div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full mb-3" />
                  <div className="w-1/2 h-3 bg-gray-100 rounded-full mb-8" />
                  
                  <div className="w-full space-y-2">
                    <div className="w-full h-8 bg-blue-50 border border-blue-100 rounded flex items-center px-4"><div className="w-1/3 h-2 bg-blue-300 rounded-full" /></div>
                    <div className="w-full h-8 bg-purple-50 border border-purple-100 rounded flex items-center px-4"><div className="w-1/4 h-2 bg-purple-300 rounded-full" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold text-[#4c1d95] mb-2">Grade Calculator App</h3>
            <p className="text-[#701a75]/80 font-pixel text-sm mb-6 uppercase tracking-wider">HTML5 • CSS3 • JAVASCRIPT</p>

            <p className="text-[#701a75] text-lg leading-relaxed mb-6 font-medium">
              A robust frontend utility built to solve a specific, high-friction problem for university students. Engineered with dynamic input generation and responsive logic.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Dynamically calculated CGPA matrix",
                "Built-in error catching and input validation",
                "Responsive mobile-first interface",
                "Zero-dependency vanilla implementation"
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-[#374151]">
                  <CheckCircle2 size={18} className="text-pink-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#4c1d95] text-white rounded-xl shadow-md hover:bg-[#3b1575] hover:-translate-y-1 transition-all font-medium border border-transparent">
                 <ExternalLink size={18} /> Live App
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/70 border border-pink-200/50 text-[#4c1d95] font-medium rounded-xl shadow-sm hover:bg-white hover:-translate-y-1 transition-all">
                 <Github size={18} /> Source Code
              </a>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
}
