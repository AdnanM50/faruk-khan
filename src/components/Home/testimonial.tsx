"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../common/button";
import SectionTitle from "../common/section-tittle";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Max Secure",
    website: "maxsecureltd.com",
    image: "/video.png",
    logo: "/brands/walton-seo-case.png",
    description:
      "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Walton Hi-Tech PLC",
    website: "waltonbd.com",
    image: "/thumb2.png",
    logo: "/brands/walton-seo-case-study.png",
    description:
      "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
  {
    id: 3,
    name: "Tech Solutions Inc",
    website: "techsolutions.com",
    image: "/video.png",
    logo: "/tech-company-logo-with-circuit-design.jpg",
    description:
      "Achieved remarkable digital transformation with 150% increase in online presence and top search rankings across multiple platforms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
];

// 🎬 Video Thumbnail
const VideoThumb = ({
  poster,
  videoId,
  hasVideo,
}: {
  poster: string;
  videoId: string;
  hasVideo: boolean;
}) => {
  const [playing, setPlaying] = useState(false);

  if (hasVideo && playing) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="relative xl:w-full  w-full aspect-video overflow-hidden rounded-2xl">
      <img
        src={poster}
        alt="testimonial video thumbnail"
        className="w-full h-full object-cover rounded-2xl "
      />
      {hasVideo && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 rounded-2xl transition-colors duration-200"
          aria-label="Play testimonial video"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img src="/icons/play.png" alt="Play" className="w-full h-full ml-1" />
          </div>
        </button>
      )}
    </div>
  );
};

// ⭐ Testimonial Slider
export default function TestimonialSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => swiper?.slidePrev();
  const handleNextSlide = () => swiper?.slideNext();

  return (
    <div className="bg-[#F5F7F7] py-12">
      <section className="max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle label="TESTIMONIAL" title="Real Reviews from Satisfied Customers" />
        </div>

        {/* Slider */}
        <div className="relative flex items-center px-2 lg:px-12 xl:px-0">
       

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1} // default mobile
            loop={true}
            autoplay={{ delay: 1000}}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: { slidesPerView: 1 }, // mobile
              768: { slidesPerView: 1 }, // tablet
              1024: { slidesPerView: 2, spaceBetween: 32 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              1536: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="testimonial-swiper relative w-full xl:px-0 px-4"
          >
            
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-2xl lg:p-3 p-2 flex flex-col overflow-hidden h-full">
                  {/* Video */}
                  <VideoThumb
                    poster={t.image}
                    videoId={t.videoId}
                    hasVideo={t.hasVideo}
                  />

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {t.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Globe className="w-4 h-4 text-blue-500" />
                          <a
                            href={`https://${t.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {t.website}
                          </a>
                        </div>
                      </div>
                      <img
                        src={t.logo || "/placeholder.svg"}
                        alt={`${t.name} logo`}
                        className="w-12 h-12 object-contain shrink-0"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
             <button
            onClick={handlePrevSlide}
            className="absolute -left-6 sm:-left-8 xl:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10  flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Next */}
          <button
            onClick={handleNextSlide}
            className="absolute -right-6 sm:-right-8 xl:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10  flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiper?.slideTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                index === activeIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Button className="bg-[#121214] hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition text-base">
            Claim Your Growth
          </Button>
        </div>
      </section>
    </div>
  );
}
