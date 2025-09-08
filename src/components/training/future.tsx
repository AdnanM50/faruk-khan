import React from "react";

const images = [
  ["/public/expert.png", "/public/class1.png", "/public/class2.png"],
  ["/public/class3.png", "/public/IMG_7413.png"],
  ["/public/group1.png"]
];

const FutureExperts = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-2 mt-2">Empowering Future Experts Since 2015</h2>
      <p className="text-center text-base md:text-lg text-[#555] max-w-2xl mb-8">
        In the dynamic world of search engine optimization, experience and adaptability are paramount.<br />
        With about decade of navigating the ever-changing landscape of SEO.
      </p>
      {/* Image Grid - matches screenshot layout */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 auto-rows-[160px] md:auto-rows-[200px]">
        {/* Top row: 2 images */}
        <img src="/public/expert.png" alt="SEO Training 1" className="rounded-2xl object-cover w-full h-full col-span-1 md:col-span-1 row-span-1" style={{objectPosition:'center'}} />
        <img src="/public/class1.png" alt="SEO Training 2" className="rounded-2xl object-cover w-full h-full col-span-1 md:col-span-1 row-span-1" style={{objectPosition:'center'}} />
        <img src="/public/class2.png" alt="SEO Training 3" className="rounded-2xl object-cover w-full h-full col-span-2 md:col-span-2 row-span-1" style={{objectPosition:'center'}} />

        {/* Middle row: 2 images left, 1 right */}
        <img src="/public/class3.png" alt="SEO Training 4" className="rounded-2xl object-cover w-full h-full col-span-2 md:col-span-2 row-span-1" style={{objectPosition:'center'}} />
        <img src="/public/IMG_7413.png" alt="SEO Training 5" className="rounded-2xl object-cover w-full h-full col-span-1 md:col-span-1 row-span-2 md:row-span-2" style={{objectPosition:'center'}} />

        {/* Bottom row: 1 wide group image */}
        <img src="/public/group1.png" alt="SEO Training Group" className="rounded-2xl object-cover w-full h-full col-span-2 md:col-span-4 row-span-1" style={{objectPosition:'center'}} />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-neutral-900 text-center mb-2">A Decade of Expertise: Why My SEO Course Stands Out</h3>
      <p className="text-center text-base md:text-lg text-[#555] max-w-2xl mb-2">
        In the dynamic world of search engine optimization, experience and adaptability are paramount. With about decade of navigating the ever-changing landscape of SEO, I have gained an unparalleled wealth of real-world experience. I also realized that the knowledge of what truly works in SEO isn’t theory—it’s a practical, hands-on training that I’ve refined over the years to ensure my students can tackle real-world SEO challenges.
      </p>
    </section>
  );
};

export default FutureExperts;
