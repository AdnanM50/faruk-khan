import React, { useState } from "react";
import SectionTitle from "../common/section-tittle";
import Button from "../common/button";

const faqs = [
  {
    q: "What is the minimum project length for your WordPress SEO services?",
    a: "I only take on full SEO projects with a minimum project length of 6 months. This ensures that we have enough time to make significant progress and see long-term results."
  },
  {
    q: "Can I hire you for a single service, like link building or keyword research?",
    a: ""
  },
  {
    q: "Do you guarantee a specific ranking position on Google?",
    a: ""
  },
  {
    q: "What happens if my WordPress site doesn't reach the first page of Google?",
    a: ""
  },
  {
    q: "What services are included in your WordPress SEO package?",
    a: ""
  },
  {
    q: "How long does it take to see results from WordPress SEO?",
    a: ""
  },
  {
    q: "What kind of reports will I receive during the project?",
    a: ""
  },
  {
    q: "Why do you focus on a 6–month minimum for WordPress SEO services?",
    a: ""
  },
  {
    q: "How do I get started with your WordPress SEO expert services?",
    a: ""
  },
];

const ServiceFaqSection = () => {
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

export default ServiceFaqSection;
