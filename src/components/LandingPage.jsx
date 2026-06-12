import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const LandingPage = () => {
  const [tab, setTab] = useState("buy");

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Rich Dark Green Tinted Overlay for Depth ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2a1f]/85 via-[#113529]/75 to-[#0d2a1f]/90" />

      {/* ── Hero Content Wrapper ── */}
      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center pt-28 pb-12 flex flex-col items-center select-none">
        
        {/* Dynamic Premium Heading */}
        <div className="min-h-[120px] sm:min-h-[80px] md:min-h-[140px] flex items-center justify-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            <Typewriter
              options={{
                strings: [
                  "Find Your Ideal Property In Minutes.",
                  "Your Dream Home Awaits You.",
                  "Buy, Rent or Sell With Confidence.",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 50,
                deleteSpeed: 25,
              }}
            />
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-white/80 text-base md:text-lg mt-2 mb-10 max-w-xl font-light leading-relaxed">
          Browse thousands of verified listings across premium locations. 
          Discover a place you'll love to live.
        </p>

        {/* ── Dark Green Search Engine Widget ── */}
        <div className="w-full bg-[#0d2a1f]/95 backdrop-blur-md rounded-[2rem] shadow-2xl p-4 md:p-6 text-left border border-white/[0.05] max-w-4xl">
          
          {/* Tabs Container */}
          <div className="flex gap-2 mb-4 bg-[#113529] p-1 rounded-xl w-fit border border-white/[0.03]">
            {["buy", "rent", "sell"].map((type) => (
              <button
                key={type}
                onClick={() => setTab(type)}
                className={`px-6 py-2 text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-200 ${
                  tab === type
                    ? "bg-emerald-500 text-[#113529] shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                For {type}
              </button>
            ))}
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Field 1: Location */}
            <div className="flex flex-col px-4 py-2.5 bg-[#113529] border border-white/[0.03] rounded-xl hover:border-emerald-500/20 transition-colors">
              <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">Location</label>
              <input
                type="text"
                placeholder="City, Area or Zip..."
                className="bg-transparent outline-none text-white text-sm placeholder:text-white/30 w-full font-medium"
              />
            </div>

            {/* Field 2: Property Type */}
            <div className="flex flex-col px-4 py-2.5 bg-[#113529] border border-white/[0.03] rounded-xl hover:border-emerald-500/20 transition-colors">
              <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">Property Type</label>
              <select className="bg-transparent outline-none text-white text-sm font-medium w-full cursor-pointer appearance-none">
                <option className="bg-[#113529]">All Residentials</option>
                <option className="bg-[#113529]">Apartments</option>
                <option className="bg-[#113529]">Luxury Villas</option>
                <option className="bg-[#113529]">Commercial Plots</option>
              </select>
            </div>

            {/* Field 3: Price Range */}
            <div className="flex flex-col px-4 py-2.5 bg-[#113529] border border-white/[0.03] rounded-xl hover:border-emerald-500/20 transition-colors">
              <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">Budget Range</label>
              <select className="bg-transparent outline-none text-white text-sm font-medium w-full cursor-pointer appearance-none">
                <option className="bg-[#113529]">Any Price</option>
                <option className="bg-[#113529]">$50k - $100k</option>
                <option className="bg-[#113529]">$100k - $250k</option>
                <option className="bg-[#113529]">$250k+</option>
              </select>
            </div>

            {/* Action Search Button */}
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-[#113529] font-bold text-sm h-full min-h-[52px] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all duration-200 active:scale-[0.98]">
              <IoSearch size={18} />
              <span>Search Options</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;