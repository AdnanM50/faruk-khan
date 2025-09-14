import React from "react";
import SectionTitle from "../common/section-tittle";

const packages = [
  {
    title: "Local SEO",
    price: "$200",
    description: "At the heart of my philosophy lies a deep of the dynamic nature of search",
    features: [
      "Google Business Profile",
      "Citation Building",
      "Content Creation",
      "Local Search Audit",
      "Keyword Research",
      "Identify local keywords",
    ],
  },
  {
    title: "E-commerce SEO",
    price: "$400",
    description: "At the heart of my philosophy lies a deep of the dynamic nature of search",
    features: [
      "Ecommerce keyword research",
      "Link building",
      "Start backlinking",
      "Add schema markup",
      "Site architecture",
      "Image optimization",
      "Technical SEO",
    ],
  },
  {
    title: "SEO Consultancy",
    price: "$600",
    description: "At the heart of my philosophy lies a deep of the dynamic nature of search",
    features: [
      "SEO Audit",
      "Competitor Analysis",
      "Custom Strategy",
      "On-page Optimization",
      "Off-page Optimization",
      "Content Development",
      "Technical Optimization",
    ],
  },
];

const PriceSection = () => (
  <section className="w-full min-h-[80vh] flex flex-col items-center justify-center py-6 px-2 sm:py-12 sm:px-6 bg-white">
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
     
      <SectionTitle label="PRICING" title="Customized SEO Packages for Your Business Growth" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-2">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.title}
            className={`flex flex-col border rounded-[16px] sm:rounded-[20px] bg-white px-4 py-7 sm:px-7 sm:py-10 items-start transition-all duration-200 ${idx === 1 ? 'border-2 border-neutral-900 shadow-xl z-10' : 'border border-neutral-200'} ${idx === 1 ? 'scale-100 sm:scale-100' : ''}`}
            style={{ minHeight: 'auto', height: '100%' }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 mb-1">{pkg.title}</h3>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{pkg.price}</div>
            <p className="text-sm sm:text-[15px] md:text-base text-neutral-600 mb-4 min-h-[40px] max-w-[95%]">{pkg.description}</p>
            <hr className="w-full border-t border-neutral-200 mb-4" />
            <span className="text-sm sm:text-[15px] md:text-base font-semibold text-neutral-900 mb-2 mt-1">This Plan Includes</span>
            <ul className="mb-6 sm:mb-7 w-full flex flex-col gap-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-neutral-800 text-sm sm:text-[15px] md:text-base font-normal">
                  <span className="mr-2 text-base sm:text-lg md:text-xl text-neutral-900 font-normal">+</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base border transition-all duration-200 ${idx === 1 ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800' : 'bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-100'}`}
            >
              Pick This Package
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PriceSection;
