import React from 'react';

export default function AnimatedBackground({ theme }) {
  // Theme gradients mapped
  const themeGradients = {
    'Baby Pink Dream': 'from-pink-100 via-rose-100 to-pink-200',
    'Lavender Glow': 'from-purple-100 via-fuchsia-100 to-purple-200',
    'Peach Cloud': 'from-orange-100 via-red-100 to-amber-100',
    'Mint Candy': 'from-emerald-100 via-teal-100 to-cyan-100',
    'Soft Sunset': 'from-rose-200 via-orange-100 to-yellow-100'
  };

  const currentGradient = themeGradients[theme] || themeGradients['Baby Pink Dream'];

  return (
    <div className={`fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-br ${currentGradient} transition-colors duration-1000 ease-in-out`}>
      
      {/* Decorative Blob 1 */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white opacity-40 rounded-full blur-[100px] mix-blend-overlay animate-blob"
      />
      
      {/* Decorative Blob 2 */}
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pink-300 opacity-20 rounded-full blur-[120px] mix-blend-overlay animate-blob animation-delay-2000"
      />

      {/* Grid Pattern overlay for tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(76,29,149,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(76,29,149,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Sparkles Array */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse blur-[1px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute text-white/50 text-xs font-pixel animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}
