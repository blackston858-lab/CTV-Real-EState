import { useEffect, useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";

// ── Stats data ──
const stats = [
  { value: "12K+", label: "Properties Listed" },
  { value: "8K+",  label: "Happy Clients"     },
  { value: "95%",  label: "Success Rate"      },
];

// ── Checklist items ──
const points = [
  "Verified buyers and agents",
  "Hassle-free listing process",
  "Expert guidance at every step",
];

// ── Main Section ──
const SellProperty = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-up on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Reusable fade style
  const fade = (delay = 0) => ({
    transition: "opacity 0.7s ease, transform 0.7s ease",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
  });

  return (
    <div ref={ref} className="w-full bg-[#113529] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

        {/* ── Left — Text Content ── */}
        <div className="w-full">

          {/* Heading */}
          <div style={fade(0)}>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-[1.2] mb-6">
              Find the Perfect<br />
              Way to Sell Your<br />
              Property
            </h2>
          </div>

          {/* Subtext */}
          <div style={fade(100)}>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              We connect serious buyers with verified sellers across Pakistan
              and beyond — making property transactions smooth and transparent.
            </p>
          </div>

          {/* Checklist */}
          <div className="space-y-4 mb-10">
            {points.map((point, i) => (
              <div key={i} style={fade(200 + i * 100)} className="flex items-center gap-3">
                <MdVerified size={18} className="text-green-400 flex-shrink-0" />
                <p className="text-white/80 text-sm font-medium">{point}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={fade(500)}>
            <button className="bg-white hover:bg-slate-100 text-[#113529] text-sm font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg">
              List Your Property →
            </button>
          </div>

        </div>

        {/* ── Right — Image + Stats ── */}
        <div style={fade(150)} className="w-full relative flex justify-center lg:justify-end">

          {/* Main Image Wrapper */}
          <div className="relative w-full max-w-[480px]">
            <div className="rounded-2xl overflow-hidden h-96 w-full shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&fit=crop&q=80"
                alt="Sell Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Card — floating bottom left */}
            <div
              style={fade(400)}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 flex gap-5 border border-slate-100"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-2">
                  <p className="text-[#113529] text-xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Icon badges — top right */}
            <div
              style={fade(300)}
              className="absolute top-4 right-4 flex gap-2"
            >
              <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-xl shadow-md">
                <BsBuildings size={18} className="text-white" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-xl shadow-md">
                <RiUserStarLine size={18} className="text-white" />
              </div>
              <div className="bg-white p-2.5 rounded-xl shadow-md">
                <MdVerified size={18} className="text-[#113529]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellProperty;