import React from "react";

const features = [
  "Successfully trained 7000+ students.",
  "SEO mentor at 10 Minute School.",
  "SEO trainer at BITM.",
  "Adjunct faculty at United International University.",
  "Course Co-ordinator at Bangladesh Technical Education Board (BTEB).",
  "Govt. certified Digital Marketer."
];

const SeoHero = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-8 lg:px-0 py-10 md:py-20 bg-white">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl  p-6 md:p-8 bg-white flex flex-col h-full">
        <span className="text-xs font-medium text-neutral-500 mb-2 tracking-wide">SEO TRAINING</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-4">
          Top–Rated SEO Training<br className="hidden md:block" />
          in Bangladesh with<br className="hidden md:block" />
          Md Faruk Khan
        </h1>
        <ul className="mb-6 space-y-2">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base md:text-lg text-[#3B3B3B]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mt-1 text-[#3B3B3B]"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 flex-col sm:flex-row">
          <button className="flex-1 px-6 py-3 bg-black text-white font-semibold rounded-lg border border-black hover:bg-neutral-900 transition">All SEO Courses</button>
          <button className="flex-1 px-6 py-3 bg-white text-black font-semibold rounded-lg border border-black hover:bg-neutral-100 transition">Watch Free Tutorials</button>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center min-w-[260px]">
        <img
          src="/Vintage_Film.png"
          alt="Md Faruk Khan at desk"
          className="w-full max-w-[340px] md:max-w-[400px] lg:max-w-[520px] h-auto rounded-3xl object-cover shadow-md"
          style={{ aspectRatio: '520/650' }}
        />
      </div>
    </section>
  );
};

export default SeoHero;
