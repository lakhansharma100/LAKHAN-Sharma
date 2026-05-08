import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function InteractiveKundali() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-24 relative z-20 px-4 bg-[#030303] border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left side text */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 opacity-60 text-xs tracking-[0.5em] uppercase text-[#FFD700]">
              Divine Insight
            </div>
            <h2 className="text-5xl font-serif leading-[1.1] text-white mb-6">
              Request Spiritual <br/>
              <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Guidance</span>
            </h2>
            <p className="text-lg font-light text-slate-400 mb-8 leading-relaxed max-w-md">
              Share your details securely. Pandit Ji will analyze your astrological chart and spiritual alignment to provide a customized solution for your life's obstacles.
            </p>
            
            <div className="hidden lg:flex items-center gap-4 text-[#D4AF37] font-sans text-xs uppercase tracking-widest font-bold">
               <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
                 <Sparkles className="w-4 h-4" />
               </div>
               <span>100% Confidential & Secure</span>
            </div>
          </motion.div>
        </div>

        {/* Right side form */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Glowing orb behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] pointer-events-none"></div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">Request Received</h3>
                <p className="text-gray-400 text-sm">Maa's blessings are with you. We will contact you on WhatsApp soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
                <div className="relative">
                  <input type="text" id="name" required className="w-full bg-black/40 border border-[#D4AF37]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] text-white placeholder:text-gray-600 transition-colors" placeholder="Your Full Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="date" id="dob" required className="w-full bg-black/40 border border-[#D4AF37]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] text-white placeholder:text-gray-600 transition-colors" placeholder="Date of Birth" style={{ colorScheme: "dark" }} />
                  </div>
                  
                  <div className="relative">
                    <input type="tel" id="whatsapp" required className="w-full bg-black/40 border border-[#D4AF37]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] text-white placeholder:text-gray-600 transition-colors" placeholder="WhatsApp Number" />
                  </div>
                </div>

                <div className="relative">
                  <textarea id="problem" required rows={3} className="w-full bg-black/40 border border-[#D4AF37]/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] text-white placeholder:text-gray-600 transition-colors resize-none" placeholder="Describe your concern..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#8B732A] text-black font-black uppercase tracking-widest text-xs hover:from-[#FFD700] hover:to-[#FFD700] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                     <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Invoke Divination
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
