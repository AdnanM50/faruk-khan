import React from "react";
import SectionTitle from "../common/section-tittle";
import { ArrowUpRight } from "lucide-react";

const partners = [
  { name: "10 Minute School", img: "/public/10min.png" },
  { name: "UIU", img: "/public/uiu.png" },
  { name: "Bangladesh Computer Council", img: "/public/bcc.png" },
  { name: "BITM", img: "/public/bitm.png" },
  { name: "Daffodil University", img: "/public/du.png" },
  { name: "BTEB", img: "/public/bb.png" },
  { name: "PencilBox Training Institute", img: "/public/pb.png" },
  { name: "10 Minute School", img: "/public/10min.png" },
  { name: "UIU", img: "/public/uiu.png" },
];


const AboutMeHero = () => (
  <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 md:px-8 py-10 md:py-16 bg-white">
    {/* Left: Image */}
    <div className="flex-1 flex items-center justify-center w-full max-w-lg">
      <img
        src="/public/IMG_7413.png"
        alt="Md Faruk Khan at desk"
        className="w-full max-w-[400px] lg:max-w-[480px] h-auto rounded-3xl object-cover shadow-md"
        style={{ aspectRatio: '1/1.3' }}
      />
    </div>
    {/* Right: Text Content */}
    <div className="flex-1 max-w-2xl flex flex-col h-full">
      <h1 className="font-bold text-neutral-900 mb-4 text-[2rem] md:text-[2.5rem] lg:text-[2.7rem] leading-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.1 }}>
        Top–Rated SEO Training<br className="hidden md:block" />
        in Bangladesh with<br className="hidden md:block" />
        Md Faruk Khan
      </h1>
      <span className="text-xs md:text-sm font-semibold text-neutral-700 mb-2 tracking-wide uppercase">Little bit about me</span>
      <p className="text-[0.97rem] md:text-base lg:text-lg text-[#555] mb-3 leading-relaxed">
        As a seasoned SEO professional, my journey in the digital marketing landscape has been one of continuous evolution and success. With over a decade of experience, I have established myself as a pioneering SEO veteran in Bangladesh, known for my innovative strategies and results-driven approach. At the heart of my philosophy lies a deep understanding of the dynamic nature of search engine algorithms and user behavior, enabling me to craft SEO solutions that are not only effective but also sustainable in the long term.
      </p>
      <p className="text-[0.97rem] md:text-base lg:text-lg text-[#555] mb-6 leading-relaxed">
        With over a decade of experience, I have established myself as a pioneering SEO veteran in Bangladesh, known for my innovative strategies and results-driven approach.
      </p>
      <div>
        <button
          className="px-8 py-3 bg-white text-black font-medium rounded-full border border-neutral-300  flex items-center gap-2 text-lg "
          style={{ minWidth: 0 }}
        >
          <span className="font-medium tracking-tight">Know More About Me</span>
          <ArrowUpRight size={16}  />
        </button>
      </div>
    </div>
  </section>
);

const Partners = () => {
  return (
    <>
      
      <section className="w-full py-12 px-2 md:px-8 bg-white flex flex-col items-center">
        <SectionTitle label="" title="My Educational Partners" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-full max-w-7xl">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-[#F5F7F7] rounded-xl border border-neutral-200 w-full h-[120px] md:w-[236px] md:h-[160px] p-4 md:p-6 transition-shadow hover:shadow-md"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-h-[140px] md:max-h-[140px] object-fill mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
      <AboutMeHero />
    </>
  );
};

export default Partners;
