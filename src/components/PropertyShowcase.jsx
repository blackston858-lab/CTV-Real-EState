import { useEffect, useRef, useState } from "react";
import { IoLocationOutline, IoBedOutline, IoLayersOutline, IoArrowForward } from "react-icons/io5";

const PropertyShowcase = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver — jaise hi showcase section viewport mein aayega, tab animation run hogi
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 } // Jab 15% section screen par aaye tabhi animation smooth trigger ho sake
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#113529] py-24 px-16 relative overflow-hidden"
    >
      
      {/* Background Radial Glow Effect */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main Flex Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* --- LEFT SIDE: TEXT & CONTENT (order-2 on mobile, order-1 on desktop) --- */}
        <div 
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
          className="lg:w-1/2 space-y-8 flex flex-col justify-center order-2 lg:order-1"
        >
          
          <div className="space-y-4">
            <span className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase block">
              Featured Architecture
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              Modern Living <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Perfected.
              </span>
            </h2>
            <p className="text-slate-300/80 text-base md:text-lg leading-relaxed max-w-xl font-light">
              A masterclass in contemporary design. This luxury estate seamlessly integrates organic textures with cutting-edge smart technology for an unparalleled lifestyle.
            </p>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-md w-full">
            {[
              { icon: <IoBedOutline />, label: "4 Bedrooms" },
              { icon: <IoLayersOutline />, label: "3 Floors" },
              { icon: <IoLocationOutline />, label: "Prime Area" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-[#0d2a1f] border border-white/[0.04] p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-emerald-500/30 transition-all duration-300 group/item cursor-pointer"
              >
                <div className="text-emerald-400 text-2xl group-hover/item:scale-110 transition-transform">{stat.icon}</div>
                <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider text-center">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Premium Call To Action Button */}
          <button className="w-fit bg-emerald-500 hover:bg-emerald-600 text-[#113529] font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] group">
            <span>View Full Details</span>
            <IoArrowForward size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- RIGHT SIDE: PREMIUM IMAGE STACK (order-1 on mobile, order-2 on desktop) --- */}
        <div 
          style={{
            transition: "opacity 0.8s ease, transform 0.8s ease",
            transitionDelay: "150ms", // Thoda premium staggered touch dene ke liye delay add kiya
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
          className="lg:w-1/2 relative group w-full flex justify-center lg:justify-end order-1 lg:order-2"
        >
          
          {/* Main Card Wrapper */}
          <div className="relative bg-[#0d2a1f] p-4 rounded-[2.5rem] shadow-2xl border border-white/[0.05] max-w-[450px] w-full transform hover:scale-[1.01] transition-transform duration-500">
            <div className="rounded-[2rem] overflow-hidden h-[320px] md:h-[380px] relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80" 
                alt="Modern Architecture Villa" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Overlapping Floating Price Tag */}
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-[#0d2a1f] px-6 py-4 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.2)] animate-float border border-emerald-400/20">
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-0.5">Investment Starts</p>
              <h4 className="text-xl font-extrabold tracking-tight">$450,000</h4>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PropertyShowcase;