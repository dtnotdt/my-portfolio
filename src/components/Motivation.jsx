import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

export default function Motivation() {
  const drives = [
    { title: "Cybersecurity", description: "Finding the invisible gaps before they're exploited." },
    { title: "AI/ML", description: "Training intelligence to solve complex human problems." },
    { title: "Web Products", description: "Building tools that are undeniably useful and beautiful." },
    { title: "Simplifying Ideas", description: "Translating deep technical concepts into accessible truths." },
    { title: "Continuous Learning", description: "Staying curious in an industry that never stops evolving." },
    { title: "Tech + Storytelling", description: "Making logic human-centric through design and narrative." }
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section id="drives">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-sm tracking-widest text-accent uppercase">07 / Drives Me</span>
        <div className="w-12 h-[1px] bg-white/10" />
      </div>

      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter mb-6">The Internal Engine.</h2>
        <p className="text-xl text-foreground/60 max-w-2xl font-light leading-relaxed">
          What keeps me building, learning, and iterating long after the course requirements are met.
        </p>
      </div>

      <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        {drives.map((drive, idx) => (
          <motion.div key={idx} variants={variants} className="group border-l border-white/10 pl-6 hover:border-accent transition-colors duration-500">
            <h3 className="text-xl font-heading font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-500">{drive.title}</h3>
            <p className="text-foreground/60 font-light leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">{drive.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 p-8 md:p-12 lg:p-16 rounded-[2rem] bg-accent/5 border border-accent/20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-accent/10 blur-[80px] rounded-full" />
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium tracking-tight text-foreground/90 relative z-10 leading-snug max-w-3xl mx-auto">
          "The most exciting problems aren't just technical—they're human. I build to solve both."
        </p>
      </motion.div>
    </Section>
  );
}
