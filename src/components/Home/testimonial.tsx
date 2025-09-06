import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-swiper.css";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image: "/testimonial1.png",
    name: "Max Secure",
    website: "maxsecureit.com",
    logo: "/maxsecure-logo.png",
    text: `Walton group’s remarkable journey to 104% organic growth and 92% ranking on Google’s first page. Search engine algorithms ...`,
  },
  {
    image: "/testimonial2.png",
    name: "Walton Hi–Tech PLC",
    website: "waltonbd.com",
    logo: "/clients/walton.png",
    text: `Walton group’s remarkable journey to 104% organic growth and 92% ranking on Google’s first page. Search engine algorithms ...`,
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-2 text-xs tracking-widest text-[#7C6F6F]">
          TESTIMONIAL
        </div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12 max-w-2xl mx-auto">
          Real Reviews from Satisfied Customers
        </h2>

        <div className="relative flex items-center justify-center w-full">
          {/* Left Arrow */}
          <button
            className="testimonial-swiper-button-prev custom-swiper-nav absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={28} strokeWidth={2.2} />
          </button>

          <div className="flex flex-col w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              navigation={{
                nextEl: ".testimonial-swiper-button-next",
                prevEl: ".testimonial-swiper-button-prev",
              }}
              
              pagination={{ clickable: true }}
              className="w-full"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col h-full rounded-2xl border border-[#E2DADA] bg-[#FDF8F8] px-6 py-6 items-start shadow-md">
                    <div className="w-full flex justify-center mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover rounded-2xl w-full max-w-[220px] h-[180px]"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-semibold text-black">
                        {item.name}
                      </span>
                      {item.logo && (
                        <img src={item.logo} alt="logo" className="h-6 w-auto" />
                      )}
                    </div>
                    <a
                      href={`https://${item.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7C6F6F] mb-2 underline"
                    >
                      {item.website}
                    </a>
                    <p className="text-sm text-[#7C6F6F] mb-2 line-clamp-3">
                      {item.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Arrow */}
          <button
            className="testimonial-swiper-button-next custom-swiper-nav absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight size={28} strokeWidth={2.2} />
          </button>
        </div>

        <button className="mt-10 px-8 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition block mx-auto">
          Claim Your Growth
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
