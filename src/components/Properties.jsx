import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack as IoBack, IoIosArrowForward as IoForward } from "react-icons/io";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { BiArea } from "react-icons/bi";

// ── Property Data ──
const PropertiesData = [
  {
    id: 1,
    badge: "For Sale",
    badgeColor: "bg-rose-500",
    price: "$1,200,000",
    title: "Luxury Modern Villa",
    address: "123 Maple Ave, Beverly Hills, CA",
    beds: 4,
    baths: 3,
    cars: 2,
    area: "320 m²",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    badge: "For Rent",
    badgeColor: "bg-emerald-500",
    price: "$4,500/mo",
    title: "Contemporary Family Home",
    address: "456 Oak Street, Malibu, CA",
    beds: 3,
    baths: 2,
    cars: 1,
    area: "240 m²",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    badge: "For Sale",
    badgeColor: "bg-rose-500",
    price: "$890,000",
    title: "Elegant Suburban House",
    address: "789 Pine Road, Pasadena, CA",
    beds: 5,
    baths: 4,
    cars: 2,
    area: "410 m²",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    badge: "For Sale",
    badgeColor: "bg-rose-500",
    price: "$2,100,000",
    title: "Grand Estate Home",
    address: "321 Willow Lane, Santa Monica, CA",
    beds: 6,
    baths: 5,
    cars: 3,
    area: "560 m²",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    badge: "For Rent",
    badgeColor: "bg-emerald-500",
    price: "$6,200/mo",
    title: "Modern Minimalist Villa",
    address: "654 Cedar Blvd, Brentwood, CA",
    beds: 4,
    baths: 3,
    cars: 2,
    area: "380 m²",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80",
  },
];

// ── Single Property Card ──
const PropertyCard = ({ data, visible, delay }) => {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-[#0d2a1f] rounded-2xl overflow-hidden border border-white/[0.04] shadow-xl hover:scale-[1.02] transition-all duration-700 ease-out w-full cursor-pointer group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image + Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-4 left-4 ${data.badgeColor} text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-md`}>
          {data.badge}
        </span>
      </div>

      {/* Card Info */}
      <div className="p-5">
        <p className="text-emerald-400 text-xl font-bold mb-15">{data.price}</p>
        <h4 className="text-white text-base font-bold truncate mb-1 group-hover:text-emerald-400 transition-colors">
          {data.title}
        </h4>
        <p className="text-white/50 text-xs truncate mb-4">{data.address}</p>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-4">
          <div className="grid grid-cols-4 gap-1 text-white/70 text-[11px] font-medium">
            <span className="flex items-center gap-1"><IoBedOutline className="text-emerald-400" size={14} /> {data.beds} B</span>
            <span className="flex items-center gap-1"><TbBath className="text-emerald-400" size={14} /> {data.baths} B</span>
            <span className="flex items-center gap-1"><IoCarOutline className="text-emerald-400" size={14} /> {data.cars} C</span>
            <span className="flex items-center gap-1 truncate"><BiArea className="text-emerald-400" size={14} /> {data.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Section ──
const Properties = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const ref = useRef(null);

  // Dynamic responsive items layout calculator
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, PropertiesData.length - visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div ref={ref} className="bg-[#113529] py-24 px-6 md:px-16 overflow-hidden select-none">
      
      {/* ── Header Row ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 max-w-7xl mx-auto gap-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3 block">
            Our Properties
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight">
            Explore our most<br />Sought-After Homes
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#0d2a1f] border border-white/[0.03] rounded-full p-1 w-fit self-start md:self-auto">
          {["Buy", "Rent"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-emerald-500 text-[#113529] shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sliding Viewport Container ── */}
      <div className="max-w-7xl mx-auto overflow-hidden py-4">
        <div
          className="flex transition-transform duration-500 ease-out -mx-3"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {PropertiesData.map((property, i) => (
            <div 
              key={property.id} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3"
            >
              <PropertyCard
                data={property}
                visible={visible}
                delay={i * 100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Pagination Controls ── */}
      <div className="flex items-center justify-center gap-6 mt-8">
        
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 bg-[#0d2a1f] hover:bg-emerald-500 hover:text-[#113529] hover:border-emerald-500 disabled:opacity-20 disabled:pointer-events-none transition-all duration-300 shadow-md"
        >
          <IoBack size={18} />
        </button>

        {/* Dynamic Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-emerald-500 w-5" : "bg-white/20 w-1.5"
              }`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/70 bg-[#0d2a1f] hover:bg-emerald-500 hover:text-[#113529] hover:border-emerald-500 disabled:opacity-20 disabled:pointer-events-none transition-all duration-300 shadow-md"
        >
          <IoForward size={18} />
        </button>

      </div>

    </div>
  );
};

export default Properties;