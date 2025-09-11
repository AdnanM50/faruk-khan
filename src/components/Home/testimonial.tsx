"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-swiper.css";
import Button from "../common/button";

const testimonials = [
  {
    id: 1,
    name: "Max Secure",
    website: "maxsecureltd.com",
    image: "/testimonial1.png",
    logo: "/maxsecure-logo.png",
    description:
      "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Walton Hi-Tech PLC",
    website: "waltonbd.com",
    image: "/testimonial2.png",
    logo: "/clients/walton.png",
    description:
      "Walton group's remarkable journey to 104% organic growth and 92% ranking on Google's first page. Search engine algorithms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
  {
    id: 3,
    name: "Tech Solutions Inc",
    website: "techsolutions.com",
    image: "/professional-woman-office.png",
    logo: "/tech-company-logo-with-circuit-design.jpg",
    description:
      "Achieved remarkable digital transformation with 150% increase in online presence and top search rankings across multiple platforms",
    videoId: "dQw4w9WgXcQ",
    hasVideo: true,
  },
];

const VideoThumb = ({ poster, videoId, hasVideo }: { poster: string; videoId: string; hasVideo: boolean }) => {
  const [playing, setPlaying] = useState(false);
  if (hasVideo && playing) {
    return (
      <div className="w-full mb-0 relative rounded-2xl overflow-hidden aspect-[4/3]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={poster}
        alt="testimonial poster"
        className="w-full h-full object-cover"
      />
      {hasVideo && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200"
          aria-label="Play testimonial video"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
            <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  );
};

export default function TestimonialSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    swiper?.slidePrev();
  };

  const handleNextSlide = () => {
    swiper?.slideNext();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">TESTIMONIAL</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
          Real Reviews from Satisfied Customers
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Buttons - Positioned to overlay on cards */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white/90 transition-all duration-200 md:left-4"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white/90 transition-all duration-200 md:right-4"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Image with Play Button (uses existing logic) */}
                <VideoThumb poster={testimonial.image} videoId={testimonial.videoId} hasVideo={testimonial.hasVideo} />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Header with Name and Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <a
                      href={`https://${testimonial.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {testimonial.website}
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiper?.slideTo(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Button
          
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Claim Your Growth
        </Button>
      </div>

      {/* Custom Styles */}
      {/* <style jsx global>{`
        .testimonial-swiper .swiper-slide {
          height: auto;
        }
        
        .testimonial-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style> */}
    </section>
  );
}
