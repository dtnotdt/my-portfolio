import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Megaphone, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const images = ["/acm-1.jpg", "/acm-2.jpg", "/acm-3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const highlights = [
        "Strategized and executed digital marketing campaigns for technical events",
        "Increased engagement and registrations across platforms",
        "Designed posters, reels, emailers, and announcements",
        "Led publicity for “Prompt-to-Prototype” workshop",
        "Translated complex AI concepts into engaging narratives",
        "Collaborated with core team, speakers, and faculty"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">Experience</h2>
        </div>

        <motion.div variants={itemVariants} className="bg-white/50 border border-white/60 rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(76,29,149,0.06)] backdrop-blur-md flex flex-col lg:flex-row gap-10">
          
          {/* Slider Gallery */}
          <div className="lg:w-[45%] flex flex-col items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/60 border border-white/80 shadow-lg group">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`ACM Event ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Slider Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 md:px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={prevImg} className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#4c1d95] shadow hover:bg-white hover:scale-110 transition-all border border-white">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={nextImg} className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#4c1d95] shadow hover:bg-white hover:scale-110 transition-all border border-white">
                    <ChevronRight size={20} />
                 </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                 {images.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm border border-black/10 mix-blend-overlay ${idx === currentIndex ? 'bg-white scale-125 opacity-100' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                 ))}
              </div>

              {/* Cute Badge */}
              <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-600 font-pixel text-xs px-3 py-1.5 rounded-xl border-2 border-white shadow-md rotate-6 hover:rotate-12 transition-transform cursor-pointer">
                 gallery.zip
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/50 rounded-lg border border-blue-200/50 text-sm font-medium mb-6 text-blue-600 w-fit self-start">
              <Megaphone size={14} className="text-blue-500" />
              Sep 2025 – Present
            </div>

            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-[#4c1d95] mb-2 leading-tight">Media & Promotion Head</h3>
            <p className="text-[#701a75]/80 font-mono text-xs md:text-sm mb-6 uppercase tracking-wider">ACM Student Chapter, Nirma University</p>

            <ul className="space-y-4 mb-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#374151]">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
