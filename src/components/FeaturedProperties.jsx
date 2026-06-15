import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IoArrowForwardOutline } from "react-icons/io5";

// ── Property Card Component (With Fade-Up Animation) ──
const PropertyCard = ({ property, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
      className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer bg-[#142620]"
    >
      {/* Background Image with hover zoom effect */}
      <img
        src={property.image}
        alt={property.title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />

      {/* Light gradient cover overlay for clean readability on top text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1">
            {property.category}
          </span>
          <h3 className="text-xl font-medium text-white leading-snug drop-shadow-sm">
            {property.title}
          </h3>
        </div>

        {/* Optional Hover Action Indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-white/20 backdrop-blur-md px-4 py-2 rounded-full w-fit self-end">
          View Details
        </div>
      </div>
    </div>
  );
};

// ── Main Section ──
const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Apartment in Bahria Town",
      category: "Apartment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Elegant Family Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Office Space in Business Hub",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Villa with Ocean View",
      category: "Luxury Villa",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="w-full bg-[#113529] text-white py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Header Section (Fixed Mobile View) ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Discover Featured Properties
          </h2>
          
          {/* See All Properties Link */}
          <Link 
            to="/properties" 
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group pb-1.5 border-b border-slate-500 hover:border-white shrink-0 self-start sm:self-auto"
          >
            <span>See All Properties</span>
            <IoArrowForwardOutline className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Properties Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              delay={index * 120}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;