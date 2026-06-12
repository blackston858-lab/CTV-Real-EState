import { useState } from "react";
import { FiSearch, FiMapPin, FiHeart } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { TbBath, TbRuler } from "react-icons/tb";
import { HiOutlineChevronRight } from "react-icons/hi";

// ── DATA STRUCTURE GROUPED BY CITIES ──
const propertyData = {
  "Chicago Properties": [
    {
      id: "ch-1",
      price: "$389,000",
      beds: "1",
      baths: "1.5",
      sqft: "980",
      address: "50 E Bellevue Pl #1506, Gold Coast, IL 60611",
      desc: "Oversized 1-bedroom condo situated on sought-after Bellevue Place in the center of the prestigious Gold Coast. Updated Ice White kitchen by Valcucine.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&fit=crop&q=80"
    },
    {
      id: "ch-2",
      price: "$1,100,000",
      beds: "4",
      baths: "3.5",
      sqft: "4,300",
      address: "3428 N Kilbourn Ave, Chicago, IL 60641",
      desc: "Newly constructed luxurious single-family home directly across from Kilbourn Park. Features a spacious main level with a designer kitchen.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&fit=crop&q=80"
    },
    {
      id: "ch-3",
      price: "$325,000",
      beds: "1",
      baths: "1",
      sqft: "875",
      address: "400 N La Salle Dr #2208, Chicago, IL 60654",
      desc: "Bright and spacious corner condo offering stunning city views and an open layout. Floor-to-ceiling windows and in-unit laundry.",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&fit=crop&q=80"
    }
  ],
  "Islamabad Properties": [
    {
      id: "isb-1",
      price: "$450,000",
      beds: "4",
      baths: "4",
      sqft: "3,200",
      address: "Sector F-7/2, Islamabad, ICT",
      desc: "Premium modern architecture villa with a minimalist facade, scenic Margalla hills views, and high-end automation features built-in.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&fit=crop&q=80"
    },
    {
      id: "isb-2",
      price: "$295,000",
      beds: "3",
      baths: "3.5",
      sqft: "2,400",
      address: "Phase 4, Bahria Town, Islamabad",
      desc: "Luxury penthouse with premium designer kitchen, terrace fireplace, and panoramic views of the valley landscapes.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&fit=crop&q=80"
    }
  ],
  "Lahore Properties": [
    {
      id: "lhr-1",
      price: "$620,000",
      beds: "5",
      baths: "6",
      sqft: "4,500",
      address: "Block Phase 6, DHA, Lahore",
      desc: "Stunning Spanish-style luxury mansion featuring a grand entrance lobby, premium imported fixtures, and a private landscaped lawn.",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&fit=crop&q=80"
    },
    {
      id: "lhr-1",
      price: "$620,000",
      beds: "5",
      baths: "6",
      sqft: "4,500",
      address: "Block Phase 6, DHA, Lahore",
      desc: "Stunning Spanish-style luxury mansion featuring a grand entrance lobby, premium imported fixtures, and a private landscaped lawn.",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&fit=crop&q=80"
    },
    {
      id: "lhr-1",
      price: "$620,000",
      beds: "5",
      baths: "6",
      sqft: "4,500",
      address: "Block Phase 6, DHA, Lahore",
      desc: "Stunning Spanish-style luxury mansion featuring a grand entrance lobby, premium imported fixtures, and a private landscaped lawn.",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&fit=crop&q=80"
    }
  ],
  "Karachi Properties": [
    {
      id: "khi-1",
      price: "$780,000",
      beds: "4",
      baths: "4.5",
      sqft: "3,800",
      address: "DHA Phase 8, Karachi, Sindh",
      desc: "Breathtaking beachfront modern property featuring open-concept decks, high structural tolerance, and bespoke security infrastructure.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&fit=crop&q=80"
    },
     {
      id: "khi-1",
      price: "$780,000",
      beds: "4",
      baths: "4.5",
      sqft: "3,800",
      address: "DHA Phase 8, Karachi, Sindh",
      desc: "Breathtaking beachfront modern property featuring open-concept decks, high structural tolerance, and bespoke security infrastructure.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&fit=crop&q=80"
    }
  ],
  "Rawalpindi Properties": [
    {
      id: "rwp-1",
      price: "$195,000",
      beds: "3",
      baths: "3",
      sqft: "1,980",
      address: "Satellite Town, Rawalpindi",
      desc: "Beautiful fully renovated classic brick bungalow with solid wood details, dual access gates, and ample car parking space.",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&fit=crop&q=80"
    },
     {
      id: "rwp-1",
      price: "$195,000",
      beds: "3",
      baths: "3",
      sqft: "1,980",
      address: "Satellite Town, Rawalpindi",
      desc: "Beautiful fully renovated classic brick bungalow with solid wood details, dual access gates, and ample car parking space.",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&fit=crop&q=80"
    },

  ]
};

// Filter dropdown values compiled from criteria
const minPrices = ["No min", "$50k", "$100k", "$200k", "$300k", "$500k", "$1M", "$2M", "$5M"];
const maxPrices = ["No max", "$100k", "$200k", "$400k", "$600k", "$1M", "$3M", "$5M", "$10M"];

