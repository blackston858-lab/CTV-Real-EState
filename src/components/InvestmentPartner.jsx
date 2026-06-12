import { useEffect, useRef, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const InvestmentPartner = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver — jaise hi section screen par aayega, sab animate ho jayega
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 } // Jab 15% section dikhe tabhi animation smooth start ho
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#0d2a1f]/95 text-white py-24 px-6 md:px-16 relative overflow-hidden backdrop-blur-md"
    >
      
      {/* Decorative background glow for modern premium look */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* ── LEFT COLUMN: MODERN CARD STACK (Fade-Up) ── */}
        <div 
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
          className="lg:col-span-5 relative flex flex-col pt-8 pb-16 lg:py-0"
        >
          
          {/* Mini Top Tag over the layout */}
          <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4 block w-fit border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-500/5">
            Overview
          </span>

          {/* Main Architecture Image Card */}
          <div className="relative w-full max-w-[440px] h-[300px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl group border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
              alt="Smart Luxury Home"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Overlapping Glassmorphic Text Card */}
          <div className="absolute -bottom-6 left-4 md:-left-6 bg-[#113529] border border-white/[0.08] text-white p-6 rounded-2xl max-w-[280px] sm:max-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-sm md:text-base font-medium text-slate-100 leading-relaxed mb-5">
              From Building Smart Luxury To Beautiful Suburban Homes.
            </h4>
            
            {/* Clean Action Button */}
            <button className="bg-emerald-500 hover:bg-emerald-600 text-[#0d2a1f] text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/20 group">
              <span>Explore</span>
              <IoArrowForward size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* ── RIGHT COLUMN: CONTENT & VISION/MISSION (Fade-Up with subtle delay) ── */}
        <div 
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            transitionDelay: "150ms", // Left column ke thoda sa baad smooth chalega
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          
          {/* Typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.25] tracking-tight mb-12 max-w-2xl">
            Your Trusted Partner in Property Investment & Management.
          </h2>

          {/* Sub-grid for Vision and Mission info blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t border-white/[0.06] pt-10">
            
            {/* Vision block */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-emerald-400 tracking-wide">
                Our Vision
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                To design future-proof investment frameworks through technology, absolute compliance, and market integration that ensures consistent generational wealth.
              </p>
            </div>

            {/* Mission block */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-emerald-400 tracking-wide">
                Our Mission
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Connecting modern families to premium certified ecosystems by providing straightforward guidance, architectural mastery, and transparent documentation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InvestmentPartner;