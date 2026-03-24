import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Mic, Globe2, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="p-8 md:p-12 min-h-full">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-6xl mx-auto space-y-12">
        
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mt-1" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#4c1d95]">Featured Case Studies</h2>
        </div>

        {/* PROJECT 1: PETPOOJABOT */}
        <motion.div variants={itemVariants} className="bg-white/50 border border-white/80 rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(76,29,149,0.06)] backdrop-blur-md flex flex-col lg:flex-row gap-10">
          
          {/* Project Info */}
          <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100/50 rounded-lg border border-purple-200/50 text-xs font-bold mb-4 text-purple-600 w-fit uppercase tracking-wider">
               <Sparkles size={14} className="text-purple-500" /> Premium AI Product
            </div>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-[#4c1d95] mb-2">PetpoojaBot</h3>
            <p className="text-[#701a75]/80 font-pixel text-xs md:text-sm mb-6 uppercase tracking-wider">React • FastAPI • OpenAI • SQLite</p>

            <p className="text-[#701a75] text-lg leading-relaxed mb-6 font-medium">
              A multilingual AI food-ordering engine that lets users order via voice or text. Engineered with fuzzy matching, transliteration, and robust local fallbacks to handle imperfect, mixed-language inputs.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Voice-based & text-based ordering flow",
                "Mixed-language understanding (English, Hindi, Gujarati, Marathi, Tamil, Malayalam, Arabic)",
                "OpenAI-powered intent parsing for custom modifiers ('extra onion', 'no butter')",
                "Database logging & OTP-based user login with admin bypass"
              ].map(feature => (
                <li key={feature} className="flex items-start gap-3 text-[#374151]">
                   <CheckCircle2 size={18} className="text-purple-400 shrink-0 mt-0.5" />
                   <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/70 border border-purple-200/50 text-[#4c1d95] font-medium rounded-xl shadow-sm hover:bg-white hover:-translate-y-1 transition-all">
                 <Github size={18} /> Source Code
              </a>
            </div>
          </div>

          {/* AI Chat Mockup */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="w-full h-full min-h-[300px] bg-white/80 border border-white/60 rounded-[2rem] shadow-lg overflow-hidden group flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 flex items-center justify-between border-b border-purple-200/50">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-400 shadow-sm border border-black/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm border border-black/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm border border-black/10" />
                </div>
                <div className="text-xs font-bold text-purple-700 bg-white/50 border border-purple-200 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
                   <Globe2 size={14}/> Multilingual Audio
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 bg-[#faf5ff] relative p-6 flex flex-col justify-center gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.1)_2px,transparent_2px)]" style={{ backgroundSize: '20px 20px' }} />
                
                {/* Chat Bubbles */}
                <div className="relative z-10 self-end bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-[1.5rem] rounded-tr-md shadow-md max-w-[85%] origin-bottom-right group-hover:-translate-y-1 transition-transform duration-500">
                  <p className="text-[15px] font-medium leading-relaxed">"मुझे दो paneer tikka चाहिए, extra spicy, aur ek thums up."</p>
                </div>
                
                <div className="relative z-10 self-start bg-white border border-purple-100/80 p-4 rounded-[1.5rem] rounded-tl-md shadow-md max-w-[90%] origin-bottom-left group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                  <div className="flex items-center gap-2 mb-2 text-purple-600">
                     <div className="bg-purple-100 p-1 rounded-md"><Sparkles size={14} className="text-purple-500" /></div>
                     <span className="text-xs font-bold uppercase tracking-wide">PetpoojaBot</span>
                  </div>
                  <p className="text-[15px] text-[#4c1d95] leading-relaxed font-medium">Added <span className="text-pink-600 font-bold">2 Paneer Tikka</span> (Extra Spicy) and <span className="text-blue-600 font-bold">1 Thums Up</span> to your cart. Will that be all?</p>
                </div>
                
                <div className="relative z-10 self-end bg-purple-500 text-white p-3 rounded-xl rounded-br-sm shadow-sm max-w-[80%] origin-bottom-right group-hover:-translate-y-1 transition-transform duration-500 delay-150 mt-2 flex items-center gap-2">
                     <Mic size={16} className="animate-pulse" /> <span className="text-xs font-pixel uppercase tracking-widest">Listening...</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>


        {/* PROJECT 2: GRADE CALCULATOR */}
        <motion.div variants={itemVariants} className="bg-white/50 border border-white/80 rounded-[2.5rem] p-6 lg:p-10 shadow-[0_20px_50px_rgba(76,29,149,0.06)] backdrop-blur-md flex flex-col lg:flex-row gap-10">
          
          {/* Mac Browser Mockup */}
          <div className="lg:w-1/2">
            <div className="w-full h-full bg-white/80 border border-white/60 rounded-[2rem] shadow-lg overflow-hidden group">
              {/* Browser Header */}
              <div className="bg-gray-100/50 p-4 flex gap-2 border-b border-gray-200/50">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-400 border border-black/10 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-black/10 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-black/10 shadow-sm" />
              </div>
              {/* Content */}
              <div className="h-full min-h-[250px] bg-gradient-to-br from-[#fdf2f8] to-[#e0f2fe] relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.1)_2px,transparent_2px)]" style={{ backgroundSize: '24px 24px' }} />
                
                {/* Simulated App UI inside browser */}
                <div className="w-full max-w-sm bg-white/90 rounded-[1.5rem] shadow-lg border border-white/80 border-t-[6px] border-t-pink-400 p-8 relative z-10 group-hover:scale-[1.03] transition-transform duration-500 flex flex-col items-center justify-center text-center backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500 rounded-2xl flex items-center justify-center text-4xl font-heading font-extrabold mb-6 shadow-sm border border-pink-200/50">
                    A+
                  </div>
                  <div className="w-3/4 h-3 bg-gray-200/80 rounded-full mb-3" />
                  <div className="w-1/2 h-3 bg-gray-100 rounded-full mb-8" />
                  
                  <div className="w-full space-y-3">
                    <div className="w-full h-10 bg-blue-50/80 border border-blue-100 rounded-lg flex items-center px-4"><div className="w-1/3 h-2 bg-blue-300 rounded-full" /></div>
                    <div className="w-full h-10 bg-purple-50/80 border border-purple-100 rounded-lg flex items-center px-4"><div className="w-1/4 h-2 bg-purple-300 rounded-full" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold text-[#4c1d95] mb-2">Grade Calculator Application</h3>
            <p className="text-[#701a75]/80 font-pixel text-xs md:text-sm mb-6 uppercase tracking-wider">React • tailwind css • firebase</p>

            <p className="text-[#701a75] text-lg leading-relaxed mb-6 font-medium">
              A robust frontend utility built to solve a specific, high-friction problem for university students. Engineered with dynamic input generation and responsive logic.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Dynamically calculated CGPA matrix",
                "Built-in error catching and input validation",
                "Responsive mobile-first interface",
                "Automated grade computation logic"
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-[#374151]">
                  <CheckCircle2 size={18} className="text-pink-400 shrink-0" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="https://universitygradecalculator.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#4c1d95] text-white rounded-xl shadow-[0_10px_20px_rgba(76,29,149,0.2)] hover:bg-[#3b1575] hover:-translate-y-1 transition-all font-medium border border-transparent">
                 <ExternalLink size={18} /> Live App
              </a>
              <a href="https://github.com/dtnotdt" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/70 border border-pink-200/50 text-[#4c1d95] font-medium rounded-xl shadow-sm hover:bg-white hover:text-pink-600 hover:-translate-y-1 transition-all">
                 <Github size={18} /> Source Code
              </a>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </div>
  );
}
