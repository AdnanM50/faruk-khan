import React from "react";

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
  <section className="w-full min-h-[80vh] flex flex-col items-center justify-center  py-10 px-2 sm:px-6 relative">
    {/* Background stripes */}
    
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
      <span className="text-xs font-medium text-neutral-700 mb-2 mt-2 tracking-widest">PRICING</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#222] mb-6">
        Customized SEO Packages for Your Business Growth
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.title}
            className={`flex flex-col border rounded-[32px] bg-white bg-opacity-80 shadow-sm px-6 py-8 items-center ${idx === 1 ? 'border-2 border-neutral-800 shadow-lg' : 'border border-neutral-200'}`}
          >
            <h3 className="text-lg font-bold text-neutral-900 mb-1">{pkg.title}</h3>
            <div className="text-3xl font-bold text-neutral-900 mb-2">{pkg.price}</div>
            <p className="text-sm text-neutral-700 text-center mb-4 min-h-[40px]">{pkg.description}</p>
            <span className="text-sm font-semibold text-neutral-800 mb-2">This Plan Includes</span>
            <ul className="mb-6 w-full flex flex-col gap-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start text-neutral-700 text-sm">
                  <span className="mr-2 text-lg text-neutral-800">+</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-semibold text-base transition-all ${idx === 1 ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}`}
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
