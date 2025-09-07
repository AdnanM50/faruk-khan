import React, { useState } from "react";
import SectionTitle from "../common/section-tittle";
import Button from "../common/button";

const faqs = [
  {
    q: "What is Organic SEO?",
    a: `Organic SEO refers to the organic SEO strategies and methods used to get your website higher rankings on search engines like Google, Yahoo, and Bing. This indicates that your business website will get free traffic coming from the search engines. Paid advertising using Google Ads can be much EXPENSIVE. And, very few portions of the internet users click on them, whereas around 70–80% of the internet users click on the organic search results.`
  },
  {
    q: "How much does it cost to hire an SEO expert bd?",
    a: "The cost to hire an SEO expert in Bangladesh varies based on the scope of work, experience, and project requirements. On average, monthly packages can range from $100 to $1000 or more, depending on the complexity and goals."
  },
  {
    q: "Can SEO guarantee a top ranking in search engine results?",
    a: "No ethical SEO expert can guarantee a #1 ranking, as search engine algorithms are complex and constantly changing. However, effective SEO strategies can significantly improve your website's visibility and ranking over time."
  },
  {
    q: "Who is Md Faruk Khan?",
    a: "Md Faruk Khan is a seasoned SEO mentor, consultant, and course coordinator with years of experience helping businesses and students achieve success in digital marketing and search engine optimization."
  },
  {
    q: "What is SEO?",
    a: "SEO stands for Search Engine Optimization. It is the process of optimizing your website and content to improve its visibility in search engine results, driving more organic (unpaid) traffic to your site."
  },
  {
    q: "How long does SEO take?",
    a: "SEO is a long-term strategy. Noticeable improvements can often be seen within 3-6 months, but achieving and maintaining top rankings requires ongoing effort and adaptation."
  },
  {
    q: "Who is the Best SEO expert in Bangladesh?",
    a: "Bangladesh has many talented SEO professionals. The best expert for you depends on your specific needs, industry, and project goals. Always review credentials, experience, and client feedback before hiring."
  },
  {
    q: "Who is the SEO expert in Bangladesh?",
    a: "There are several recognized SEO experts in Bangladesh, each with their own specialties and achievements. Research and connect with professionals who align with your business objectives."
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full min-h-[100vh] inter-font flex flex-col items-center justify-center bg-[#F5F7F7] py-20 px-2 sm:px-6 relative">
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        <SectionTitle label="FAQs" title="Frequently Asked Questions" />
        <div className="w-full flex flex-col gap-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="bg-[#F5F7F7] bg-opacity-80 rounded-xl border border-neutral-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5  text-left focus:outline-none"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base py-5 text-[#0C1115]">{item?.q}</span>
                  <span className="ml-2 text-neutral-700">{isOpen ? (
                    <svg width="20" height="20" fill="none" className="border-2 rounded-full " viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
                  ) : (
                    <svg width="20" height="20" fill="none" className="border-2 rounded-full " viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" stroke="#222" strokeWidth="2" strokeLinecap="round"/><line x1="5" y1="12" x2="19" y2="12" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
                  )}</span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out px-5 ${isOpen && item.a ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'} text-sm text-neutral-700 leading-relaxed`}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  {isOpen && item.a && (
                    <div className="text-[#464646] text-base">{item.a}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <Button className="mt-10 px-6 py-3 rounded-lg bg-neutral-900 text-white font-semibold text-base hover:bg-neutral-800 transition-all">
          Still have any Question?
        </Button>
      </div>
    </section>
  );
};

export default FaqSection;
