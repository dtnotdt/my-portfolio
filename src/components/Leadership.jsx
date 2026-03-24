import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section id="impact">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-sm tracking-widest text-accent uppercase">04 / Impact</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter mb-8 leading-[1.1]">
              Shaping Visibility <br />
              & Engagement.
            </h2>
            
            <p className="text-xl text-foreground/80 font-light leading-relaxed mb-6">
              As the <span className="text-white font-medium border-b border-accent/50">Media & Promotion Head</span> at the ACM Student Chapter, I bridge the gap between complex technical concepts and engaging communication.
            </p>
            
            <p className="text-lg text-foreground/60 leading-relaxed mb-10 font-light">
              It’s not just about making posters; it’s about crafting narratives. I lead marketing strategies, design digital assets, and collaborate with faculty and speakers to build consistent, impactful messaging for university events.
            </p>

            <ul className="space-y-5">
              {[
                "Strategized digital marketing campaigns for technical events",
                "Increased active engagement and workshop registrations",
                "Led comprehensive publicity for the 'Prompt-to-Prototype' workshop",
                "Translated AI & tech ideas into accessible narratives"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0 opacity-80" />
                  <span className="leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,118,110,0.15)_0%,transparent_70%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Abstract graphic representing social buzz, media, strategy */}
                <div className="absolute w-48 h-64 rounded-xl border border-white/5 bg-white/[0.01] rotate-[-15deg] group-hover:rotate-0 transition-all duration-700 ease-out translate-x-12 group-hover:translate-x-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
                <div className="absolute w-56 h-72 rounded-xl border border-accent/20 bg-black/40 rotate-[5deg] group-hover:rotate-0 transition-all duration-700 ease-out z-10 backdrop-blur-md flex flex-col justify-end p-4 shadow-[0_0_40px_rgba(15,118,110,0.2)]">
                  <div className="w-full flex gap-2">
                    <div className="h-6 w-full rounded bg-white/10" />
                    <div className="h-6 w-1/3 rounded bg-accent/40" />
                  </div>
                </div>
                <div className="absolute w-40 h-56 rounded-xl border border-white/10 bg-white/[0.02] rotate-[20deg] group-hover:rotate-6 transition-all duration-700 ease-out -translate-x-16 group-hover:-translate-x-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
              </div>
            </div>

            <div className="absolute top-8 left-8">
              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-2">ACM Chapter</div>
              <div className="text-xl font-heading font-medium tracking-tight text-white">Sep 2024 — Present</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
