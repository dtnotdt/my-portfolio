import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  { id: 'hero', title: 'Intro' },
  { id: 'about', title: '01 / Story' },
  { id: 'education', title: '02 / Foundation' },
  { id: 'build', title: '03 / Build' },
  { id: 'impact', title: '04 / Impact' },
  { id: 'project', title: '05 / Project' },
  { id: 'signals', title: '06 / Signals' },
  { id: 'drives', title: '07 / Drives Me' },
  { id: 'contact', title: 'Contact' }
];

export default function SideNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map(c => document.getElementById(c.id));
      let current = 'hero';
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {chapters.map((chapter) => {
        const isActive = active === chapter.id;
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group flex items-center justify-end gap-4 text-right"
            aria-label={chapter.title}
          >
            <span 
              className={`text-xs font-mono tracking-widest transition-all duration-500 ease-out ${
                isActive 
                  ? 'opacity-100 text-accent translate-x-0' 
                  : 'opacity-0 text-foreground/50 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
              }`}
            >
              {chapter.title}
            </span>
            <div 
              className={`w-[1px] rounded-full transition-all duration-500 ease-out ${
                isActive 
                  ? 'h-8 bg-accent' 
                  : 'h-2 bg-foreground/20 group-hover:bg-foreground/50 group-hover:h-4'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
