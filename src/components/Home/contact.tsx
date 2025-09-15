import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { CircularProgress } from '../contact/CircularProgress';
import Contactform from './contactform';
import SectionTitle from '../common/section-tittle';

// ✅ New SemiCircularProgress component
type SemiCircularProgressProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
};

const SemiCircularProgress = ({
  percentage,
  size = 160,
  strokeWidth = 14,
  color = "#222",
  backgroundColor = "#E5E7EB",
}: SemiCircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half circle
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size / 2}
      viewBox={`0 0 ${size} ${size / 2}`}
      className="overflow-visible"
    >
      {/* Background */}
      <path
        d={`
          M ${strokeWidth / 2} ${size / 2}
          A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
        `}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Progress */}
      <path
        d={`
          M ${strokeWidth / 2} ${size / 2}
          A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
        `}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

function Contact() {
  const [mainScorePercent, setMainScorePercent] = useState(75);
  const [growthPercent, setGrowthPercent] = useState(0);
  const [performancePercent, setPerformancePercent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setGrowthPercent(52);
      setPerformancePercent(55);
    }, 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <SectionTitle
            label="Get Advise"
            title="Grow organic traffic with our complete and SEO tools & workflow"
          />
        </div>
        <div className="flex  xl:flex-row flex-col-reverse gap-10 items-center xl:items-start">
          {/* Left Side - Form */}
          <div className="w-full xl:mt-0 mt-0 sm:mt-10 xl:w-2/5 space-y-4 mx-auto max-w-md md:max-w-lg">
            <Contactform />
          </div>

          {/* Right Side - SEO Checker */}
          <div className="w-full xl:w-3/5 relative lg:min-h-[520px]">
            {/* First Div - On Page SEO Checker */}
            <div className="bg-white rounded-2xl shadow-lg p-7 border border-gray-100 lg:absolute w-full lg:h-[470px] lg:top-0 lg:left-0 flex flex-col">
              <h2 className="text-[22px] font-semibold text-gray-900 mb-6">
                On Page SEO Checker
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                {/* Left: Big circle + semi circle */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-8 items-center min-w-[170px]">
                  {/* Big Circle */}
                  <div className="mb-2">
                    <CircularProgress
                      percentage={80}
                      size={152}
                      strokeWidth={18}
                      color="#222"
                      backgroundColor="#E5E7EB"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-[2.2rem] font-bold text-gray-900 leading-none">
                          640
                        </span>
                        <span className="text-[15px] text-gray-500 font-medium mt-1">
                          for 28 Pages
                        </span>
                      </div>
                    </CircularProgress>
                  </div>

                  {/* Semi Circle - Organic Growth */}
                  <div className="relative flex flex-col mb-5 items-center">
                    <div className=" w-full h-full">
                      <SemiCircularProgress
                        percentage={growthPercent}
                        size={148}
                        strokeWidth={18}
                        color="#232323"
                        backgroundColor="#BDBDBD"
                      />
                    </div>
                    <div className="absolute left-0 -top-3 w-full h-full flex flex-col items-center justify-center pointer-events-none translate-y-12">
                      <span className="text-[2rem] font-semibold text-[#232323] leading-none">
                        {growthPercent}%
                      </span>
                      <span className="text-[16px] text-[#232323] font-medium mt-1">
                        Organic Growth
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: SEO ideas grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-900 text-white text-xs font-bold rounded px-2 py-1">
                        St
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        Strategy Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-900 text-white text-xs font-bold rounded px-2 py-1">
                        Te
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        Technical SEO Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-900 text-white text-xs font-bold rounded px-2 py-1">
                        Fi
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        SERP Features Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-900 text-white text-xs font-bold rounded px-2 py-1">
                        Si
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        Semantic Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-900 text-white text-xs font-bold rounded px-2 py-1">
                        Bi
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        Backlinks Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-700 text-white text-xs font-bold rounded px-2 py-1">
                        Ux
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        User Experience Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-700 text-white text-xs font-bold rounded px-2 py-1">
                        Co
                      </span>
                      <span className="text-[15px] text-gray-800 font-medium">
                        Content Ideas
                      </span>
                      <span className="ml-auto text-[15px] text-gray-700 font-semibold">
                        220
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Test Box */}
            <div className="bg-white rounded-2xl shadow-lg px-6 py-5 border border-gray-100 w-full lg:w-[656px] mt-6 lg:mt-0 lg:absolute xl:w-[447px] lg:top-[260px] lg:left-[260px] flex flex-col">
              <h2 className="text-base font-semibold text-gray-900 mb-4">
                Performance Test
              </h2>
              <div className="flex flex-col md:flex-row gap-6 items-start w-full">
                {/* Left Section - Chart and Status Indicators */}
                <div className="flex flex-col items-center w-full md:w-[60%]">
                  {/* Circular Progress Chart */}
                  <div className="mb-4">
                    <CircularProgress
                      percentage={55}
                      size={120}
                      strokeWidth={18}
                      color="#222"
                      backgroundColor="#E5E7EB"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900 leading-none">
                          55%
                        </span>
                      </div>
                    </CircularProgress>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="flex justify-center md:justify-between gap-6 w-full flex-wrap">
                    {[
                      { status: 'Working', count: 43, bgColor: 'bg-gray-700' },
                      { status: 'Warning', count: 43, bgColor: 'bg-gray-700' },
                      { status: 'Error', count: 43, bgColor: 'bg-gray-900' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full ${item.bgColor} flex items-center justify-center`}>
                          <span className="text-xs font-bold text-white">
                            {item.count}
                          </span>
                        </div>
                        <span className="text-xs text-gray-600 mt-1 font-medium">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Section - Content List */}
                <div className="flex-1 flex flex-col gap-4 justify-center mt-4 md:mt-0 w-full">
                  {[
                    'HTML Tags',
                    'Keywords',
                    'Performance',
                    'Desktop',
                    'Mobile',
                    'UI/UX',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gray-900" />
                      <span className="text-[15px] text-gray-800 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
