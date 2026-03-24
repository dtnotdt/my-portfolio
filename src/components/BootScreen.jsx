import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 500);
          setTimeout(() => onComplete(), 1500); // Trigger app reveal
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fdf2f8] text-[#701a75] font-pixel selection:bg-pink-300"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle floating sparkles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
             {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                   <Sparkles size={Math.random() * 20 + 10} className="text-[#d1fae5]" />
                </motion.div>
             ))}
          </div>

          <div className="relative z-10 text-center max-w-sm w-full px-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-8 text-4xl md:text-5xl font-pixel tracking-widest text-[#4c1d95]"
            >
               DhiteeOS
            </motion.div>
            
            <div className="text-xl md:text-2xl mb-4 italic text-[#701a75] h-8">
               {progress < 100 ? "Loading creative mode..." : "Welcome to Dhitee's World..."}
            </div>

            <div className="w-full h-4 bg-white/60 rounded-full border-2 border-[#4c1d95]/10 p-0.5 overflow-hidden shadow-sm">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#e0f2fe] via-[#f3e8ff] to-[#ffedd5] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="mt-4 text-lg tabular-nums">
              {Math.min(progress, 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
