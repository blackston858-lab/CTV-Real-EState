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

const doubleTestimonials = [...testimonials, ...testimonials];

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      className="w-full bg-[#113529] py-16 md:py-24 px-4 sm:px-6 md:px-16 relative overflow-hidden"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
        /* Adding mask-gradient to ensure smooth fade on edges */
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="absolute -bottom-20 left-1/3 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/5 rounded-full filter blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div 
        style={{
          transition: "opacity 1s ease, transform 1s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* ── HEADER (Improved Responsiveness) ── */}
        <div className="mb-10 md:mb-16 text-left">
          <span className="text-emerald-400 font-bold tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase block mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight">
            What Our Clients <br className="hidden sm:block" />Say About Us
          </h2>
        </div>

        {/* ── TICKER CONTAINER ── */}
        <div className="relative w-full overflow-hidden mask-gradient py-4">
          <div className="animate-marquee-infinite gap-4 md:gap-6 pr-4 md:pr-6">
            {doubleTestimonials.map((t, index) => (
              <div
                key={index}
                className="w-[260px] xs:w-[290px] sm:w-[350px] flex-shrink-0 bg-[#0d2a1f] border border-white/[0.04] rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-xl relative group hover:border-emerald-500/20 transition-all duration-300 mx-2 sm:mx-3"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-6 sm:right-8 text-white/[0.03] text-6xl sm:text-7xl font-serif pointer-events-none">
                  <RiDoubleQuotesR />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 sm:mb-5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <FaStar
                      key={si}
                      size={12}
                      className={si < t.stars ? "text-amber-400" : "text-white/10"}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 flex-1 font-light italic">
                  "{t.quote}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-white/[0.05]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 flex-shrink-0">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wide truncate">
                      {t.name}
                    </h4>
                    <p className="text-emerald-400/70 text-[9px] sm:text-[11px] font-medium tracking-wide mt-0.5 truncate">
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