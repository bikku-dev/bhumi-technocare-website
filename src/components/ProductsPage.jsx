import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  Laptop, 
  Printer, 
  Video, 
  Network, 
  PhoneCall, 
  Cpu, 
  CheckCircle2, 
  Check, 
  SlidersHorizontal,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { PRODUCTS_AND_SOLUTIONS, BUSINESS_INFO } from '../data/websiteData';

export default function ProductsPage({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [selectedOptions, setSelectedOptions] = useState({});

  const getCategoryIcon = (id) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (id) {
      case 'computers-laptops': return <Laptop {...iconProps} />;
      case 'printer-solutions': return <Printer {...iconProps} />;
      case 'cctv-security': return <Video {...iconProps} />;
      case 'networking-connectivity': return <Network {...iconProps} />;
      case 'communication-display': return <PhoneCall {...iconProps} />;
      case 'it-software-solutions': return <Cpu {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  const handleSelectOption = (categoryId, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === option ? null : option
    }));
  };

  const filteredCategories = PRODUCTS_AND_SOLUTIONS.filter((cat) => {
    const matchesFilter = activeCategoryFilter === 'all' || cat.id === activeCategoryFilter;
    if (!matchesFilter) return false;

    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    const matchTitle = cat.title.toLowerCase().includes(term);
    const matchTagline = cat.tagline.toLowerCase().includes(term);
    const matchDesc = cat.description.toLowerCase().includes(term);
    const matchItems = cat.itemsIncluded.some(item => item.toLowerCase().includes(term));
    const matchOptions = cat.serviceOptions.some(opt => opt.toLowerCase().includes(term));

    return matchTitle || matchTagline || matchDesc || matchItems || matchOptions;
  });

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-slate-50/60 dark:bg-slate-950 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kim • Ankleshwar • Bharuch</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Integrated Hardware & Services
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Products & Solutions
          </h1>
          <p className="mt-2 text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Organized into 6 compact divisions combining equipment sales, certified spares, chip-level repair, on-site setup, and rental options.
          </p>

          {/* Search Bar */}
          <div className="mt-5 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products, services, or equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-2xs"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategoryFilter === 'all'
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500'
              }`}
            >
              All Categories (6)
            </button>
            {PRODUCTS_AND_SOLUTIONS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500'
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Combined Product & Solution Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category) => {
            const selectedOpt = selectedOptions[category.id];
            
            const messageBody = selectedOpt 
              ? `${category.whatsappPrompt} - Option: "${selectedOpt}". Please share details and pricing.`
              : `${category.whatsappPrompt}. Please share availability and service options.`;
            
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;

            return (
              <div
                key={category.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Image Header */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    
                    {/* Top Overlay Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                        {getCategoryIcon(category.id)}
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-slate-900/85 text-white backdrop-blur-md">
                        {category.shortTitle}
                      </span>
                    </div>

                    {category.clientImage && (
                      <div className="absolute bottom-3 right-3 bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm shadow-xs">
                        Client Verified Image
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                        {category.tagline}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {category.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Products / Hardware Included */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                        <span>Hardware & Products Included</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {category.itemsIncluded.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service & Enquiry Options (Interactive Selection) */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                          Select Enquiry Requirement:
                        </h3>
                        {selectedOpt && (
                          <button
                            onClick={() => handleSelectOption(category.id, selectedOpt)}
                            className="text-[11px] text-slate-500 dark:text-slate-400 hover:text-rose-500 underline cursor-pointer"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {category.serviceOptions.map((opt, idx) => {
                          const isSelected = selectedOpt === opt;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectOption(category.id, opt)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-emerald-600 text-white font-semibold shadow-xs ring-1 ring-emerald-600'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-700/70'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 italic">
                        {selectedOpt 
                          ? `Selected requirement: "${selectedOpt}". Click below to enquire.` 
                          : "Tap any option above to customize your WhatsApp message, or enquire directly."}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>
                      {selectedOpt ? `Enquire about ${selectedOpt}` : `Enquire Now on WhatsApp`}
                    </span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto space-y-1">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            BHUMI TECHNOCARE Business Notice
          </p>
          <p>
            Hardware supply, rental terms, and service diagnostics are provided based on direct customer requirements. No unsupported prices or certifications are listed.
          </p>
        </div>

      </div>
    </div>
  );
}
