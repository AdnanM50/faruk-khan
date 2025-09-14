import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Kpi = {
  value: string;
  label: string;
  description: string;
};

type CaseStudy = {
  company: string;
  website: string;
  logo: string;
  totalCases: number;
  intro: string;
  kpis: Kpi[];
  slides: Array<{
    challenge: string;
    solution: string;
  }>;
};

const data: CaseStudy = {
  company: "Max Secure",
  website: "maxsecureit.com",
  logo: "/clientlogo.png",
  totalCases: 1,
  intro:
    "Within six months, Client Y saw significant improvements in organic traffic and conversions:",
  kpis: [
    {
      value: "Top 3",
      label: "Search Engine\nRankings",
      description:
        "The site achieved top 3 ranking for high-value keywords through on-page optimization, UX, and holistic content-led training.",
    },
    {
      value: "180%",
      label: "Increase in Organic\nTraffic",
      description:
        "A targeted SEO strategy resulted in a 180% increase in organic traffic, with landing pages converting more frequently.",
    },
    {
      value: "50%",
      label: "Boost in\nConversion Rate",
      description:
        "Optimized content and improved user experience generated a 50% increase in conversions for course enrollments.",
    },
    {
      value: "60%",
      label: "Increased\nRevenue",
      description:
        "Overall revenue grew by 60% within 6 months, with the majority of new students coming through organic search.",
    },
  ],
  slides: [
    {
      challenge:
        "Client Y, a USA–based WordPress site offering online fitness programs, was struggling to gain organic visibility for key search terms like 'online fitness training' and 'personalized workout plans'. Their reliance on paid ads was not sustainable, the website had high bounce rates and low conversion rates. Despite offering valuable programs, their content wasn’t ranking well, and users were not staying engaged.",
      solution:
        "To tackle Client Y’s SEO challenges, I conducted a detailed SEO audit that revealed several on–page and technical issues. I optimized key landing pages and blog posts by revising meta titles, descriptions, and image alt text with relevant keywords like 'online fitness training' and 'custom workout plans'. I also improved the site’s structure by organizing content into clear categories, implemented internal linking, and focused on boosting mobile site speed. Finally, a long–tail keyword content strategy was rolled out, targeting queries related to fitness tips, workouts, and personalized plans.",
    },
    {
      challenge:
        "A seasonal traffic dip coincided with reduced engagement across top content hubs, impacting lead volume and newsletter sign–ups.",
      solution:
        "We refreshed cornerstone content with updated data, added FAQ schema, and launched topic clusters around user intent. Site speed improved via image compression and lazy loading, lifting Core Web Vitals into the green.",
    },
    {
      challenge:
        "Competitive SERPs for head terms limited discoverability for new audiences and constrained course sales.",
      solution:
        "We pivoted to long–tail, problem–aware topics, built internal link bridges from high–authority posts, and secured niche editorial backlinks to accelerate discovery.",
    },
  ],
};

const MetricCard: React.FC<Kpi> = ({ value, label, description }) => {
  const isHighlight = value === "180%";
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-8 flex flex-col items-center text-white min-h-[260px] sm:min-h-[320px]">
      <div className="flex flex-col items-center w-full">
        {isHighlight ? (
          <div className="w-full flex justify-center">
            <span className=" font-bold text-[36px] sm:text-[44px] lg:text-[54px] leading-none px-4 py-1.5 sm:px-6 sm:py-2 rounded-t-md" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>{value}</span>
          </div>
        ) : (
          <span className="text-white font-bold text-[36px] sm:text-[44px] lg:text-[54px] leading-none" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>{value}</span>
        )}
        <span className={`mt-2 sm:mt-3 text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-tight text-center`} style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>
          {label.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}{i !== label.split('\n').length - 1 && <br />}</React.Fragment>
          ))}
        </span>
        <div className="w-full border-t border-[#2A2A2A] my-4 sm:my-6"></div>
        <p className="text-[#CFC7C7] text-[13px] sm:text-[15px] lg:text-[16px] leading-[1.6] text-left font-normal" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>{description}</p>
      </div>
    </div>
  );
};

const ServiceCases: React.FC = () => {
  return (
    <section className="w-full playfair-font py-14 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-[10px] tracking-[0.25em] text-[#BFA6A6] mb-2">CASE STUDIES</div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-8">
          SEO Case Studies: Real Success Stories
        </h2>

        <div className="w-full rounded-2xl border border-[#2A2A2A] bg-[#121212] p-5 md:p-6 mb-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={data.logo} alt={data.company} className="w-10 md:w-[76px] h-10 md:h-[76px] rounded-xl object-contain bg-[#0F0F0F]" />
              <div className="flex flex-col">
                <span className="text-white text-sm font-medium">{data.company}</span>
                <a href={`https://${data.website}`} className="text-[11px] text-[#A7A1A1]" target="_blank" rel="noreferrer">
                  {data.website}
                </a>
              </div>
            </div>
            <div className="flex  items-center justify-center min-w-[70px]">
              <span className="text-white text-6xl font-semibold leading-none">{data.totalCases}</span>
              <span className="text-white text-lg font-normal leading-tight" style={{marginTop: 2, lineHeight: 1.1}}>Case<br/>Studies</span>
            </div>
          </div>

          <p className="text-[12px] md:text-sm text-[#CFC7C7] mt-4">{data.intro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {data.kpis.map((kpi, idx) => (
              <MetricCard key={idx} {...kpi} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".service-cases-pagination" }}
            spaceBetween={24}
            slidesPerView={1}
            autoHeight
            className="w-full"
          >
            {data.slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#121212] p-6">
                    <h3 className="text-white font-medium mb-2">Challenge:</h3>
                    <p className="text-sm text-[#CFC7C7] leading-relaxed">{s.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-[#2A2A2A] bg-[#121212] p-6">
                    <h3 className="text-white font-medium mb-2">Solution:</h3>
                    <p className="text-sm text-[#CFC7C7] leading-relaxed">{s.solution}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="service-cases-pagination pagination-style flex justify-center mt-4 md:mt-6 mb-2"></div>
        </div>

        <div className="flex justify-center">
          <button className="mt-8 px-6 py-3 border border-[#2A2A2A] text-white rounded-lg hover:bg-[#1b1b1b] transition">
            Claim Your Growth
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCases;


