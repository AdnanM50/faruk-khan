import React from "react";

const institutes = [
  { name: "10 Minute School", logo: "/10min.png" },
  { name: "UIU", logo: "/uiu.png" },
  { name: "Bangladesh Computer Council", logo: "/bcc.png" },
  { name: "BITM", logo: "/bitm.png" },
  { name: "Dhaka University", logo: "/bb.png" },
  { name: "Daffodil University", logo: "/du.png" },
  { name: "ICT Division", logo: "/dd.png" },
  { name: "PencilBox Training", logo: "/pb.png" },
];

const ExpertSection = () => (
  <section className="max-w-7xl mx-auto w-full min-h-[100vh] flex flex-col items-center justify-center py-10 px-2 sm:px-6 relative">
    {/* Background stripes */}
    
    <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto">
      {/* Top Image */}
      <div className="w-full flex justify-center">
        <img
          src="/expert.png"
          alt="Empowering Future Experts"
          className="rounded-xl object-cover w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8 mb-4">Empowering Future Experts Since 2015</h2>
      <p className="text-center text-gray-600   mb-10">
        As a seasoned SEO mentor and course coordinator, I’ve had the privilege of shaping the future of digital marketing through education. This section showcases the prestigious institutes where I contributed my expertise, teaching the next generation of SEO professionals. Each logo represents a partnership built on a commitment to excellence and a passion for empowering students with the skills they need to succeed in the ever-evolving world of search engine optimization.
      </p>
      <div
        className="mt-4 w-full max-w-6xl mx-auto grid grid-cols-4 grid-rows-2 bg-white"
      >
        {institutes.map((inst, idx) => {
          const isLastCol = (idx + 1) % 4 === 0;
          const isLastRow = idx >= 4;
          return (
            <div
              key={idx}
              className={
                `flex items-center justify-center min-h-[180px] bg-white ` +
                `${isLastCol ? '' : 'border-r border-neutral-200 '} ` +
                `${isLastRow ? '' : 'border-b border-neutral-200 '}`
              }
            >
              <img
                src={inst.logo}
                alt={inst.name}
                className="max-h-[140px] max-w-[140px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExpertSection;
