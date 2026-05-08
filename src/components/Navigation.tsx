export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center border-b border-[#D4AF37]/20 backdrop-blur-md bg-[#030303]/80">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#D4AF37] flex items-center justify-center rounded-full shrink-0">
          <span className="text-[#FFD700] font-serif text-xl">ॐ</span>
        </div>
        <span className="text-sm md:text-xl font-serif tracking-[0.2em] text-[#D4AF37] whitespace-nowrap">MAA BAGULAMUKHI</span>
      </div>
      <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
        <a href="#" className="hover:text-[#FFD700] transition-colors">The Divine Power</a>
        <a href="#" className="hover:text-[#FFD700] transition-colors">Anushthan</a>
        <a href="#" className="hover:text-[#FFD700] transition-colors">Live Darbar</a>
        <a href="#" className="text-[#FFD700] border-b border-[#FFD700] pb-1">Consultation</a>
      </div>
    </nav>
  );
}
