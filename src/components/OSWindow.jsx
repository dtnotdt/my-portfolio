import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command } from 'lucide-react';

export default function OSWindow({ tabs, activeTab, setActiveTab }) {
  const [isCmdMenuOpen, setIsCmdMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Command Palette hook
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdMenuOpen(prev => !prev);
        setSearchQuery('');
      } else if (e.key === 'Escape' && isCmdMenuOpen) {
        setIsCmdMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCmdMenuOpen]);

  const filteredTabs = tabs.filter(tab => tab.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSelectTab = (id) => {
    setActiveTab(id);
    setIsCmdMenuOpen(false);
    setSearchQuery('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="w-full max-w-6xl mx-auto h-full flex flex-col bg-white/70 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] border border-white/60 shadow-[0_30px_60px_rgba(76,29,149,0.15)] overflow-hidden relative z-10"
    >
      {/* Top OS Window Toolbar */}
      <div className="h-14 bg-white/50 border-b border-white/60 flex items-center justify-between px-4 md:px-6 relative shrink-0">
        {/* Mac OS Traffic Lights */}
        <div className="flex items-center gap-2.5 z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black/10 shadow-inner hover:bg-red-500 cursor-pointer transition-colors" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black/10 shadow-inner hover:bg-yellow-500 cursor-pointer transition-colors" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black/10 shadow-inner hover:bg-green-500 cursor-pointer transition-colors" />
        </div>
        
        {/* Window Title */}
        <div className="absolute inset-0 flex items-center justify-center font-pixel text-[#4c1d95]/50 text-sm tracking-widest pointer-events-none mt-1">
          DhiteeOS v1.0
        </div>

        {/* Cmd+K trigger manually */}
        <div 
          onClick={() => setIsCmdMenuOpen(true)}
          className="z-10 flex items-center gap-2 text-xs font-mono bg-white/40 border border-white/60 px-3 py-1.5 rounded-lg text-[#701a75]/60 hover:bg-white/80 hover:text-[#4c1d95] cursor-pointer transition-all shadow-sm"
        >
          <Search size={14} />
          <span className="hidden sm:inline">Search</span>
          <span className="bg-white/50 px-1.5 rounded font-bold border border-black/5 opacity-70">⌘K</span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex overflow-x-auto hide-scrollbar bg-white/30 border-b border-white/50 px-3 pt-3 shrink-0 relative z-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 md:px-6 py-2.5 text-sm md:text-base font-medium transition-colors whitespace-nowrap rounded-t-xl ${
              activeTab === tab.id ? 'text-[#4c1d95]' : 'text-[#701a75]/60 hover:text-[#4c1d95] hover:bg-white/40'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-white/70 border-t border-l border-r border-white/60 rounded-t-xl z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon} <span className="mt-0.5">{tab.label}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-white/20 custom-scrollbar z-10">
        <AnimatePresence mode="wait">
          {tabs.map((tab) => 
            activeTab === tab.id ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="min-h-full"
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Spotlight Command Modal */}
      <AnimatePresence>
        {isCmdMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-start justify-center pt-[10vh]"
            onClick={() => setIsCmdMenuOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/70 backdrop-blur-xl w-full max-w-lg rounded-2xl shadow-[0_30px_60px_rgba(76,29,149,0.3)] border border-white p-2 overflow-hidden flex flex-col"
            >
               <div className="flex items-center gap-3 px-4 py-3 border-b border-white/50">
                 <Command className="text-pink-400" size={20} />
                 <input 
                   type="text" 
                   autoFocus
                   placeholder="Where to? (e.g., 'Projects', 'Lab')"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="flex-1 bg-transparent border-none outline-none text-[#4c1d95] placeholder-[#4c1d95]/40 text-lg font-medium"
                 />
                 <div className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded text-[#701a75]/50 border border-white/80">ESC</div>
               </div>
               
               <div className="py-2 max-h-64 overflow-y-auto custom-scrollbar">
                 {filteredTabs.length > 0 ? filteredTabs.map(tab => (
                   <button 
                     key={tab.id}
                     onClick={() => handleSelectTab(tab.id)}
                     className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/60 rounded-xl transition-colors group text-[#701a75]"
                   >
                     <div className="text-pink-400 group-hover:scale-110 transition-transform">{tab.icon}</div>
                     <span className="font-medium group-hover:text-[#4c1d95]">{tab.label}</span>
                   </button>
                 )) : (
                   <div className="px-4 py-6 text-center text-[#701a75]/50 text-sm font-medium">
                     No locations found.
                   </div>
                 )}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
