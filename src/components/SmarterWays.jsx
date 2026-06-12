import { useEffect, useRef, useState } from "react";
import { BsHouseAdd, BsHouseCheck, BsBuilding } from "react-icons/bs";

// ── Cards Data ──
const cards = [
  {
    id: 1,
    icon: <BsHouseAdd size={36} />,
    title: "Buy a property",
    desc: "Browse thousands of verified listings and find the perfect home that fits your budget and lifestyle with ease.",
    btn: "Find a home",
    highlighted: false,
  },
  {
    id: 2,
    icon: <BsBuilding size={36} />,
    title: "Sell a property",
    desc: "List your property with us and connect with serious buyers. We handle everything from listing to closing.",
    btn: "Sell a property",
    highlighted: true, // center card — dark filled
  },
  {
    id: 3,
    icon: <BsHouseCheck size={36} />,
    title: "Rent a property",
    desc: "Discover rental properties in top neighbourhoods. Flexible options for every budget and family size.",
    btn: "Find a rental",
    highlighted: false,
  },
];

// ── Main Section ──
const SmarterWays = () => {
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

  return (
    <div ref={ref} className="bg-[#113529] py-20 px-4 sm:px-8 lg:px-16">

      {/* ── Header ── */}
      <div
        style={{
          transition: "opacity 0.7s ease, transform 0.7s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(25px)",
        }}
        className="text-center mb-12"
      >
        <h2 className="text-white text-4xl font-bold mb-3">
          Smarter Ways to Buy,<br />Sell & Rent
        </h2>
        <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
          Whether you're looking to buy your dream home, sell your property,
          or find the perfect rental — we make it simple.
        </p>
      </div>

      {/* ── 3 Cards ── */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <div
            key={card.id}
            style={{
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: `${i * 150}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(35px)",
            }}
            className={`rounded-2xl p-7 flex flex-col items-center text-center gap-4 ${
              card.highlighted
                ? "bg-[#0d2a1f] border border-white/10 shadow-2xl scale-105"
                : "bg-white/5 border border-white/10"
            }`}
          >
            {/* Icon */}
            <div className={`${card.highlighted ? "text-white" : "text-white/70"}`}>
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-bold">{card.title}</h3>

            {/* Desc */}
            <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>

            {/* Button */}
            <button
              className={`mt-2 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                card.highlighted
                  ? "bg-white text-[#113529] hover:bg-slate-100"
                  : "border border-white/20 text-white/70 hover:bg-white/10"
              }`}
            >
              {card.btn}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default SmarterWays;