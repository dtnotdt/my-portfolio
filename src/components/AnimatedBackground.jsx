import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Soft animated mesh gradients */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-accent-violet rounded-[100%] blur-[100px] mix-blend-multiply opacity-80"
        animate={{ 
          x: [0, 40, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[70vh] bg-accent rounded-[100%] blur-[120px] mix-blend-multiply opacity-80"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vh] bg-accent-peach rounded-[100%] blur-[100px] mix-blend-multiply opacity-80"
        animate={{ 
          x: [0, 25, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-[30vw] h-[40vh] bg-accent-mint rounded-[100%] blur-[90px] mix-blend-multiply opacity-60"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Tiny pastel pixel decorations & grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.03)_2px,transparent_2px)]" style={{ backgroundSize: '24px 24px' }} />
    </div>
  );
}
