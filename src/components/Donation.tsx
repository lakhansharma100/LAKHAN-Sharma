import { motion } from 'motion/react';
import { QrCode, HandHeart } from 'lucide-react';
import { useState } from 'react';

export function Donation() {
  const [showBlessing, setShowBlessing] = useState(false);

  const handlePaymentClick = () => {
    setShowBlessing(true);
    setTimeout(() => setShowBlessing(false), 4000);
  };

  return (
    <section className="py-24 relative z-20 px-4 bg-[#030303]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <HandHeart className="w-10 h-10 text-[#D4AF37] mx-auto mb-6 opacity-80" />
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Offer <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Dakshina</span>
          </h2>
          <p className="text-sm font-light text-slate-400 max-w-lg mx-auto">
            Your offerings support the continuous Mahayagya, Anna Daan, and temple maintenance. All contributions attract divine abundance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          {/* Golden Frame around QR */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/50 via-transparent to-[#D4AF37]/50">
            <div className="bg-[#111] p-8 rounded-[15px] flex flex-col items-center">
              
              <div className="w-48 h-48 bg-white/10 rounded-lg flex items-center justify-center relative group cursor-pointer overflow-hidden border border-[#D4AF37]/30" onClick={handlePaymentClick}>
                {/* Simulated QR Code using Icon for now */}
                <QrCode className="w-24 h-24 text-[#D4AF37]/80 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Scanning line animation */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#FFD700] shadow-[0_0_15px_#FFD700] animate-[scan_2s_ease-in-out_infinite]"></div>
              </div>

              <div className="mt-6 text-[#FFD700] text-[10px] uppercase font-bold tracking-[0.3em]">Scan to Donate</div>
              <div className="text-gray-500 text-xs mt-2 tracking-widest font-sans">UPI: BAGULAMUKHI@UPI</div>
            </div>
          </div>

          {/* Blessing Overlay */}
          {showBlessing && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-10 -right-10 md:-right-20 bg-black/80 backdrop-blur-xl border border-[#D4AF37] text-[#FFD700] px-6 py-3 rounded shadow-[0_0_30px_rgba(212,175,55,0.3)] z-50 flex items-center gap-3"
            >
               <span className="text-xl animate-pulse">✨</span>
               <span className="font-serif text-sm uppercase tracking-widest">Maa ka Ashirwad Received</span>
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
