import { FiPhoneCall, FiMessageCircle, FiStar, FiAward, FiArrowRight } from "react-icons/fi";

// ── AGENTS MOCK DATA ──
const agentsData = [
  {
    id: 1,
    name: "Ali Rahman",
    role: "Luxury Villa Specialist",
    experience: "8 Years",
    deals: "124+",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80",
    badge: "Top Seller",
  },
  {
    id: 2,
    name: "Zoya Tariq",
    role: "Commercial Real Estate",
    experience: "5 Years",
    deals: "89+",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80",
    badge: "RentHero Certified",
  },
  {
    id: 3,
    name: "Omer Farooq",
    role: "Apartments & Condos",
    experience: "10 Years",
    deals: "210+",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
    badge: "Area Expert",
  },
  {
    id: 4,
    name: "Sara Khan",
    role: "Investment Properties",
    experience: "6 Years",
    deals: "150+",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop&q=80",
    badge: "Verified",
  }
];

const AgentsSection = () => {
  return (
    <section className="w-full bg-[#113529] py-24 px-6 md:px-16 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#0d2a1f] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ── HEADER TITLE BLOCK ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-4">
            <FiAward size={14} className="text-emerald-400" />
            Our Elite Network
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Meet Our Top Agents
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light">
            Connect with industry-leading professionals who have local expertise, verified track records, and a passion for finding your dream property.
          </p>
        </div>

        {/* ── AGENTS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {agentsData.map((agent) => (
            <div 
              key={agent.id} 
              className="bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300 group shadow-xl"
            >
              {/* Agent Image & Badge */}
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-[#113529]/90 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
                  {agent.badge}
                </div>
              </div>

              {/* Agent Info Box */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {agent.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md">
                    <FiStar className="text-amber-400 fill-amber-400" size={12} />
                    <span className="text-xs font-bold">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-emerald-400/80 text-xs font-medium mb-4">
                  {agent.role}
                </p>

                {/* Agent Stats */}
                <div className="grid grid-cols-2 gap-2 mb-6 border-y border-white/10 py-3">
                  <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Experience</span>
                    <span className="text-sm font-semibold text-white/90">{agent.experience}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Deals Closed</span>
                    <span className="text-sm font-semibold text-white/90">{agent.deals}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-[#113529] font-bold text-sm py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2">
                    <FiPhoneCall size={16} />
                    Call
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-2.5 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                    <FiMessageCircle size={16} />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="bg-[#0d2a1f]/80 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Are you a Real Estate Expert?</h3>
            <p className="text-white/60 text-sm max-w-xl">
              Join RentHero's elite network of agents. Get access to premium listings, qualified leads, and state-of-the-art marketing tools to skyrocket your sales.
            </p>
          </div>
          
          <button className="relative z-10 shrink-0 bg-white text-[#113529] hover:bg-emerald-50 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-2 group">
            Become an Agent
            <FiArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AgentsSection;