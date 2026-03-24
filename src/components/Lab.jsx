import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, BookOpen, Wrench, Activity } from 'lucide-react';

export default function Lab() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">The Lab</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Currently Learning */}
          <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white/50 border border-white/80 rounded-[2rem] shadow-[0_10px_30px_rgba(76,29,149,0.05)] hover:-translate-y-1 transition-transform backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 text-emerald-600">
              <div className="p-3 bg-emerald-100 rounded-2xl shadow-sm border border-emerald-200"><BookOpen size={24} /></div>
              <h3 className="font-bold text-xl font-heading">Currently Learning</h3>
            </div>
            <ul className="space-y-4 font-medium text-[#701a75]/80">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Advanced Prompting</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Web3 Security Basics</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-400" /> UI Microinteractions</li>
            </ul>
          </motion.div>

          {/* Currently Building */}
          <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white/50 border border-white/80 rounded-[2rem] shadow-[0_10px_30px_rgba(76,29,149,0.05)] hover:-translate-y-1 transition-transform backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 text-amber-600">
              <div className="p-3 bg-amber-100 rounded-2xl shadow-sm border border-amber-200"><Wrench size={24} /></div>
              <h3 className="font-bold text-xl font-heading">Currently Building</h3>
            </div>
            <p className="font-medium text-[#701a75]/80 mb-6 leading-relaxed">
              An automated OS dashboard concept demonstrating extreme frontend polish and custom component synergy.
            </p>
            <div className="w-full h-3 bg-white border border-black/5 rounded-full overflow-hidden shadow-inner">
               <motion.div className="h-full bg-gradient-to-r from-amber-300 to-yellow-400" initial={{ width: "0%" }} animate={{ width: "85%" }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} />
            </div>
            <p className="text-sm font-pixel text-amber-600/70 mt-3 text-right">85% complete</p>
          </motion.div>

          {/* Activity / Visitor Counter */}
          <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white/50 border border-white/80 rounded-[2rem] shadow-[0_10px_30px_rgba(76,29,149,0.05)] hover:-translate-y-1 transition-transform flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-3 mb-6 text-blue-600">
                <div className="p-3 bg-blue-100 rounded-2xl shadow-sm border border-blue-200"><Activity size={24} /></div>
                <h3 className="font-bold text-xl font-heading">System Status</h3>
              </div>
              <div className="flex gap-3 flex-wrap mb-4">
                 <span className="px-3 py-1.5 bg-green-100 border border-green-200 text-green-700 text-xs font-bold rounded-xl uppercase tracking-wider flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online</span>
                 <span className="px-3 py-1.5 bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold rounded-xl uppercase tracking-wider">Optimized</span>
              </div>
            </div>
            <div className="flex justify-between items-end border-t border-white/60 pt-6 mt-4">
               <span className="text-sm font-bold text-[#701a75]/60 uppercase tracking-wider">Visitors</span>
               <div className="flex gap-1.5">
                 {['0','1','4','2'].map((num, i) => (
                    <div key={i} className="w-7 h-10 bg-gray-900 text-green-400 font-pixel flex items-center justify-center rounded-lg text-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-gray-700">
                      {num}
                    </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Placeholder GitHub Activity */}
          <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white/50 border border-white/80 rounded-[2rem] shadow-[0_10px_30px_rgba(76,29,149,0.05)] md:col-span-2 lg:col-span-3 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 text-pink-600">
              <div className="p-3 bg-pink-100 rounded-2xl shadow-sm border border-pink-200"><Beaker size={24} /></div>
              <h3 className="font-bold text-xl font-heading">Activity Graph</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 bg-white/40 p-4 rounded-3xl border border-white/60 shadow-inner">
               {Array.from({ length: 180 }).map((_, i) => {
                 const rand = Math.random();
                 let color = 'bg-pink-50 border-pink-100/50';
                 if (rand > 0.9) color = 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]';
                 else if (rand > 0.7) color = 'bg-pink-300';
                 else if (rand > 0.5) color = 'bg-pink-200';

                 return (
                   <motion.div 
                     key={i} 
                     whileHover={{ scale: 1.5, zIndex: 10 }}
                     className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-sm border ${color} cursor-pointer transition-colors`} 
                   />
                 );
               })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
