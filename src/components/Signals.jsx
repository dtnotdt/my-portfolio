import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, FileBadge, Trophy } from 'lucide-react';

export default function Signals() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const signals = [
    {
      type: "Certification",
      title: "Oracle Cloud Infrastructure 2024 Foundations Associate",
      issuer: "Oracle",
      icon: <Award className="text-blue-500" />,
      color: "from-blue-100 to-blue-50 border-blue-200 text-blue-700"
    },
    {
      type: "Program",
      title: "Cyber Shikshaa for College Students",
      issuer: "DSCI-Microsoft",
      icon: <ShieldCheck className="text-purple-500" />,
      color: "from-purple-100 to-purple-50 border-purple-200 text-purple-700"
    },
    {
      type: "Externship",
      title: "Cyber Security & Tech Externship",
      issuer: "Deloitte",
      icon: <FileBadge className="text-emerald-500" />,
      color: "from-emerald-100 to-emerald-50 border-emerald-200 text-emerald-700"
    },
    {
      type: "Competition",
      title: "Smart India Hackathon 2024",
      issuer: "National Level (Team Leader)",
      icon: <Trophy className="text-yellow-500" />,
      color: "from-yellow-100 to-yellow-50 border-yellow-200 text-yellow-700"
    }
  ];

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">Milestones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {signals.map((signal, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-[2rem] bg-gradient-to-br ${signal.color} border shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-4`}
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-white/80 shrink-0 group-hover:scale-110 transition-transform">
                {signal.icon}
              </div>
              
              <div>
                <div className="font-pixel text-xs tracking-widest uppercase opacity-70 mb-2">{signal.type}</div>
                <h3 className="text-lg font-bold leading-tight mb-2 text-current">{signal.title}</h3>
                <p className="text-sm font-medium opacity-80">{signal.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
