import React from "react";

const institutes = [
  { name: "10 Minute School", logo: "/clientlogo.png" },
  { name: "UIU", logo: "/clientlogo.png" },
  { name: "Bangladesh Computer Council", logo: "/clientlogo.png" },
  { name: "BITM", logo: "/clientlogo.png" },
  { name: "Dhaka University", logo: "/clientlogo.png" },
  { name: "Daffodil University", logo: "/clientlogo.png" },
  { name: "ICT Division", logo: "/clientlogo.png" },
  { name: "PencilBox Training", logo: "/clientlogo.png" },
];

const ExpertSection = () => (
  <section className="w-full min-h-[100vh] flex flex-col items-center justify-center py-10 px-2 sm:px-6 relative">
    {/* Background stripes */}
    
    <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
      {/* Top Image */}
      <div className="w-full flex justify-center">
        <img
          src="/expert.png"
          alt="Empowering Future Experts"
          className="rounded-xl shadow-lg object-cover w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Heading */}
      <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#222]">
        Empowering Future Experts Since 2015
      </h2>
      {/* Description */}
      <p className="mt-4 text-center text-base sm:text-lg text-neutral-700 max-w-2xl">
        As a seasoned SEO mentor and course coordinator, I’ve had the privilege of shaping the future of digital marketing through education. This section showcases the prestigious institutes where I contribute my expertise, teaching the next generation of SEO professionals. Each logo represents a partnership built on a commitment to excellence and a passion for empowering students with the skills they need to succeed in the ever-evolving world of search engine optimization.
      </p>
      {/* Logos */}
      <div className="mt-10 grid grid-cols-2  sm:grid-cols-4 gap-x-8 gap-y-8 w-full max-w-3xl items-center justify-center">
        {institutes.map((inst, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={inst.logo}
              alt={inst.name}
              className="h-14 w-auto object-contain mb-2"
              loading="lazy"
              decoding="async"
            />
            <span className="text-xs text-neutral-700 text-center font-medium mt-1 hidden md:block">{inst.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertSection;
