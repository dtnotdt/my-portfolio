import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor generally via CSS globally is better, 
    // but we just render an overlay cursor here
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering clickable
      const target = e.target;
      if (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-multiply"
      animate={{ 
        x: mousePosition.x - (isHovering ? 24 : 16), 
        y: mousePosition.y - (isHovering ? 24 : 16) 
      }}
      transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.2 }}
    >
      <motion.div 
        className="bg-pink-400/30 rounded-full blur-[4px]"
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute w-2 h-2 bg-pink-500 rounded-full" />
    </motion.div>
  );
}
