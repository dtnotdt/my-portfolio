import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, Globe, Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const categories = [
    {
      title: "Core CS & Systems",
      icon: <Terminal className="text-blue-500" />,
      color: "from-blue-200 to-indigo-200",
      skills: ["C/C++", "Java", "Python", "Data Structures", "Algorithms", "Object-Oriented Programming (OOP)"]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-pink-500" />,
      color: "from-pink-200 to-rose-200",
      skills: ["HTML5 / CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Framer Motion"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Database className="text-purple-500" />,
      color: "from-purple-200 to-fuchsia-200",
      skills: ["Machine Learning", "Data Analysis", "Python Libraries", "Model Training"]
    },
    {
      title: "Cyber Security",
      icon: <Code2 className="text-emerald-500" />,
      color: "from-emerald-200 to-teal-200",
      skills: ["Network Security", "Vulnerability Assessment", "Ethical Hacking Concepts", "Cryptography"]
    },
    {
      title: "Design & UX",
      icon: <Sparkles className="text-yellow-500" />,
      color: "from-yellow-200 to-amber-200",
      skills: ["Figma", "UI/UX Principles", "Motion Design", "Wireframing"]
    }
  ];

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-3 h-3 bg-pink-400 rounded-full animate-bounce mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-[2rem] bg-white/50 border border-white/60 shadow-[0_15px_30px_rgba(76,29,149,0.05)] backdrop-blur-md relative overflow-hidden group hover:-translate-y-1 transition-transform ${idx === categories.length - 1 ? 'lg:col-span-2' : ''}`}
            >
              {/* Soft Gradient Overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.color} opacity-30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-white/80">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#4c1d95]">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/70 border border-white/80 shadow-sm rounded-full text-sm font-medium text-[#701a75]/80 hover:bg-white hover:text-[#4c1d95] hover:shadow-md transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
