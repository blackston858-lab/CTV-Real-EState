import { useEffect, useRef, useState } from "react";

// ── Service data ──
const services = [
  {
    id: 1,
    title: "Property Acquisition & Brokerage",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Urban Planning & Land Development",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Facility & Asset Management",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Interior Design & Space Optimization",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Sustainability & Green Building Solutions",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&fit=crop&q=80",
  },
];

// ── Single Card with fade-up animation ──
const ServiceCard = ({ service, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
    >
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <div className="p-4 flex items-start justify-between gap-2">
        <p className="text-white text-sm font-semibold leading-snug">{service.title}</p>
        {/* Arrow icon */}
        <div className="bg-white/10 rounded-full p-1.5 flex-shrink-0 mt-0.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// ── Main Section ──
const ServicesSection = () => {
  return (
    <div className="bg-[#113529] py-20 px-4 sm:px-8">

      {/* Header */}
      <div className="text-center mb-12 max-w-xl mx-auto">
        {/* Small badge */}
        <div className="inline-block border border-white/20 text-white/60 text-xs px-4 py-1 rounded-full mb-5 tracking-widest uppercase">
          Services
        </div>

        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
          Take a brief look at 
          some of the services  
          we offer
        </h2>
      </div>

      {/* Cards Grid Container */}
      <div className="max-w-4xl mx-auto">

        {/* Row 1 — Mobile pe 1 column, Desktop pe exact 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 120} />
          ))}
        </div>

        {/* Row 2 — Mobile pe 1 column, Desktop pe 2 columns centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:max-w-[66%] mx-auto">
          {services.slice(3, 5).map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i + 3) * 120} />
          ))}
        </div>

      </div>

      {/* Bottom text */}
      <p className="text-center text-white/40 text-xs mt-12">
        Discover all our services and how we can help you —{" "}
        <span className="underline cursor-pointer hover:text-white/70 transition-colors">
          learn more
        </span>
      </p>

    </div>
  );
};

export default ServicesSection;