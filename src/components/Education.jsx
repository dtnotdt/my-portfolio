import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

export default function Education() {
  const courses = [
    "Discrete Mathematics",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning Basics",
    "AI Ethics",
    "Data Structures & Algorithms",
    "Object-Oriented Programming"
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section id="education">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div variants={variants} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm tracking-widest text-accent uppercase">02 / Foundation</span>
              <div className="w-12 h-[1px] bg-white/10" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter">The Architecture of Learning.</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Timeline Card */}
          <motion.div variants={variants} className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors duration-700" />
            
            <div className="font-mono text-accent text-sm mb-6 tracking-widest uppercase">July 2024 — July 2028</div>
            <h3 className="text-3xl font-heading font-semibold mb-4 text-foreground/90 leading-tight">
              B.Tech. in Computer Science <br className="hidden md:block"/> and Engineering
            </h3>
            <p className="text-foreground/60 text-lg mb-10 font-light">Nirma University, Ahmedabad</p>
            
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground backdrop-blur-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">Current CGPA</span>
              <div className="w-px h-6 bg-white/10" />
              <span className="font-semibold text-2xl font-heading tracking-tight">8.16<span className="text-foreground/40 font-normal text-lg">/10</span></span>
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div variants={variants} className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="font-mono text-sm tracking-widest text-foreground/50 uppercase mb-8 flex items-center gap-4">
              Core Coursework
              <div className="flex-1 h-px bg-white/10" />
            </h4>
            <div className="flex flex-wrap gap-3">
              {courses.map((course, idx) => (
                <div 
                  key={idx}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-foreground/80 hover:border-accent/40 hover:bg-white/5 hover:text-white transition-all cursor-default duration-300 transform hover:-translate-y-0.5"
                >
                  {course}
                </div>
              ))}
            </div>
            
            <div className="mt-12 relative">
              <div className="absolute -left-4 top-0 text-4xl text-white/5 font-serif font-bold">"</div>
              <p className="text-foreground/50 italic font-serif text-xl leading-relaxed">
                Building the foundation in algorithms, systems design, and intelligence required to shape the future of tech.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
