import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsBuilding, BsGraphUpArrow } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { TbHomeCheck } from "react-icons/tb";
import { Link } from "react-router";

// ── Steps data ──
const steps = [
  {
    num: "01",
    title: "List Your Property",
    desc: "Fill in your property details and go live in minutes.",
    icon: <TbHomeCheck size={20} />,
  },
  {
    num: "02",
    title: "Connect With Buyers",
    desc: "We match you with verified, serious buyers instantly.",
    icon: <MdVerified size={20} />,
  },
  {
    num: "03",
    title: "Close The Deal",
    desc: "Our agents handle everything from offer to handover.",
    icon: <BsGraphUpArrow size={20} />,
  },
];

// ── Floating stat card ──
const StatCard = ({ value, label, delay, visible }) => (
  <div
    style={{
      transition: "opacity 0.7s ease, transform 0.7s ease",
      transitionDelay: `${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
    }}
    className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-center"
  >
    <p className="text-white text-2xl font-bold">{value}</p>
    <p className="text-white/50 text-xs mt-0.5">{label}</p>
  </div>
);

const SellHero = () => {
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

  // Reusable fade style
  const fade = (delay = 0) => ({
    transition: "opacity 0.7s ease, transform 0.7s ease",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
  });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#113529] relative overflow-hidden flex flex-col"
    >

      {/* ── Subtle bg circle glow — top right ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1a5c3a]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0a2018]/60 blur-[100px] pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20 gap-16 w-full">

        {/* ── LEFT ── */}
        <div className="flex-1">

          {/* Eyebrow badge */}
          <div style={fade(0)} className="inline-flex items-center gap-2 border border-white/15 text-white/50 text-xs px-4 py-1.5 rounded-full mb-7 tracking-widest uppercase">
            <BsBuilding size={11} /> Sell With Us
          </div>

          {/* Heading */}
          <div style={fade(100)}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
              Sell Smarter.<br />
              <span className="text-[#4ade80]">Close Faster.</span>
            </h1>
          </div>

          {/* Sub */}
          <div style={fade(200)}>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
              List your property with Pakistan's most trusted platform.
              Real buyers, verified agents, and zero hassle from start to finish.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={fade(300)} className="flex items-center gap-4 mb-14">
           <Link to="/list-property">
            <button className="flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#0a2018] text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300">
              List Your Property <IoIosArrowForward size={16} />
            </button>
           </Link>
            <button className="text-white/60 hover:text-white text-sm font-medium border border-white/15 px-7 py-3.5 rounded-full transition-all duration-300 hover:border-white/40">
              How It Works
            </button>
          </div>

          {/* Stats Row */}
          <div style={fade(400)} className="grid grid-cols-3 gap-4 max-w-sm">
            <StatCard value="98%" label="Sell Rate"      delay={450} visible={visible} />
            <StatCard value="12K+" label="Properties"   delay={550} visible={visible} />
            <StatCard value="21d"  label="Avg. Close"   delay={650} visible={visible} />
          </div>

        </div>

        {/* ── RIGHT — Steps + Image ── */}
        <div className="flex-1 w-full">

          {/* Property Image */}
          <div style={fade(150)} className="relative rounded-3xl overflow-hidden h-72 mb-6 w-full">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&fit=crop&q=80"
              alt="Property"
              className="w-full h-full object-cover"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#113529]/80 via-transparent to-transparent" />

            {/* Floating verified badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <MdVerified size={15} className="text-[#4ade80]" />
              <span className="text-white text-xs font-medium">Verified Listing</span>
            </div>

            {/* Floating price tag */}
            <div className="absolute top-5 right-5 bg-[#0a2018]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
              <p className="text-white/50 text-xs">Estimated Value</p>
              <p className="text-white font-bold text-sm">$1,200,000</p>
            </div>
          </div>

          {/* 3 Steps */}
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={fade(300 + i * 120)}
                className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                {/* Step number */}
                <span className="text-[#4ade80]/50 text-xs font-bold mt-0.5 w-6 flex-shrink-0">
                  {step.num}
                </span>

                {/* Icon */}
                <div className="text-[#4ade80] flex-shrink-0 mt-0.5">
                  {step.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-white text-sm font-semibold">{step.title}</p>
                  <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow */}
                <IoIosArrowForward
                  size={14}
                  className="text-white/20 group-hover:text-white/60 transition-colors ml-auto mt-1 flex-shrink-0"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default SellHero;