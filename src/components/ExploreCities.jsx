import { useEffect, useRef, useState } from "react";

const cities = [
  {
    id: 1,
    name: "Islamabad",
    properties: "320+ Properties",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Lahore",
    properties: "540+ Properties",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Karachi",
    properties: "780+ Properties",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Dubai",
    properties: "210+ Properties",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Istanbul",
    properties: "190+ Properties",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&fit=crop&q=80",
  },
  {
    id: 6,
    name: "London",
    properties: "430+ Properties",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&fit=crop&q=80",
  },
];

const CityCard = ({ city, visible, delay }) => {
  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
        transition: "opacity 0.65s ease, transform 0.65s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(35px)",
      }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group h-44 sm:h-48 lg:h-52"
    >
      {/* Image — object-cover with fixed height */}
      <img
        src={city.img}
        alt={city.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

      {/* City Info */}
      <div className="absolute bottom-4 left-4">
        <p className="text-white text-base font-bold">{city.name}</p>
        <p className="text-white/65 text-xs mt-0.5">{city.properties}</p>
      </div>
    </div>
  );
};

const ExploreCities = () => {
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
    <div ref={ref} className="w-full bg-[#113529] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 mb-10 w-full">
          <div>
            <h2 className="text-white text-4xl font-bold leading-snug mb-3">
              Explore Properties<br />by City
            </h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Find your next home in Pakistan's most vibrant cities
              and growing real estate markets worldwide.
            </p>
          </div>
          <button className="mt-2 border border-white/20 text-white/70 text-sm px-5 py-2 rounded-full hover:bg-white/10 transition-colors flex-shrink-0">
            View All →
          </button>
        </div>

        {/* ── Grid — responsive ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 w-full">
          {cities.map((city, i) => (
            <CityCard
              key={city.id}
              city={city}
              visible={visible}
              delay={i * 100}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExploreCities;