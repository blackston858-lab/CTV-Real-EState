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

  // Scroll effect for seamless dark green top bar
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#113529]/95 backdrop-blur-md border-white/10 py-3"
          : "bg-[#113529] border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo (Swapped blue/amber to emerald/white) */}
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
                className={`relative text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-emerald-400" : "text-white/70 hover:text-emerald-400"
                } group`}
              >
                {item.label}
                {/* Underline Animation */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-emerald-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-white/70 font-medium hover:text-emerald-400 transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/add-property"
            className="bg-emerald-500 text-[#113529] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-emerald-600 transition-all active:scale-95"
          >
            Add Property
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-white/70 hover:text-emerald-400 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0d2a1f] border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  isActive ? "text-emerald-400" : "text-white/70 hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <hr className="border-white/10" />
          <div className="flex flex-col gap-3 pt-2 pb-2">
            <Link
              to="/signin"
              className="text-center font-medium text-white/70 hover:text-emerald-400 bg-white/5 py-3 rounded-md border border-white/10"
            >
              Log In
            </Link>
            <Link
              to="/add-property"
              className="text-center font-medium bg-emerald-500 text-[#113529] py-3 rounded-md hover:bg-emerald-600"
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