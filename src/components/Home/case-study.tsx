// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import GaugeChart from './GaugeChart';

const caseStudies = [
  {
    logo: '/clients/walton.png',
    company: 'Walton Hi–Tech PLC',
    description: `Walton group’s remarkable journey to 104% organic growth and 92% ranking on Google’s first page.\n\nSearch engine algorithms and user behavior, enabling me to craft SEO solutions that are not only effective but also sustainable in the long term.`,
    organicGrowth: 104,
    keywordRanking: 84,
    chart: {
      series: [{
        name: 'Organic Growth',
        data: [20, 30, 40, 60, 108],
      }],
      options: {
        chart: {
          type: 'line' as const,
          toolbar: { show: false },
          background: 'transparent',
          sparkline: { enabled: false },
        },
        grid: { show: false },
  stroke: { curve: 'smooth' as const, width: 3 },
        xaxis: {
          categories: ['2018', '2019', '2020', '2021', '2022'],
          labels: { style: { colors: '#BFE6FA', fontSize: '15px', fontWeight: 400 } },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: { show: false },
        markers: { size: 8, colors: ['#BFE6FA'], strokeColors: '#fff', strokeWidth: 3 },
        colors: ['#BFE6FA'],
        tooltip: { enabled: false },
        legend: { show: false },
        dataLabels: { enabled: false },
        annotations: {
          xaxis: [
            {
              x: '2022',
              borderColor: '#BFE6FA',
              strokeDashArray: 6,
              borderWidth: 2
            },
          ],
          points: [
            {
              x: '2022',
              y: 108,
              marker: {
                size: 10,
                fillColor: '#BFE6FA',
                strokeColor: '#fff',
                radius: 2,
              },
              label: {
                borderColor: 'transparent',
                offsetY: -120,
                offsetX: -80,
                style: {
                  color: '#BFE6FA',
                  background: 'rgba(30,40,60,0.7)',
                  fontSize: '32px',
                  fontWeight: 700,
                  borderRadius: 12,
                  padding: { left: 24, right: 24, top: 16, bottom: 16 },
                  lineHeight: 1.1,
                },
                text: '108%\n<span style="font-size:16px;font-weight:400;color:#BFE6FA;">Organic Growth</span>',
                textAnchor: 'start',
              },
              image: {
                path: '',
                width: 0,
                height: 0,
              },
            },
          ],
          // Custom SVG arrow at the end of the curve (2022) can be added with chart events if needed
        },
      },
    },
  },
  // Add more case studies here if needed
];

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full py-16 bg-[#121212] bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-2 text-xs tracking-widest text-[#BFA6A6]">CASE STUDIES</div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-12 max-w-2xl mx-auto">
          SEO Case Studies: Real Success Stories
        </h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
        >
          {caseStudies.map((study, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                {/* Left: Info */}
                <div className="flex flex-col ">
                  <div className="flex items-center mb-4">
                    <img src={'/walton.png'} alt={study.company} className="w-32 h-32 rounded-xl object-contain bg-white p-2 shadow" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{study.company}</h3>
                  <p className="text-[#E2DADA] text-sm mb-4 whitespace-pre-line">{study.description} <a href="#" className="text-[#BFA6A6] underline">Continue Reading</a></p>
                  <div className="flex gap-8 mb-8 md:items-start items-center md:justify-start justify-center">
                    <GaugeChart organicGrowth={study.organicGrowth} keywordRanking={study.keywordRanking} color="#AEE6FA" />
                  </div>
                </div>
                {/* Right: Chart */}
                <div className="flex justify-center items-center">
               
                  <img src="/chart.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
                <div className="flex justify-center items-center">
                    <button className="mt-4 px-8 py-3 mx-auto border text-white rounded-lg font-medium transition">
                    Claim Your Growth
                  </button>
                </div>
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudySection;
