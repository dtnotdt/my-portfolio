import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiaryIntro({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Give an initial pause, then smoothly open the cinematic diary cover
    const openTimer = setTimeout(() => setIsOpen(true), 800);
    
    // After it's open and user reads the first page briefly, fade out the whole overlay
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      setTimeout(onComplete, 1200); // Trigger app mount
    }, 3800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] perspective-[2500px]"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient lighting focused around the book */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,118,110,0.15)_0%,transparent_50%)] opacity-80" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

          {/* Book Container */}
          <motion.div 
            className="relative w-[320px] h-[460px] md:w-[450px] md:h-[620px] preserve-3d shadow-[0_50px_100px_rgba(0,0,0,0.7)]"
            initial={{ rotateX: 10, y: 50, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            
            {/* The First Page (visible beneath the cover once it opens) */}
            <div className="absolute inset-0 bg-[#0d0d12] rounded-r-3xl rounded-l-md border border-white/5 shadow-inner flex items-center justify-center overflow-hidden">
               {/* Page spine crease */}
               <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/80 to-transparent z-10" />
               
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                 transition={{ duration: 1, delay: 0.8 }}
                 className="flex flex-col items-center gap-6 relative z-20"
               >
                 <div className="w-12 h-[1px] bg-accent" />
                 <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">Preface</p>
                 <h2 className="font-heading text-2xl md:text-3xl text-foreground font-light italic">The Story Begins</h2>
               </motion.div>
            </div>

            {/* The Cover */}
            <motion.div 
              className="absolute inset-0 origin-left preserve-3d cursor-pointer"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isOpen ? -165 : 0 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => !isOpen && setIsOpen(true)}
            >
               {/* Cover Front Texture */}
               <div className="absolute inset-0 bg-[#0d0d10] rounded-r-3xl rounded-l-md border border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center backface-hidden overflow-hidden">
                  
                  {/* Subtle premium cover pattern/grain */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '4px 4px' }} />
                  
                  {/* Book Spine indent */}
                  <div className="absolute left-6 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-black/20 to-black/60 shadow-[inset_2px_0_5px_rgba(0,0,0,0.5)] border-r border-l border-white/[0.02]" />
                  
                  <div className="relative z-10 text-center px-10 pt-16">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-8 border border-accent/30 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 tracking-tighter">Dhitee <br />Shah</h1>
                    <p className="text-xs md:text-sm font-mono text-accent uppercase tracking-[0.4em]">Built by Curiosity</p>
                  </div>
               </div>

               {/* Cover Back (inside the cover seen when flipped) */}
               <div className="absolute inset-0 bg-[#08080a] p-2 rounded-l-3xl rounded-r-md border border-white/5 flex items-center justify-center backface-hidden [transform:rotateY(180deg)]">
                  {/* Inside cover texture */}
                  <div className="w-full h-full border border-white/[0.03] rounded-l-[1.5rem] rounded-r-sm" />
                  <div className="absolute right-6 top-0 bottom-0 w-8 bg-gradient-to-l from-black/80 via-black/10 to-transparent" />
               </div>
            </motion.div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
