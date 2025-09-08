import React from 'react';

const provenResults = [
  {
    title: '10+ Years of SEO Experience',
    desc: `Since 2014, I've worked with countless brands across various industries to help them dominate search engine rankings. My extensive experience ensures that I deliver real measurable results.`,
  },
  {
    title: 'WordPress–Specific Expertise',
    desc: `I know WordPress inside and out. Whether you’re using the classic editor, Gutenberg, or advanced SEO plugins like Yoast understand how to optimize WordPress for search engines.`,
  },
  {
    title: 'Results–Driven Focus',
    desc: `I prioritize ROI by focusing on the rankings that drive conversions, not just traffic. Every action I take is data-driven to ensure that you’re seeing continuous improvement.`,
  },
  {
    title: 'Global Reach',
    desc: `While I’ve worked with clients all over the world, my SEO strategies are designed to thrive in highly competitive first-tier markets like the USA, UK, and Australia.`,
  },
];

const ServiceProven = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest text-[#333333] mb-2">PROVEN RESULTS</div>
          <h2 className="text-2xl md:text-4xl font-bold text-black">Why Choose Me as Your WordPress SEO Expert?</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 rounded-2xl overflow-hidden w-full max-w-[340px] md:max-w-[350px] lg:max-w-[370px] aspect-[3/4] bg-black">
            <img
              src="/IMG_7413.png"
              alt="WordPress SEO Expert"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 w-full">
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 shadow-sm min-h-[170px] flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-black">10+ Years of SEO Experience</h3>
                <p className="text-sm text-[#555555]">Since 2014, I've worked with countless brands across various industries to help them dominate search engine rankings. My extensive experience ensures that I deliver real measurable results.</p>
              </div>
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 shadow-sm min-h-[170px] flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-black">WordPress–Specific Expertise</h3>
                <p className="text-sm text-[#555555]">I know WordPress inside and out. Whether you’re using the classic editor, Gutenberg, or advanced SEO plugins like Yoast understand how to optimize WordPress for search engines.</p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 shadow-sm min-h-[170px] flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-black">Results–Driven Focus</h3>
                <p className="text-sm text-[#555555]">I prioritize ROI by focusing on the rankings that drive conversions, not just traffic. Every action I take is data-driven to ensure that you’re seeing continuous improvement.</p>
              </div>
              <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 shadow-sm min-h-[170px] flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2 text-black">Global Reach</h3>
                <p className="text-sm text-[#555555]">While I’ve worked with clients all over the world, my SEO strategies are designed to thrive in highly competitive first-tier markets like the USA, UK, and Australia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProven;
