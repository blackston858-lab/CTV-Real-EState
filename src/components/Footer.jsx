import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// ── Footer Links Data ──
const footerLinks = [
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers", "Press", "Contact"],
  },
  {
    heading: "Properties",
    links: ["Buy", "Rent", "Sell", "New Listings", "Premium"],
  },
  {
    heading: "Support",
    links: ["Help Center", "FAQs", "Privacy Policy", "Terms of Use", "Sitemap"],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a2018] text-white px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Top Row ── */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-12">

          {/* ── Left — Logo + About ── */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-serif font-bold mb-3">HOMESEEKER</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your trusted partner in finding the perfect property across
              Pakistan and beyond. Buy, rent or sell with confidence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Middle — Links Columns ── */}
          <div className="flex flex-wrap gap-10 lg:gap-16">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        to="#"
                        className="text-white/40 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Right — Newsletter ── */}
          <div className="max-w-xs">
            <h3 className="text-white text-sm font-semibold mb-2 tracking-wide">
              Stay Updated
            </h3>
            <p className="text-white/40 text-xs mb-4 leading-relaxed">
              Subscribe to get the latest listings and market updates.
            </p>

            {/* Input + Button */}
            <div className="flex overflow-hidden rounded-xl border border-white/10">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none"
              />
              <button className="bg-[#113529] hover:bg-[#1a5c3a] text-white text-xs font-semibold px-4 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/10 mb-6" />

        {/* ── Bottom Row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© 2025 HomeSeeker. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;