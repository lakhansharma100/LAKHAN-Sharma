import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 z-10 px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/80 to-dark-900 pointer-events-none z-10"></div>
      
      {/* Core Divine Energy Glow & Yantra */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gold-500/20 rounded-full blur-[100px]"></div>
        
        {/* Animated Sacred Geometry (Yantra placeholder) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-10"
        >
           <svg viewBox="0 0 100 100" className="w-full h-full text-gold-500 fill-transparent stroke-current stroke-[0.2]">
             <polygon points="50,5 95,80 5,80" />
             <polygon points="50,95 95,20 5,20" />
             <circle cx="50" cy="50" r="35" />
             <circle cx="50" cy="50" r="45" />
             <circle cx="50" cy="50" r="25" />
           </svg>
        </motion.div>
      </div>

      {/* Background Mantra Overlay */}
      <motion.div 
        animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-full text-center pointer-events-none font-sanskrit text-6xl text-gold-500/10 whitespace-nowrap overflow-hidden select-none"
      >
        ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धि विनाशय ह्लीं ॐ स्वाहा
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 font-serif text-white text-5xl md:text-7xl leading-[1.1] flex flex-col items-center text-center"
        >
          <span className="opacity-60 text-xs tracking-[0.5em] uppercase text-[#FFD700] mb-6 font-sans">|| श्री मातृ चरण कमलेभ्यो नमः ||</span>
          <span className="mb-2">जहाँ शक्ति स्वयं</span>
          <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">प्रकट होती है</span>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-light text-slate-400 mb-10 leading-relaxed max-w-lg text-center"
        >
          विश्व प्रसिद्ध बगलामुखी साधना, हवन, अनुष्ठान एवं दिव्य समाधान
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#FFD700] transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center">
            <Sparkles className="w-4 h-4" />
            Book Puja
          </button>
          
          <button className="px-8 py-4 border border-[#D4AF37]/50 text-[#D4AF37] font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37]/10 flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
            <MessageCircle className="w-4 h-4" />
            WhatsApp Consultation
          </button>

          <button className="flex items-center gap-2 text-[#D4AF37] font-sans text-xs uppercase tracking-widest font-bold hover:text-[#FFD700] transition-colors py-4 sm:py-0">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
              <Play className="w-3 h-3 ml-1 fill-current" />
            </div>
            Watch Live Darbar
          </button>
        </motion.div>
      </div>

      {/* Floating particles mimicking diya sparks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight : 800,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: -100, 
              opacity: [0, 1, 0],
              x: `+=${Math.random() * 100 - 50}` 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear" 
            }}
            className="absolute shrink-0 w-2 h-2 rounded-full bg-gold-400 blur-[2px] shadow-[0_0_8px_#FDE047]"
          />
        ))}
      </div>
    </section>
  );
}
