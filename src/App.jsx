import React, { useState } from 'react';
import { User, Code2, Briefcase, Zap, MessageCircleHeart, Target, FlaskConical, SquareTerminal } from 'lucide-react';
import BootScreen from './components/BootScreen';
import AnimatedBackground from './components/AnimatedBackground';
import OSWindow from './components/OSWindow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Signals from './components/Signals';
import Contact from './components/Contact';
import Lab from './components/Lab';
import Terminal from './components/Terminal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [activeTab, setActiveTab] = useState('intro');
  const [currentTheme, setCurrentTheme] = useState('Baby Pink Dream');

  const tabs = [
    { id: 'intro', label: 'Intro', icon: <User size={16} />, content: <Hero /> },
    { id: 'about', label: 'Story', icon: <span className="font-pixel text-lg leading-none">♡</span>, content: <About /> },
    { id: 'experience', label: 'Experience', icon: <Target size={16} />, content: <Experience /> },
    { id: 'skills', label: 'Skills', icon: <Zap size={16} />, content: <Skills /> },
    { id: 'projects', label: 'Projects', icon: <Code2 size={16} />, content: <Project /> },
    { id: 'signals', label: 'Signals', icon: <Briefcase size={16} />, content: <Signals /> },
    { id: 'lab', label: 'Lab', icon: <FlaskConical size={16} />, content: <Lab /> },
    { id: 'terminal', label: 'Terminal', icon: <SquareTerminal size={16} />, content: <Terminal setActiveTab={setActiveTab} /> },
    { id: 'contact', label: 'Contact', icon: <MessageCircleHeart size={16} />, content: <Contact /> },
  ];

  return (
    <div className={`text-[#4c1d95] font-sans h-[100svh] w-screen overflow-hidden relative selection:bg-pink-300 transition-colors duration-1000`}>
      <CustomCursor />
      <AnimatedBackground theme={currentTheme} />
      
      {!booted ? (
        <BootScreen onComplete={() => setBooted(true)} />
      ) : (
        <main className="relative z-10 w-full h-[100svh] flex items-center justify-center sm:p-4 md:p-8 lg:p-12 pb-24 md:pb-8">
          <OSWindow 
            tabs={tabs} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </main>
      )}
    </div>
  );
}
