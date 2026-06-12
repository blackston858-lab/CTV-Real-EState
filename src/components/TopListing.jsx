import { useState } from "react";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { TbBath, TbRuler } from "react-icons/tb";
import { RiArrowRightUpLine } from "react-icons/ri";

// ── Property Images ──
const initialImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&fit=crop&q=80",
];

// ── Property Details ──
const details = [
  { icon: <IoBedOutline size={18} />, label: "Beds",  value: "4" },
  { icon: <TbBath size={18} />,       label: "Baths", value: "3" },
  { icon: <IoCarOutline size={18} />, label: "Cars",  value: "2" },
  { icon: <TbRuler size={18} />,      label: "Area",  value: "320 m²" },
];

// Placeholder items for pagination dots to represent properties row
const properties = [1, 2, 3, 4, 5];

const TopListing = () => {
  const [activeDot, setActiveDot] = useState(0);
  // Main selected image preview handler state
  const [mainImage, setMainImage] = useState(initialImages[0]);

  return (
    <section className="w-full bg-[#113529] py-24 px-6 md:px-16 relative overflow-hidden border-b border-white/[0.05]">
      {/* Background Ambient Luxury Light Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Label ── */}
        <p className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase mb-10 block">
          Featured Showcase
        </p>

        {/* ── Main Layout Split Row ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* ── LEFT — Text Content ── */}
          <div className="w-full lg:flex-1 max-w-xl order-2 lg:order-1">

            {/* Status Badges */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold tracking-wide px-3 py-1 rounded-md uppercase">
                For Sale
              </span>
              <span className="bg-white/5 border border-white/10 text-white/70 text-[11px] font-medium px-3 py-1 rounded-md">
                Verified Deal
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
              Elegant Pool 4 Bedroom Building
            </h2>

            {/* Address */}
            <p className="text-white/50 text-sm mb-8 font-light tracking-wide">
              14 Sunset Boulevard, Bahria Town, Islamabad
            </p>

            {/* Premium Spec Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {details.map((d, i) => (
                <div key={i} className="flex flex-col bg-[#0d2a1f] border border-white/[0.04] p-3.5 rounded-2xl">
                  <span className="text-emerald-400 mb-2 block">{d.icon}</span>
                  <span className="text-white font-semibold text-base block">{d.value}</span>
                  <span className="text-white/40 text-xs font-light">{d.label}</span>
                </div>
              ))}
            </div>

            {/* Clean Line Divider */}
            <div className="border-t border-white/[0.06] mb-8" />

            {/* Price + Primary CTA Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Starting from</p>
                <p className="text-emerald-400 text-3xl font-extrabold tracking-tight">$2,400,000</p>
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-[#113529] font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/10 flex items-center gap-2 active:scale-95 group">
                View Details
                <RiArrowRightUpLine size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Bottom Step Dots Pagination */}
            <div className="flex items-center gap-2.5 mt-12">
              {properties.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDot(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeDot === i
                      ? "bg-emerald-400 w-8"
                      : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* ── RIGHT — Interactive Image Gallery Block ── */}
          <div className="w-full lg:flex-[1.3] order-1 lg:order-2">

            {/* Hero Main Active Large Preview */}
            <div className="rounded-3xl overflow-hidden h-64 sm:h-96 w-full mb-4 bg-[#0d2a1f] shadow-2xl border border-white/[0.05]">
              <img
                src={mainImage}
                alt="Main Active Property Preview"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Grid Track For Interactive Small Gallery Thumbnails */}
            <div className="grid grid-cols-5 gap-3">
              {initialImages.map((src, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(src)}
                  onMouseEnter={() => setMainImage(src)}
                  className={`rounded-xl overflow-hidden h-14 sm:h-20 bg-[#0d2a1f] relative border-2 transition-all duration-300 ${
                    mainImage === src 
                      ? "border-emerald-400 opacity-100 scale-[0.97]" 
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Property snapshot thumb ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TopListing;