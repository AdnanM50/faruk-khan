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

  // Function to render stars with half-star support using Lucide icons
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className="text-yellow-500 fill-yellow-500 text-xl"
          />
        ))}
        {hasHalfStar && (
          <StarHalf className="text-yellow-500 fill-yellow-500 text-xl" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutline
            key={`empty-${i}`}
            className="text-yellow-500 text-xl"
          />
        ))}
      </>
    );
  };

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
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[30%]">
          <img
            src="/clogo.png"
            alt="logo"
            className="w-[120px]"
          />
          <p className="text-2xl font-semibold">
            {rating}/5 <span className="text-gray-500">Rating</span>
          </p>
          <div className="flex gap-1">{renderStars(rating)}</div>
          <p className="text-gray-500 text-sm">
            powered by{" "}
            <span className="text-blue-500 font-semibold">Google</span>
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
              Review Us
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded-lg text-sm">
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
          {/* Left gradient overlay */}
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
                  className="min-w-[280px] max-w-[280px] bg-white shadow-md rounded-xl p-4 border border-gray-100"
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
                  className="min-w-[280px] max-w-[280px] bg-white shadow-md rounded-xl p-4 border border-gray-100"
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
