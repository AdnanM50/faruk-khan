import React from "react";
import SectionTitle from "../common/section-tittle";

const points = [
  {
    title: "Foundation to Freelancing",
    desc: "The world of freelancing is enticing, offering flexibility and the promise of earning money online. However, with the right skills, this dream can be attainable.",
  },
  {
    title: "Tailored for Real-world SEO Jobs",
    desc: "It’s one thing to learn SEO, but quite another to apply it effectively in a job scenario. These tutorials are designed considering the real-world challenges.",
  },
  {
    title: "Monetize Your Skills",
    desc: "With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.",
  },
  {
    title: "Continuous Learning",
    desc: "SEO is a dynamic field. What’s relevant today might be obsolete tomorrow. That’s why I ensure my tutorials are regularly updated.",
  },
];

const SeoProvenResults = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
      <SectionTitle label="PROVEN RESULTS" title="Why My SEO Tutorial Series is a Must–Watch for Aspiring SEO Professionals" />
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 lg:items-stretch">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[380px] md:w-[340px] lg:w-[420px] flex justify-center mx-auto md:mx-0 mb-6 md:mb-0 lg:h-full">
          <div className="rounded-[20px] overflow-hidden shadow-lg w-full  bg-[#111] flex items-center justify-center max-w-[320px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] max-h-[420px] md:max-h-[840px] lg:h-full">
            <img
              src="/IMG_741.png"
              alt="SEO Instructor"
              className="object-cover w-full h-full rounded-[20px] "
              style={{objectPosition:'center'}}
            />
          </div>
        </div>
        {/* Points Section */}
        <div className="flex-1 w-full flex flex-col gap-4 max-w-[320px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-xl mx-auto md:mx-0 lg:h-full justify-center">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] border border-[#E5E5E5] px-4 py-4 xs:px-5 xs:py-5 sm:px-6 sm:py-5 md:px-8 md:py-8 flex flex-col shadow-sm"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-[18px] xs:text-[19px] sm:text-[20px] md:text-[22px] font-bold text-[#222] min-w-[28px] sm:min-w-[32px] leading-[32px] sm:leading-[39px]">{idx + 1}.</span>
                <div>
                  <div className="font-bold text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] text-[#222] mb-1 leading-[28px] sm:leading-[39px]">{point.title}</div>
                  <div className="text-[14px] xs:text-[15px] sm:text-[15px] md:text-[16px] text-[#555] leading-[22px] sm:leading-[26px]">{point.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoProvenResults;
