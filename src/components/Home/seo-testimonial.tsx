import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, StarHalf, Star as StarOutline } from "lucide-react";

const testimonials = [
  {
    name: "Jerome Bell",
    company: "statholdings.com",
    text: "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Darrell Steward",
    company: "zencorporation.com",
    text: "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Darlene Robertson",
    company: "statholdings.com",
    text: "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Cody Fisher",
    company: "statholdings.com",
    text: "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function SEOTestimonialSection() {
  const [hoverPause, setHoverPause] = useState(false);

  const rating = 4.92; // Dynamic rating

  // SVGs to match the exact image: 4 full orange stars, 1 half orange star
  const Star = () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FFA726">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
  const HalfStar = () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="halfStarGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="#FFA726" />
          <stop offset="50%" stopColor="#F3F3F3" />
        </linearGradient>
      </defs>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#halfStarGradient)" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="uppercase tracking-wide text-gray-500 text-sm">
          Testimonial
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Empowering Futures through <br /> SEO Excellence
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center">
        {/* Left side */}
        <div
          className="flex flex-col items-center md:items-start gap-4 w-full md:w-[35%] lg:w-[30%] px-2 sm:px-4 lg:px-0"
        >
          <img
            src="/clogo.png"
            alt="logo"
            className="w-[90px] sm:w-[110px] md:w-[120px] lg:w-[120px] lg:mb-1 mb-1 sm:mb-2"
          />
          <div className="flex items-end mb-1 sm:mb-2 lg:mb-1">
            <span className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] font-light text-gray-800 leading-none">4.92/5</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl ml-2 text-gray-700 font-normal">Rating</span>
          </div>
          <div className="flex gap-0.5 sm:gap-1 mt-1 sm:mt-2 lg:gap-1 lg:mt-2">
            <Star /><Star /><Star /><Star /><HalfStar />
          </div>
          <img
            src="/image 2.png"
            alt="Google Reviews Badge"
            className="max-w-[180px] sm:max-w-[220px] md:max-w-[247.75px] lg:max-w-[247.75px] max-h-[28px] sm:max-h-[32px] md:max-h-[34px] lg:max-h-[34px] mt-1 sm:mt-2 lg:mt-2"
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4 lg:mt-4 w-full">
            <button className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-black text-white cursor-pointer rounded-lg text-xs sm:text-sm font-medium w-full sm:w-auto lg:w-auto">
              <img src="/icons/image 3.png" alt="arrow" className="inline-block mr-1 w-4 h-4" />Review Us
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2 border border-gray-400 cursor-pointer rounded-lg font-medium text-black text-xs sm:text-sm w-full sm:w-auto lg:w-auto">
              Read All Review
            </button>
          </div>
        </div>

        {/* Right side - auto scroll animation */}
        <div
          className="w-full md:w-[70%] overflow-hidden relative"
          onMouseEnter={() => setHoverPause(true)}
          onMouseLeave={() => setHoverPause(false)}
        >
          
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.98) 65%, rgba(255,255,255,0.0) 100%)",
            }}
          />

          {/* Two rows */}
          <div className="flex flex-col gap-6">
            {/* First row */}
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{
                animationPlayState: hoverPause ? "paused" : "running",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`row1-${i}`}
                  className="min-w-[280px] max-w-[280px] bg-white  rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-blue-600">{t.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {t.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Second row with offset (checkerboard effect) */}
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{
                animationPlayState: hoverPause ? "paused" : "running",
              }}
            >
              {/* 👇 Add left margin so row starts offset */}
              <div className="min-w-[140px]" />
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={`row2-${i}`}
                  className="min-w-[280px] max-w-[280px] bg-white  rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-blue-600">{t.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {t.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
