import { useEffect, useRef, useState } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote: "Truly outstanding service! They guided me every step of the way with confidence and deep industry knowledge. Best real estate experience I've ever had.",
    name: "Sara Ahmed",
    role: "Property Buyer, Islamabad",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "Selling my property was completely effortless. The team handled everything professionally and got me the best deal in record time.",
    name: "Usman Malik",
    role: "Property Seller, Lahore",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "Found my dream rental within days. The listings were accurate, verified and the support team was incredibly helpful throughout the process.",
    name: "Aisha Noor",
    role: "Tenant, Karachi",
    stars: 4,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&fit=crop&q=80",
  },
  {
    id: 4,
    quote: "Exceptional platform. The agents are knowledgeable, responsive and truly care about finding you the right property at the right price.",
    name: "Hamza Sheikh",
    role: "Investor, Dubai",
    stars: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop&q=80",
  },
];

// Array ko duplicate kiya taake loop bina tute seamlessly chalta rahe
const doubleTestimonials = [...testimonials, ...testimonials];

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#113529] py-24 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Pure CSS injection taake tailwind.config ko chhedna na pare */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Glow */}
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div 
        style={{
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* ── HEADER ── */}
        <div className="mb-16">
          <span className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            What Our Clients <br />Say About Us
          </h2>
        </div>

        {/* ── SEAMLESS TICKER CONTAINER ── */}
        <div className="relative w-full overflow-hidden mask-gradient">
          {/* Side Faders for Premium Look */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#113529] to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#113529] to-transparent z-10 pointer-events-none hidden sm:block" />

          {/* Scrolling Track */}
          <div className="animate-marquee-infinite gap-6 pr-6">
            {doubleTestimonials.map((t, index) => (
              <div
                key={index}
                className="w-[290px] sm:w-[350px] flex-shrink-0 bg-[#0d2a1f] border border-white/[0.04] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group hover:border-emerald-500/20 transition-colors duration-300 mx-3"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-white/[0.03] text-7xl font-serif pointer-events-none">
                  <RiDoubleQuotesR />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <FaStar
                      key={si}
                      size={13}
                      className={si < t.stars ? "text-amber-400" : "text-white/10"}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 flex-1 font-light italic">
                  "{t.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/[0.05]">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 flex-shrink-0">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm tracking-wide">
                      {t.name}
                    </h4>
                    <p className="text-emerald-400/70 text-[11px] font-medium tracking-wide mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;