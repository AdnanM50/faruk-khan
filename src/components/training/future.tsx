import React from "react";


// Feature cards data
const features = [
  {
    icon: "/icons/slider-horizontal.png",
    title: "Real-World Case Studies",
    desc: "Unlike other courses focusing solely on textbook strategies, I incorporate real-world case studies. This means students gain insights from actual SEO campaigns, understanding the successes and pitfalls and how to avoid them.",
    alt: "Case Studies Icon"
  },
  {
    icon: "/icons/3d-rotate.png",
    title: "Continuous Updates",
    desc: "SEO isn’t static. What worked a few years ago might be irrelevant today. My course constantly evolves, reflecting the latest best practices, algorithm changes, and industry shifts.",
    alt: "Continuous Updates Icon"
  },
  {
    icon: "/icons/user-search.png",
    title: "Personalized Mentorship",
    desc: "As an educator, I pride myself on delivering content and truly mentoring my students. I ensure that doubts are cleared, concepts are solidified, and every student feels empowered to apply their knowledge in the real world.",
    alt: "Mentorship Icon"
  },
];
const FutureExperts = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#121212] text-center mb-2 mt-2 leading-[48px]">
        Empowering Future Experts Since 2015
      </h2>
      <p className="text-center text-[16px] font-normal text-[#555555] max-w-3xl mb-8 leading-[26px]">
        In the dynamic world of search engine optimization, experience and adaptability are paramount.<br />
        With a robust decade of navigating the ever-changing landscapes of SEO.
      </p>
      {/* Image Collage - Figma Flex Layout */}
  <div className="w-full flex flex-col items-center mb-10 md:gap-6 gap-2">
        {/* Top row */}
  <div className="flex flex-row w-full md:gap-6 gap-2">
          <div style={{width: 302, maxHeight: 414}} className="rounded-2xl overflow-hidden">
            <img src="/Frame71.png" alt="SEO Training 1" className="object-fill w-full h-full rounded-2xl" style={{objectPosition:'center', maxHeight: 414}} />
          </div>
          <div style={{width: 736, maxHeight: 414}} className="rounded-2xl overflow-hidden">
            <img src="/IMG_8703.png" alt="SEO Training 2" className="object-fill w-full h-full rounded-2xl" style={{objectPosition:'center', maxHeight: 414}} />
          </div>
        </div>
        {/* Middle row */}
  <div className="flex flex-row w-full md:gap-6 gap-2">
          <div style={{width: 736, maxHeight: 414}} className="rounded-2xl overflow-hidden">
            <img src="/md-faruk-khan.png" alt="SEO Training 3" className="object-fill w-full h-full rounded-2xl" style={{objectPosition:'center', maxHeight: 414}} />
          </div>
          <div style={{width: 302, maxHeight: 414}} className="rounded-2xl overflow-hidden">
            <img src="/public/IMG_7413.png" alt="SEO Training 4" className="object-fill w-full h-full rounded-2xl" style={{objectPosition:'center', maxHeight: 414}} />
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex w-full" style={{ maxHeight: 455}}>
          <div className="rounded-2xl overflow-hidden w-full h-full">
            <img src="/expert.png" alt="SEO Training Group" className="object-cover w-full h-full rounded-2xl" style={{objectPosition:'center', maxHeight: 455}} />
          </div>
        </div>
      </div>
       <h3 className="text-[32px] md:text-[40px] font-bold text-[#121212] text-center mb-2 mt-2 leading-[48px]">
        A Decade of Expertise: Why My SEO Course Stands Out
      </h3>
      <p className="text-center text-[16px] font-normal text-[#555555] max-w-3xl mb-8 leading-[26px]">
        In the dynamic world of search engine optimization, experience and adaptability are paramount. With about decade of navigating the ever-changing landscape of SEO, I have gained an unparalleled wealth of real-world experience. I also realized that the knowledge of what truly works in SEO isn’t theory—it’s a practical, hands-on training that I’ve refined over the years to ensure my students can tackle real-world SEO challenges.
      </p>
    
      {/* Feature Cards Section - Responsive Grid */}
      <div className="w-full flex flex-col items-center mb-14">
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start bg-white rounded-2xl px-4 py-8 md:px-6 md:py-[60px] w-full min-h-[182px] border border-[#F2F2F2] "
            >
              <img src={feature.icon} alt={feature.alt} className="w-10 h-10 mb-2" />
              <h4 className="font-semibold text-lg md:text-xl mb-1 text-[#333]">{feature.title}</h4>
              <p className="text-[#555] text-base md:text-[16px] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
     

    </section>
  );
};

export default FutureExperts;
