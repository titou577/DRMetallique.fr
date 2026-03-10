import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+33603888413";

export function StickyCTA() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky CTA Button (Desktop) */}
      <div
        className={`fixed bottom-8 right-8 z-40 hidden lg:block transition-all duration-500 ${isScrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"}`}
      >
        <a
          href={PHONE_LINK}
          className="flex items-center gap-3 bg-gold-main text-black px-6 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-white transition-all border-2 border-black hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/20 rounded-full animate-pulse"></div>
            <Phone className="w-5 h-5 relative z-10" />
          </div>
          <span className="uppercase tracking-wider text-sm">Urgence 24/7</span>
        </a>
      </div>

      {/* Sticky CTA Button (Mobile) */}
      <div
        className={`fixed bottom-4 left-4 right-4 z-40 lg:hidden transition-all duration-500 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"}`}
      >
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-3 bg-gold-main text-black px-6 py-4 rounded-full font-bold shadow-lg w-full border-2 border-black active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="uppercase tracking-wider text-sm">Appeler maintenant</span>
        </a>
      </div>
    </>
  );
}
