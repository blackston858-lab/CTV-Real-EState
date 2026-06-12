import { useState } from "react";
import { FiSearch, FiMapPin, FiCalendar, FiUsers, FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

// ── RENTAL DATA BY REGIONS ──
const rentalData = {
  "Popular homes in Lahore": [
    { id: "lhr-1", title: "Apartment in Lahore", price: "$104", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "lhr-2", title: "Apartment in Lahore", price: "$88", period: "2 nights", rating: "4.98", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "lhr-3", title: "Condo in Lahore", price: "$86", period: "2 nights", rating: "4.99", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "lhr-4", title: "Apartment in Lahore", price: "$88", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "lhr-5", title: "Apartment in Lahore", price: "$78", period: "2 nights", rating: "4.94", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "lhr-6", title: "Condo in Lahore", price: "$42", period: "2 nights", rating: "4.93", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&fit=crop&q=80", tag: "Guest favorite" }
  ],
  "Available in Murree & Nathia Gali": [
    { id: "mur-1", title: "Guesthouse in Murree", price: "$155", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-2", title: "Apartment in Murree", price: "$62", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-3", title: "Apartment in Murree", price: "$46", period: "2 nights", rating: "4.79", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-4", title: "Place to stay in Murree", price: "$49", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-5", title: "Cottage in Murree", price: "$318", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-6", title: "Cabin in Bansra Gali", price: "$206", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&fit=crop&q=80", tag: "Guest favorite" }
  ],
  "Stays in Azad Kashmir": [
    { id: "ak-1", title: "Luxury Resort in Neelum Valley", price: "$120", period: "1 night", rating: "4.95", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "ak-2", title: "Wooden Cottage in Keran", price: "$75", period: "1 night", rating: "4.88", img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "ki-3", title: "Apartment in Rawalakot", price: "$78", period: "1 night", rating: "5.0", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "mur-5", title: "Cottage in Havlie Azad Kashmir", price: "$318", period: "2 nights", rating: "5.0", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&fit=crop&q=80", tag: "Guest favorite" },


  ],
  "Trending in Karachi & Islamabad": [
    { id: "ki-1", title: "Beachfront Villa Clifton", price: "$250", period: "2 nights", rating: "4.91", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "ki-2", title: "Modern Studio Sector F-7", price: "$95", period: "1 night", rating: "5.0", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&fit=crop&q=80", tag: "Guest favorite" },
        { id: "ki-3", title: "Apartment in Islamabad", price: "$78", period: "1 night", rating: "5.0", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&fit=crop&q=80", tag: "Guest favorite" },
    { id: "ki-4", title: "Apartment in Karachi", price: "$65", period: "4 nights", rating: "4.0", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&fit=crop&q=80", tag: "Guest favorite" },

  ]
};

const RentHero = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const scrollContainer = (id, direction) => {
    const el = document.getElementById(id);
    if (el) {
      const scrollAmount = direction === "left" ? -400 : 400;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#113529] pt-24 pb-20 px-6 md:px-16 text-white relative overflow-hidden">
      {/* Soft Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] bg-emerald-500/5 filter blur-[120px] rounded-full pointer-events-none" />

      {/* ── Injection of CSS custom class to hide native scrollbar globally ── */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── HEADER TITLE BLOCK ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-400 font-bold tracking-[0.25em] text-xs uppercase block mb-3">
            RentHero Portals
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
            Find Your Vacation Stay
          </h1>
          <p className="text-white/50 text-xs md:text-sm font-light">
            Discover thousands of verified flats, luxury vacation homes, and aesthetic cabins across beautiful landscapes.
          </p>
        </div>

        {/* ── FIXED AIRBNB STYLE 3-SPLIT FLOATING SEARCH ENGINE ── */}
        <div className="max-w-4xl mx-auto bg-[#0d2a1f]/90 border border-white/[0.08] backdrop-blur-xl rounded-2xl md:rounded-full shadow-2xl p-3 md:p-2 md:pl-6 mb-24 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
          
          {/* Section 1: Where */}
          <div className="flex-1 flex items-center gap-3 py-1.5 md:py-0 border-b md:border-b-0 md:border-r border-white/10 px-2 group">
            <FiMapPin className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" size={18} />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">Where</span>
              <input
                type="text"
                placeholder="Search destinations..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-white placeholder:text-white/30 focus:outline-none truncate"
              />
            </div>
          </div>

          {/* Section 2: When */}
          <div className="flex-1 flex items-center gap-3 py-1.5 md:py-0 border-b md:border-b-0 md:border-r border-white/10 px-2 md:px-4 group">
            <FiCalendar className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" size={18} />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">When</span>
              <input
                type="text"
                placeholder="Add dates (e.g. Jun 12-14)"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-white placeholder:text-white/30 focus:outline-none truncate"
              />
            </div>
          </div>

          {/* Section 3: Who */}
          <div className="flex-1 flex items-center gap-3 py-1.5 md:py-0 px-2 md:px-4 group">
            <FiUsers className="text-emerald-400 group-hover:scale-110 transition-transform shrink-0" size={18} />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] text-white/40 font-bold uppercase tracking-wider">Who</span>
              <input
                type="text"
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent border-none text-sm text-white placeholder:text-white/30 focus:outline-none truncate"
              />
            </div>
          </div>

          {/* Fixed Clean Search CTA Button Node */}
          <button className="md:h-12 md:w-12 bg-emerald-500 hover:bg-emerald-400 text-[#113529] rounded-xl md:rounded-full flex items-center justify-center font-bold gap-2 md:gap-0 transition-all duration-300 shadow-lg shadow-emerald-500/20 py-3.5 px-6 md:px-0 shrink-0 group active:scale-95">
            <FiSearch size={18} className="transform group-hover:rotate-12 transition-transform" />
            <span className="md:hidden text-sm tracking-wide">Search Stays</span>
          </button>
        </div>


        {/* ── PROPERTIES HORIZONTAL TRACK SYSTEM (Lines Hidden!) ── */}
        <div className="space-y-16">
          {Object.entries(rentalData).map(([sectionTitle, cards], rowIndex) => {
            const trackId = `track-row-${rowIndex}`;

            return (
              <div key={sectionTitle} className="w-full relative">
                
                {/* Horizontal Rail Header Actions */}
                <div className="flex items-center justify-between mb-5 px-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 hover:text-emerald-400 cursor-pointer transition-colors group">
                    {sectionTitle}
                    <FiChevronRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                  </h3>
                  
                  {/* Slider Control Arrows */}
                  <div className="hidden sm:flex items-center gap-2">
                    <button 
                      onClick={() => scrollContainer(trackId, "left")}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all text-white/70 hover:text-white"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={() => scrollContainer(trackId, "right")}
                      className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all text-white/70 hover:text-white"
                    >
                      <FiChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Strip Container (no-scrollbar hides the lines perfectly) */}
                <div 
                  id={trackId}
                  className="flex gap-4 overflow-x-auto pb-2 snap-x scroll-smooth no-scrollbar"
                >
                  {cards.map((card) => (
                    <div 
                      key={card.id} 
                      className="w-[230px] sm:w-[260px] shrink-0 snap-start group cursor-pointer"
                    >
                      {/* Image Box */}
                      <div className="w-full h-[230px] sm:h-[260px] rounded-2xl overflow-hidden relative bg-white/5 shadow-md border border-white/[0.04]">
                        <img 
                          src={card.img} 
                          alt={card.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                        
                        {/* Guest Favorite Overlay */}
                        {card.tag && (
                          <div className="absolute top-3 left-3 bg-white/95 text-[#113529] font-medium text-[11px] px-2.5 py-1 rounded-full shadow-md tracking-tight">
                            {card.tag}
                          </div>
                        )}

                        {/* Wishlist Heart */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(card.id);
                          }}
                          className="absolute top-3 right-3 text-white/90 drop-shadow-md hover:scale-110 active:scale-90 transition-transform"
                        >
                          <FiHeart 
                            size={20} 
                            className={`transition-colors stroke-2 ${likedItems.includes(card.id) ? "fill-rose-500 text-rose-500" : "text-white"}`} 
                          />
                        </button>
                      </div>

                      {/* Metadata Segment */}
                      <div className="mt-3 px-1 text-sm">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-bold text-white/90 truncate group-hover:text-emerald-400 transition-colors">
                            {card.title}
                          </h4>
                          <span className="flex items-center gap-1 shrink-0 text-white/90 text-xs font-light">
                            <AiFillStar className="text-white shrink-0" size={14} />
                            {card.rating}
                          </span>
                        </div>
                        
                        <p className="text-white/50 text-xs font-light mt-0.5">
                          <strong className="text-white font-bold">{card.price}</strong> for {card.period}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RentHero;