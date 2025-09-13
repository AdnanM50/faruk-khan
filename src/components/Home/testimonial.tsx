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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">TESTIMONIAL</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
          Real Reviews from Satisfied Customers
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative flex items-center px-8 md:px-12">
        {/* Navigation Buttons - Positioned outside video container */}
        <button
          onClick={handlePrevSlide}
          className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10  rounded-full flex items-center justify-center "
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10  rounded-full flex items-center justify-center "
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
          className="testimonial-swiper w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Image with Play Button (uses existing logic) */}
                <VideoThumb poster={testimonial.image} videoId={testimonial.videoId} hasVideo={testimonial.hasVideo} />

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  {/* Header with Name and Logo */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                      {/* Website */}
                      <div className="flex items-center gap-2">
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
                    </div>
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.name} logo`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain ml-4"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{testimonial.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination - Positioned below video cards */}
       
      </div>
      <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiper?.slideTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      {/* Call to Action */}
      <div className="text-center mt-8 md:mt-12">
        <Button
          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:px-8 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base"
        >
          Claim Your Growth
        </Button>
      </div>

   
    </section>
  );
}
