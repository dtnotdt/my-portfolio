import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Section({ id, children, className = '' }) {
  const ref = useRef(null);
  
  // Track this section's progress as it scrolls out of view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // As the user scrolls past this section, it scales down, blurs slightly, and fades backwards
  // simulating depth and layered journal pages piling up
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.section 
      ref={ref}
      id={id} 
      style={{ scale, opacity, y, filter }}
      className={`min-h-[90svh] relative flex flex-col justify-center px-6 py-20 md:py-24 z-10 origin-top bg-background/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] md:rounded-[4rem] mb-12 lg:mb-24 shadow-[0_30px_80px_rgba(0,0,0,0.5)] ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