const HousesNearMe = () => {
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("No min");
  const [maxPrice, setMaxPrice] = useState("No max");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#113529] py-20 px-6 md:px-16 relative overflow-hidden text-white">
      {/* Decorative Blur Ambient Vector Element */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── HEADER BLOCK ── */}
        <div className="max-w-3xl mb-12">
          <span className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            Location Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Houses for sale near me
          </h2>
          <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">
            Find houses for sale near you. View photos, open house information, and property details for nearby real estate properties instantly.
          </p>
        </div>

        {/* ── ADVANCED HIGH-TECH FILTER PANEL ── */}
        <div className="bg-[#0d2a1f] border border-white/[0.05] p-5 md:p-6 rounded-3xl shadow-2xl mb-20 flex flex-col lg:flex-row items-end gap-5">
          
          {/* Location Search Bar Field */}
          <div className="w-full lg:flex-[1.5] flex flex-col gap-2">
            <label className="text-white/40 text-xs font-semibold uppercase tracking-wider pl-1">Location</label>
            <div className="w-full relative">
              <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" size={18} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, neighborhood or zip code..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>

          {/* Min Price Dropdown Container */}
          <div className="w-full lg:flex-1 flex flex-col gap-2">
            <label className="text-white/40 text-xs font-semibold uppercase tracking-wider pl-1">Min Price</label>
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer"
            >
              {minPrices.map((p, idx) => (
                <option key={idx} value={p} className="bg-[#0d2a1f] text-white">{p}</option>
              ))}
            </select>
          </div>

          {/* Max Price Dropdown Container */}
          <div className="w-full lg:flex-1 flex flex-col gap-2">
            <label className="text-white/40 text-xs font-semibold uppercase tracking-wider pl-1">Max Price</label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer"
            >
              {maxPrices.map((p, idx) => (
                <option key={idx} value={p} className="bg-[#0d2a1f] text-white">{p}</option>
              ))}
            </select>
          </div>

          {/* Core Submit Search Button Trigger */}
          <button className="w-full lg:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#113529] font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-98 shrink-0">
            <FiSearch size={18} />
            <span>Search</span>
          </button>
        </div>

        {/* ── VERTICAL STACKED CITY TRACK LINE SEGMENTS ── */}
        <div className="space-y-16">
          {Object.entries(propertyData).map(([cityName, houses]) => (
            <div key={cityName} className="w-full border-b border-white/[0.04] pb-10 last:border-none">
              
              {/* Row Header Segment */}
              <div className="flex items-center justify-between mb-6 px-1">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                  {cityName}
                </h3>
                <button className="text-emerald-400 text-xs md:text-sm font-semibold flex items-center gap-1 hover:text-emerald-300 transition-colors group">
                  See All Listings 
                  <HiOutlineChevronRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Horizontal Clean Scroll Track System Layout */}
              <div className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {houses.map((house) => (
                  <div
                    key={house.id}
                    className="w-[300px] sm:w-[380px] shrink-0 bg-[#0d2a1f] border border-white/[0.05] rounded-3xl overflow-hidden snap-start shadow-xl group hover:border-emerald-500/20 transition-all duration-300"
                  >
                    {/* Card Thumbnail Asset Wrapper */}
                    <div className="h-48 sm:h-52 relative overflow-hidden bg-white/5">
                      <img
                        src={house.img}
                        alt={house.address}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Interactive Heart Wishlist Node Button */}
                      <button 
                        onClick={() => toggleFavorite(house.id)}
                        className="absolute top-4 right-4 p-2.5 bg-[#113529]/60 backdrop-blur-md rounded-xl text-white hover:text-rose-400 hover:bg-[#113529]/90 transition-all duration-200 z-10"
                      >
                        <FiHeart size={16} className={favorites.includes(house.id) ? "fill-rose-500 text-rose-500" : ""} />
                      </button>

                      {/* Photo Index Track Badge Display */}
                      <span className="absolute bottom-4 left-4 bg-[#113529]/70 backdrop-blur-md text-[10px] font-medium px-2.5 py-1 rounded-md tracking-wider">
                        1 / {Math.floor(Math.random() * 20) + 20} Photos
                      </span>
                    </div>

                    {/* Metadata Detail Frame Container */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between">
                      <div>
                        {/* Price Display */}
                        <div className="text-2xl font-extrabold text-emerald-400 tracking-tight mb-2">
                          {house.price}
                        </div>

                        {/* Architectural Spec Badges */}
                        <div className="flex items-center gap-4 text-xs font-light text-white/60 mb-4 bg-white/[0.02] border border-white/[0.04] p-2.5 rounded-xl justify-between">
                          <span className="flex items-center gap-1.5">
                            <IoBedOutline className="text-emerald-400" size={16} />
                            <strong>{house.beds}</strong> Bed{house.beds > 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <TbBath className="text-emerald-400" size={16} />
                            <strong>{house.baths}</strong> Bath{house.baths > 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <TbRuler className="text-emerald-400" size={16} />
                            <strong>{house.sqft}</strong> sq ft
                          </span>
                        </div>

                        {/* Location Address Header Details */}
                        <h4 className="text-white font-medium text-sm line-clamp-1 mb-2 tracking-wide">
                          {house.address}
                        </h4>

                        {/* Expanded Content Description Line Wrap */}
                        <p className="text-white/40 text-xs font-light leading-relaxed line-clamp-2">
                          {house.desc}
                        </p>
                      </div>

                      {/* Explicit Interactive Action Button Node */}
                      <div className="mt-5 pt-4 border-t border-white/[0.05]">
                        <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/[0.06] transition-colors">
                          View House Details
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HousesNearMe;