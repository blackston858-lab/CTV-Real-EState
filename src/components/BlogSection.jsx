import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

// ── Blog Posts Data ──
const posts = [
  {
    id: 1,
    category: "Buying Tips",
    date: "May 12, 2025",
    title: "5 Things You Must Check Before Buying a House in Pakistan",
    excerpt: "From title verification to neighbourhood safety — here's what every buyer should inspect before signing anything.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&fit=crop&q=80",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Market News",
    date: "May 8, 2025",
    title: "Islamabad Real Estate Market Is Booming in 2025",
    excerpt: "Property prices in key sectors have risen by 18% this year. Here's where the smart money is going.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&fit=crop&q=80",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Selling Guide",
    date: "Apr 30, 2025",
    title: "How to Get the Best Price When Selling Your Property",
    excerpt: "Timing, staging, and the right agent can make a difference of millions. Learn what top sellers do differently.",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f28f4b72?w=600&fit=crop&q=80",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Investment",
    date: "Apr 22, 2025",
    title: "Top 3 Cities in Pakistan for Real Estate Investment in 2025",
    excerpt: "Lahore, Islamabad or Karachi? We break down the numbers to show you where your money grows fastest.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&fit=crop&q=80",
    readTime: "7 min read",
    featured: false,
  },
];

// ── Category tag color ──
const categoryColor = {
  "Buying Tips":   "bg-blue-500/20 text-blue-300",
  "Market News":   "bg-yellow-500/20 text-yellow-300",
  "Selling Guide": "bg-purple-500/20 text-purple-300",
  "Investment":    "bg-[#4ade80]/20 text-[#4ade80]",
};

// ── Single Small Card ──
const SmallCard = ({ post, visible, delay }) => (
  <div
    style={{
      transition: "opacity 0.7s ease, transform 0.7s ease",
      transitionDelay: `${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
    }}
    className="flex gap-4 group cursor-pointer"
  >
    {/* Thumbnail */}
    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center">
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-2 ${categoryColor[post.category]}`}>
        {post.category}
      </span>
      <p className="text-white text-sm font-semibold leading-snug group-hover:text-[#4ade80] transition-colors line-clamp-2">
        {post.title}
      </p>
      <p className="text-white/30 text-xs mt-1.5">{post.date} · {post.readTime}</p>
    </div>
  </div>
);

// ── Main Section ──
const BlogSection = () => {
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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section ref={ref} className="w-full bg-[#113529] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          style={{
            transition: "opacity 0.7s ease, transform 0.7s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(25px)",
          }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            {/* Badge */}
            <div className="inline-block border border-white/20 text-white/50 text-xs px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
              Our Blog
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serif font-bold leading-tight">
              Insights & Property<br />Market Updates
            </h2>
          </div>

          {/* View All */}
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-all group mb-2"
          >
            View All Posts
            <IoIosArrowForward size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Main Layout — featured left, list right ── */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── LEFT — Featured Big Card ── */}
          <div
            style={{
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "100ms",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
            className="flex-[1.2] relative rounded-3xl overflow-hidden h-[480px] group cursor-pointer"
          >
            {/* Image */}
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-white/40 text-xs">{featured.date} · {featured.readTime}</span>
              </div>
              <h3 className="text-white text-2xl font-serif font-bold leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">
                {featured.excerpt}
              </p>
              <Link
                to="/blog/1"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#4ade80] hover:text-[#0a2018] text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 transition-all duration-300"
              >
                Read Article <IoIosArrowForward size={14} />
              </Link>
            </div>
          </div>

          {/* ── RIGHT — 3 Small Cards ── */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            {rest.map((post, i) => (
              <div key={post.id}>
                <SmallCard post={post} visible={visible} delay={200 + i * 120} />
                {/* Divider between cards */}
                {i < rest.length - 1 && (
                  <div className="border-b border-white/5 mt-6" />
                )}
              </div>
            ))}

            {/* Bottom CTA */}
            <Link
              to="/blog"
              style={{
                transition: "opacity 0.7s ease",
                transitionDelay: "600ms",
                opacity: visible ? 1 : 0,
              }}
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#4ade80]/50 hover:bg-[#4ade80]/5 text-white/50 hover:text-[#4ade80] text-sm font-medium py-3 rounded-xl transition-all duration-300"
            >
              Explore All Articles <IoIosArrowForward size={14} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;