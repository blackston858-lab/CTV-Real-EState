import { useEffect, useRef, useState } from "react";

// ── Team members ka data ──
const team = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Bilal Khan",
    role: "Head of Operations",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Saad Ali",
    role: "Lead Property Advisor",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
  },
];

// ── Ek team member ka card ──
const TeamCard = ({ member, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Jab card screen pe aaye tab visible true ho jaaye
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
      className="rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
    >
      {/* Image — w-full h-80 taake properly dikhay */}
      <div className="relative h-80 w-full">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Bottom gradient — text readable ho */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Naam aur role — image ke andar bottom mein */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-white font-semibold text-base">{member.name}</p>
          <p className="text-white/60 text-xs mt-0.5">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

// ── Poora section ──
const TeamSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Header ka fade-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#113529] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header — fade-up */}
        <div
          style={{
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(25px)",
          }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-block border border-white/20 text-white/50 text-xs px-4 py-1 rounded-full mb-5 tracking-widest uppercase">
            Our Team
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Global Executive<br />Leadership
          </h2>

          {/* Sub text */}
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Meet the people behind our mission — experienced leaders
            dedicated to transforming real estate across Pakistan and beyond.
          </p>
        </div>

        {/* Teen cards ka grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard
              key={member.id}
              member={member}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Dots — neeche pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-6 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default TeamSection;