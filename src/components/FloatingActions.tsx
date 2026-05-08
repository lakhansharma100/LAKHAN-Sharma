import { MessageCircle, Menu, User, Calendar, Home } from 'lucide-react';
import { useState } from 'react';

export function FloatingActions() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="#"
        className="fixed bottom-28 md:bottom-8 right-6 z-50 bg-[#111] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/20 text-[#D4AF37] p-4 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.2)] transform hover:scale-110 transition-all duration-300 flex items-center justify-center group text-xs uppercase"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#030303] text-gray-400 font-sans tracking-[0.2em] px-3 py-2 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#D4AF37]/30">
          Divine Consult
        </span>
      </a>

      {/* Mobile Bottom Navigation (App-like feel) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-[#D4AF37]/20 z-50 px-6 py-3 flex justify-between items-center pb-safe text-[10px] font-sans uppercase tracking-widest text-[#D4AF37]/60">
        <button className="flex flex-col items-center text-[#FFD700]">
          <Home className="w-5 h-5 mb-1" />
          <span>Home</span>
        </button>
        <button className="flex flex-col items-center hover:text-[#FFD700] transition-colors">
          <Calendar className="w-5 h-5 mb-1" />
          <span>Book</span>
        </button>
        <button className="flex flex-col items-center hover:text-[#FFD700] transition-colors">
          <User className="w-5 h-5 mb-1" />
          <span>Kundali</span>
        </button>
        <button 
          className="flex flex-col items-center hover:text-[#FFD700] transition-colors"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Menu className="w-5 h-5 mb-1" />
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isNavOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-20 px-6 border-[#D4AF37]/20 animate-in fade-in slide-in-from-bottom flex flex-col justify-center">
            <button onClick={() => setIsNavOpen(false)} className="absolute top-6 right-6 text-2xl text-gray-400">&times;</button>
            <nav className="flex flex-col gap-6 text-center font-serif text-2xl text-[#D4AF37]">
               <a href="#" className="hover:text-[#FFD700] transition-colors">Services</a>
               <a href="#" className="hover:text-[#FFD700] transition-colors">Live Darbar</a>
               <a href="#" className="hover:text-[#FFD700] transition-colors">Testimonials</a>
               <a href="#" className="hover:text-[#FFD700] transition-colors">Donate</a>
            </nav>
        </div>
      )}
    </>
  );
}
