import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineVilla, MdOutlineApartment, MdOutlineStorefront } from "react-icons/md";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { TbBath, TbRuler, TbUpload } from "react-icons/tb";
import { MdVerified } from "react-icons/md";

// ── Amenities List ──
const amenitiesList = [
  "Swimming Pool", "Gym", "Elevator", "Central AC",
  "Generator", "Security System", "Parking", "Garden",
  "Rooftop Terrace", "CCTV", "Gated Community", "Near School",
  "Near Hospital", "Near Market", "Near Mosque",
];

// ── Property Types ──
const propertyTypes = [
  { label: "House",      icon: <MdOutlineVilla size={28} /> },
  { label: "Apartment",  icon: <MdOutlineApartment size={28} /> },
  { label: "Commercial", icon: <MdOutlineStorefront size={28} /> },
];

// ── Cities ──
const cities = ["Islamabad", "Lahore", "Karachi", "Rawalpindi", "Faisalabad", "Peshawar"];

// ── Step Indicator ──
const StepIndicator = ({ current, total }) => (
  <div className="flex items-center gap-2 mb-10">
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
          i < current
            ? "bg-[#4ade80] text-[#0a2018]"
            : i === current
            ? "bg-white text-[#113529]"
            : "bg-white/10 text-white/30"
        }`}>
          {i < current ? "✓" : i + 1}
        </div>
        {i < total - 1 && (
          <div className={`h-0.5 w-10 rounded-full transition-all duration-300 ${
            i < current ? "bg-[#4ade80]" : "bg-white/10"
          }`} />
        )}
      </div>
    ))}
  </div>
);

// ── Reusable Input ──
const Input = ({ label, placeholder, type = "text", value, onChange }) => (
  <div>
    <label className="text-white/60 text-xs font-medium mb-1.5 block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#4ade80]/50 transition-colors"
    />
  </div>
);

// ── Reusable Textarea ──
const Textarea = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="text-white/60 text-xs font-medium mb-1.5 block">{label}</label>
    <textarea
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#4ade80]/50 transition-colors resize-none"
    />
  </div>
);

// ── Main Component ──
const ListProperty = () => {
  const [step, setStep] = useState(0);

  // ── All form data ──
  const [form, setForm] = useState({
    // Step 1
    type: "",
    title: "",
    description: "",
    city: "",
    address: "",
    // Step 2
    beds: "",
    baths: "",
    cars: "",
    area: "",
    amenities: [],
    // Step 3
    images: [],
    // Step 4
    price: "",
    negotiable: false,
  });

  // Update single field
  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  // Toggle amenity checkbox
  const toggleAmenity = (item) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(item)
        ? prev.amenities.filter((a) => a !== item)
        : [...prev.amenities, item],
    }));
  };

  const totalSteps = 5;

  return (
    <section className="w-full min-h-screen bg-[#113529] relative overflow-hidden">

      {/* Bg glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1a5c3a]/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20">

        {/* ── Header ── */}
        <div className="mb-8">
          <p className="text-[#4ade80] text-xs font-semibold tracking-widest uppercase mb-2">
            Sell With Us
          </p>
          <h1 className="text-white text-4xl font-serif font-bold">List Your Property</h1>
          <p className="text-white/40 text-sm mt-2">
            Complete the steps below to publish your listing.
          </p>
        </div>

        {/* ── Step Indicator ── */}
        <StepIndicator current={step} total={totalSteps} />

        {/* ── White Card ── */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          {/* ════ STEP 1 — Property Details ════ */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-white text-lg font-bold mb-2">Property Details</h2>

              {/* Property Type */}
              <div>
                <label className="text-white/60 text-xs font-medium mb-3 block">Property Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {propertyTypes.map((t) => (
                    <button
                      key={t.label}
                      onClick={() => update("type", t.label)}
                      className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all duration-200 ${
                        form.type === t.label
                          ? "bg-[#4ade80]/10 border-[#4ade80] text-[#4ade80]"
                          : "bg-white/5 border-white/10 text-white/40 hover:border-white/30"
                      }`}
                    >
                      {t.icon}
                      <span className="text-xs font-medium">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Input
                label="Property Title"
                placeholder="e.g. Elegant 4 Bedroom Villa in Bahria Town"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
              />

              <Textarea
                label="Description"
                placeholder="Describe your property — features, neighbourhood, nearby amenities..."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />

              {/* City Dropdown */}
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">City</label>
                <select
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4ade80]/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-[#113529]">Select City</option>
                  {cities.map((c) => (
                    <option key={c} value={c} className="bg-[#113529]">{c}</option>
                  ))}
                </select>
              </div>

              <Input
                label="Full Address"
                placeholder="e.g. Street 5, Block B, Bahria Town"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </div>
          )}

          {/* ════ STEP 2 — Property Features ════ */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-white text-lg font-bold mb-2">Property Features</h2>

              {/* Beds Baths Cars Area */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { field: "beds",  label: "Bedrooms",  icon: <IoBedOutline size={16} />, placeholder: "e.g. 4" },
                  { field: "baths", label: "Bathrooms", icon: <TbBath size={16} />,       placeholder: "e.g. 3" },
                  { field: "cars",  label: "Car Spaces", icon: <IoCarOutline size={16} />, placeholder: "e.g. 2" },
                  { field: "area",  label: "Area (m²)",  icon: <TbRuler size={16} />,      placeholder: "e.g. 320" },
                ].map((f) => (
                  <div key={f.field}>
                    <label className="text-white/60 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                      <span className="text-[#4ade80]">{f.icon}</span> {f.label}
                    </label>
                    <input
                      type="number"
                      placeholder={f.placeholder}
                      value={form[f.field]}
                      onChange={(e) => update(f.field, e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#4ade80]/50 transition-colors"
                    />
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                <label className="text-white/60 text-xs font-medium mb-3 block">Amenities</label>
                <div className="grid grid-cols-3 gap-2">
                  {amenitiesList.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleAmenity(item)}
                      className={`text-xs px-3 py-2 rounded-xl border transition-all duration-200 text-left ${
                        form.amenities.includes(item)
                          ? "bg-[#4ade80]/10 border-[#4ade80] text-[#4ade80]"
                          : "bg-white/5 border-white/10 text-white/40 hover:border-white/30"
                      }`}
                    >
                      {form.amenities.includes(item) ? "✓ " : ""}{item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ STEP 3 — Media Upload ════ */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-white text-lg font-bold mb-2">Upload Photos</h2>

              {/* Upload Box */}
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-white/15 rounded-2xl py-14 cursor-pointer hover:border-[#4ade80]/40 hover:bg-white/5 transition-all">
                <TbUpload size={32} className="text-white/30 mb-3" />
                <p className="text-white/50 text-sm font-medium">Click to upload images</p>
                <p className="text-white/25 text-xs mt-1">JPG, PNG, WEBP — max 10MB each</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => update("images", Array.from(e.target.files))}
                />
              </label>

              {/* Preview */}
              {form.images.length > 0 && (
                <div>
                  <p className="text-white/40 text-xs mb-3">{form.images.length} image(s) selected</p>
                  <div className="grid grid-cols-4 gap-2">
                    {form.images.map((file, i) => (
                      <div key={i} className="h-20 rounded-xl overflow-hidden bg-white/5">
                        <img
                          src={URL.createObjectURL(file)}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ════ STEP 4 — Pricing ════ */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-white text-lg font-bold mb-2">Pricing</h2>

              <Input
                label="Asking Price (PKR)"
                placeholder="e.g. 25000000"
                type="number"
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
              />

              {/* Negotiable Toggle */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <div>
                  <p className="text-white text-sm font-medium">Price Negotiable?</p>
                  <p className="text-white/40 text-xs mt-0.5">Buyers can make an offer</p>
                </div>
                <button
                  onClick={() => update("negotiable", !form.negotiable)}
                  className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${
                    form.negotiable ? "bg-[#4ade80]" : "bg-white/10"
                  }`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                    form.negotiable ? "translate-x-6" : "translate-x-0"
                  }`} />
                </button>
              </div>
            </div>
          )}

          {/* ════ STEP 5 — Review & Submit ════ */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-white text-lg font-bold mb-2">Review & Confirm</h2>

              {/* Review rows */}
              {[
                { label: "Type",        value: form.type      },
                { label: "Title",       value: form.title     },
                { label: "City",        value: form.city      },
                { label: "Address",     value: form.address   },
                { label: "Bedrooms",    value: form.beds      },
                { label: "Bathrooms",   value: form.baths     },
                { label: "Car Spaces",  value: form.cars      },
                { label: "Area",        value: form.area ? `${form.area} m²` : "" },
                { label: "Price",       value: form.price ? `PKR ${Number(form.price).toLocaleString()}` : "" },
                { label: "Negotiable",  value: form.negotiable ? "Yes" : "No" },
                { label: "Photos",      value: form.images.length > 0 ? `${form.images.length} uploaded` : "None" },
              ].map((row) => (
                <div key={row.label} className="flex items-start justify-between border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">{row.label}</span>
                  <span className="text-white text-sm font-medium text-right max-w-xs">
                    {row.value || <span className="text-white/20 italic">Not filled</span>}
                  </span>
                </div>
              ))}

              {/* Amenities */}
              {form.amenities.length > 0 && (
                <div>
                  <p className="text-white/40 text-sm mb-2">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {form.amenities.map((a) => (
                      <span key={a} className="bg-[#4ade80]/10 text-[#4ade80] text-xs px-3 py-1 rounded-full border border-[#4ade80]/30">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {form.description && (
                <div>
                  <p className="text-white/40 text-sm mb-1">Description</p>
                  <p className="text-white/70 text-sm leading-relaxed">{form.description}</p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* ── Navigation Buttons ── */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="flex items-center gap-2 text-white/40 hover:text-white text-sm disabled:opacity-20 transition-colors"
          >
            <IoIosArrowBack size={16} /> Previous
          </button>

          {step < totalSteps - 1 ? (
            <button
              onClick={() => setStep((prev) => prev + 1)}
              className="flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#0a2018] text-sm font-bold px-7 py-3 rounded-full transition-all"
            >
              Next Step <IoIosArrowForward size={15} />
            </button>
          ) : (
            <button className="flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-[#0a2018] text-sm font-bold px-7 py-3 rounded-full transition-all">
              <MdVerified size={16} /> Submit Listing
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default ListProperty;