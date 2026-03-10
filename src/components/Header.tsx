import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

const PHONE_NUMBER = "06 03 88 84 13";
const PHONE_LINK = "tel:+33603888413";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-black/95  [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" 
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent"
        }`}
      />
      
      <div 
        className={`relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-out pointer-events-auto ${
          isScrolled ? "pt-3 pb-8" : "pt-6 pb-12"
        }`}
      >
          <div className="flex items-center cursor-pointer relative z-50 transition-all duration-500 ease-out">
            <div 
              className={`transition-all duration-500 ease-out ${isScrolled ? "h-12 md:h-14" : "h-20 md:h-28 lg:h-32"}`}
            >
              <img 
                src="/image/logo.png" 
                alt="DRM Logo" 
                className="h-full w-auto object-contain shadow-2xl"
              />
            </div>
          </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-8 transition-all duration-500 ease-out ${isScrolled ? "opacity-90" : "opacity-100"}`}>
          <a href="#services" className="text-[11px] font-bold text-zinc-300 hover:text-gold-main transition-colors uppercase tracking-[0.2em]">Services</a>
          <a href="#expertise" className="text-[11px] font-bold text-zinc-300 hover:text-gold-main transition-colors uppercase tracking-[0.2em]">Expertise</a>
          <a href="#realisations" className="text-[11px] font-bold text-zinc-300 hover:text-gold-main transition-colors uppercase tracking-[0.2em]">Réalisations</a>
          <a href="#contact" className="text-[11px] font-bold text-zinc-300 hover:text-gold-main transition-colors uppercase tracking-[0.2em]">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={PHONE_LINK}
            className={`group flex items-center gap-3 bg-gold-main text-black font-bold hover:bg-white transition-all duration-500 shadow-lg hover:shadow-xl ${isScrolled ? "px-5 py-2.5 rounded-full text-xs" : "px-6 py-3 rounded-full text-sm"}`}
          >
            <div className="bg-black/10 p-1.5 rounded-full group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-black/95  border-b border-white/10 py-8 px-6 flex flex-col gap-6 shadow-2xl pointer-events-auto transition-all duration-300 animate-fade-in-up"
        >
          <nav className="flex flex-col gap-6">
            {['Services', 'Expertise', 'Réalisations', 'Contact'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('é', 'e').replace('à', 'a')}`} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-zinc-300 hover:text-gold-main font-bold text-sm uppercase tracking-[0.2em] border-b border-white/5 pb-4 flex items-center justify-between group"
              >
                {item}
                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-gold-main transition-colors" />
              </a>
            ))}
          </nav>
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-3 bg-gold-main text-black px-6 py-4 rounded-xl font-bold text-base mt-4 shadow-lg active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Appeler {PHONE_NUMBER}</span>
          </a>
        </div>
      )}
    </header>
  );
}
