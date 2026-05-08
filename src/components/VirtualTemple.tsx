import { motion } from 'motion/react';
import { BellRing } from 'lucide-react';
import { useState } from 'react';

export function VirtualTemple() {
  const [isPlaying, setIsPlaying] = useState(false);

  const ringBell = () => {
    setIsPlaying(true);
    // In a real app, play an HTML5 audio element here
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-32 relative z-20 px-4 overflow-hidden border-y border-[#D4AF37]/20 bg-[#030303] text-center">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#030303] to-[#030303] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <span className="text-[#FFD700] tracking-[0.5em] text-xs font-sans uppercase mb-4 block opacity-60">Immersive Atmosphere</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">VIRTUAL MANTRA <span className="text-[#D4AF37]">TEMPLE</span></h2>
        </motion.div>

        {/* Bell Interactor */}
        <div className="relative cursor-pointer" onClick={ringBell}>
          {isPlaying && (
            <>
              {/* Sound waves emitting from bell */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#FFD700] rounded-full animate-ping opacity-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#D4AF37]/50 rounded-full animate-[ping_1.5s_infinite] opacity-0 animation-delay-300"></div>
            </>
          )}

          <motion.div 
            animate={isPlaying ? { rotate: [0, -15, 15, -10, 10, 0], transition: { duration: 1, repeat: 2 } } : {}}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-gradient-to-b from-[#111] to-black shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all hover:bg-white/5"
          >
            <BellRing className={`w-12 h-12 text-[#D4AF37] ${isPlaying ? 'drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] text-[#FFD700]' : ''}`} />
          </motion.div>
        </div>
        
        <p className="mt-8 text-gray-500 font-sans tracking-wide max-w-lg mx-auto text-sm">
           {isPlaying ? "Receiving Divine Frequencies..." : "Click the bell to enter the spiritual state before booking your consultation."}
        </p>

      </div>

      {/* Floating Diyas (Using pure CSS/Motion) */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className={`absolute bottom-10 shrink-0 flex flex-col items-center`}
            style={{ left: `${15 + (i * 15)}%` }} // Distribute evenly
          >
            {/* Diya Flame */}
             <div className="w-1.5 h-3 bg-[#FFD700] rounded-full blur-[2px] animate-[pulse_1s_infinite] shadow-[0_0_15px_#FFD700]"></div>
             {/* Diya Base */}
             <div className="w-6 h-2 bg-[#D4AF37]/30 rounded-b-full border-t border-[#D4AF37]/50 mt-1"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
