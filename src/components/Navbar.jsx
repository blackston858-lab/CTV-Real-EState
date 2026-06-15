import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Buy", path: "/buy" },
  { label: "Rent", path: "/rent" },
  { label: "Sell", path: "/sell" },
  { label: "Agents", path: "/agents" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isOpen
          ? "bg-[#113529] border-white/10 py-4"
          : isScrolled
            ? "bg-[#113529] md:bg-[#113529]/30 md:backdrop-blur-xl border-white/10 md:border-white/20 py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] md:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_12px_40px_0_rgba(0,0,0,0.3)]"
            : "bg-[#113529] border-transparent py-5"
      }`}
    >
      {/* ── LIQUID SPECULAR GRADIENT OVERLAY (Gives explicit glass sheen on desktop scroll) ── */}
      {isScrolled && !isOpen && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-white/[0.01] to-transparent pointer-events-none transition-opacity duration-500 hidden md:block" />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-[#113529] font-bold text-xl">
            H
          </div>
          <span className="font-bold text-2xl text-white tracking-tight ml-1">
            Home<span className="text-emerald-400 font-medium">Seeker</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  isActive ? "text-emerald-400" : "text-white/70 hover:text-emerald-400"
                } group py-1`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-400 w-full transition-transform duration-300 ease-out origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-white/70 font-medium hover:text-emerald-400 transition-colors duration-300"
          >
            Log In
          </Link>
          <Link
            to="/add-property"
            className="bg-emerald-500 text-[#113529] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-emerald-400 transition-all duration-300 active:scale-95"
          >
            Add Property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white/70 hover:text-emerald-400 focus:outline-none z-50 rounded-full"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-current rounded transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-current rounded transition-all duration-200 ${isOpen ? "opacity-0 translate-x-2" : ""}`} />
          <span className={`h-0.5 w-6 bg-current rounded transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu (100% Solid & Safe) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#113529] border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
          {navLinks.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                style={{ 
                  transitionDelay: isOpen ? `${idx * 30}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-10px)"
                }}
                className={`text-lg font-medium transition-all duration-300 ${
                  isActive ? "text-emerald-400" : "text-white/70 hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <hr className="border-white/10 my-2" />
          <div className="flex flex-col gap-3">
            <Link
              to="/signin"
              className="text-center font-medium text-white/70 hover:text-emerald-400 bg-white/5 py-3 rounded-md border border-white/5 transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/add-property"
              className="text-center font-semibold bg-emerald-500 text-[#113529] py-3 rounded-md hover:bg-emerald-400 transition-colors active:scale-[0.98]"
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;