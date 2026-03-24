import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Wifi, Battery, ChevronDown, Sparkles } from 'lucide-react';

export default function OSWindow({ tabs, activeTab, setActiveTab, currentTheme, setCurrentTheme }) {
  const [isCmdMenuOpen, setIsCmdMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [time, setTime] = useState(new Date());
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = [
    'Baby Pink Dream',
    'Lavender Glow',
    'Peach Cloud',
    'Mint Candy',
    'Soft Sunset'
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdMenuOpen(prev => !prev);
        setSearchQuery('');
      } else if (e.key === 'Escape') {
        setIsCmdMenuOpen(false);
        setShowThemeMenu(false);
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setShowThemeMenu(false)}
      className="w-full h-full max-w-[1400px] max-h-[900px] mx-auto flex flex-col bg-white/20 backdrop-blur-3xl rounded-[1.5rem] md:rounded-[2rem] border border-white/60 shadow-[0_40px_80px_rgba(76,29,149,0.2)] overflow-hidden relative z-10"
    >
      {/* MAC OS TOP MENU BAR */}
      <div className="h-7 bg-white/40 backdrop-blur-md border-b border-white/40 flex items-center justify-between px-4 text-xs font-medium text-[#4c1d95] z-50 shrink-0">
        <div className="flex gap-4 items-center h-full">
          <span className="font-bold flex items-center gap-1 cursor-default"><Sparkles size={12} className="text-pink-500" /> DhiteeOS</span>
          <span className="hidden sm:flex cursor-pointer hover:bg-white/50 px-2 rounded h-full items-center transition-colors">File</span>
          <span className="hidden sm:flex cursor-pointer hover:bg-white/50 px-2 rounded h-full items-center transition-colors">Edit</span>
          <span className="hidden sm:flex cursor-pointer hover:bg-white/50 px-2 rounded h-full items-center transition-colors">View</span>
          <span className="hidden sm:flex cursor-pointer hover:bg-white/50 px-2 rounded h-full items-center transition-colors" onClick={(e) => { e.stopPropagation(); setIsCmdMenuOpen(true); }}>Search</span>
        </div>
        
        <div className="flex gap-4 items-center h-full relative">
          {/* Theme Switcher */}
          <div 
            className="flex items-center gap-1 cursor-pointer hover:bg-white/50 px-2 rounded h-full transition-colors"
            onClick={(e) => { e.stopPropagation(); setShowThemeMenu(!showThemeMenu); }}
          >
            {currentTheme} <ChevronDown size={12} />
          </div>
          
          <AnimatePresence>
            {showThemeMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute top-8 right-16 w-48 bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-xl p-2 z-50 flex flex-col"
              >
                {themes.map(t => (
                  <button 
                    key={t} 
                    onClick={() => setCurrentTheme(t)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${currentTheme === t ? 'bg-pink-100 text-pink-600 font-bold' : 'hover:bg-white/60 text-[#4c1d95]'}`}
                  >
                    {t}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <Wifi size={14} />
          <Battery size={16} className="rotate-90 md:rotate-0" />
          <span className="cursor-default w-14 text-right">{time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>

      {/* Main Window Area (Simulates an open App window spanning the desktop) */}
      <div className="flex-1 overflow-hidden relative p-2 md:p-6 lg:p-8 flex flex-col z-10">
        
        {/* App Window Frame Container */}
        <div className="flex-1 bg-white/60 border border-white/60 shadow-2xl rounded-[1.5rem] overflow-hidden flex flex-col relative z-20">
           {/* App Window Title Bar */}
           <div className="h-12 bg-white/40 border-b border-white/50 flex items-center px-4 relative shrink-0">
             <div className="flex items-center gap-2.5 z-10 w-20">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-black/10 shadow-inner hover:bg-red-500 cursor-pointer transition-colors" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-black/10 shadow-inner hover:bg-yellow-500 cursor-pointer transition-colors" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-black/10 shadow-inner hover:bg-green-500 cursor-pointer transition-colors" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center font-bold text-[#4c1d95]/70 text-sm pointer-events-none tracking-wide">
               {tabs.find(t => t.id === activeTab)?.label} — DhiteeOS
             </div>
           </div>

           {/* App Window Content Area */}
           <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-transparent">
             <AnimatePresence mode="wait">
               {tabs.map((tab) => 
                 activeTab === tab.id ? (
                   <motion.div
                     key={tab.id}
                     initial={{ opacity: 0, y: 10, scale: 0.98 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -10, scale: 0.98 }}
                     transition={{ duration: 0.3 }}
                     className="min-h-full"
                   >
                     {tab.content}
                   </motion.div>
                 ) : null
               )}
             </AnimatePresence>
           </div>
        </div>

      </div>

      {/* MAC OS DOCK (FLOATING BOTTOM NAV) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-2xl border border-white/50 p-2 md:p-3 rounded-2xl md:rounded-[1.5rem] flex gap-2 md:gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-50">
         {tabs.map(tab => (
           <div key={tab.id} className="relative group flex flex-col items-center">
             {/* Tooltip */}
             <div className="absolute -top-10 bg-white/90 text-[#4c1d95] text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 shadow-md transition-opacity pointer-events-none whitespace-nowrap border border-pink-100">
               {tab.label}
             </div>
             
             {/* Dock Icon */}
             <motion.button 
                whileHover={{ scale: 1.4, y: -12 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => setActiveTab(tab.id)}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-[0.8rem] md:rounded-[1.2rem] flex items-center justify-center shadow-sm relative ${activeTab === tab.id ? 'bg-gradient-to-br from-white to-pink-50 border-2 border-pink-300 shadow-md text-pink-600' : 'bg-gradient-to-br from-white/80 to-white/40 border border-white/80 text-[#701a75]/70 hover:text-pink-500'}`}
             >
                {React.cloneElement(tab.icon, { size: 24, className: 'md:w-7 md:h-7 w-5 h-5 drop-shadow-sm' })}
             </motion.button>

             {/* Active Indicator Dot */}
             {activeTab === tab.id && (
                <div className="absolute -bottom-2 w-1 h-1 bg-black/40 rounded-full" />
             )}
           </div>
         ))}
      </div>

      {/* Spotlight Command Modal */}
      <AnimatePresence>
        {isCmdMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-black/10 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
            onClick={() => setIsCmdMenuOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/80 backdrop-blur-2xl w-full max-w-lg rounded-2xl shadow-[0_40px_80px_rgba(76,29,149,0.3)] border border-white p-2 flex flex-col"
            >
               <div className="flex items-center gap-3 px-4 py-4 border-b border-white/50">
                 <Command className="text-pink-500" size={20} />
                 <input 
                   type="text" 
                   autoFocus
                   placeholder="Spotlight Search... (e.g., 'Projects')"
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
                     className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/80 rounded-xl transition-colors group text-[#701a75]"
                   >
                     <div className="p-2 bg-pink-100 rounded-lg text-pink-500 group-hover:scale-110 transition-transform">
                        {React.cloneElement(tab.icon, { size: 16 })}
                     </div>
                     <span className="font-bold text-[15px] group-hover:text-[#4c1d95]">{tab.label}</span>
                   </button>
                 )) : (
                   <div className="px-4 py-6 text-center text-[#701a75]/50 text-sm font-medium">
                     No results found.
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
