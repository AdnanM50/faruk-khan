import SectionTitle from "../common/section-tittle";


const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          label="ABOUT ME"
          title="Why Choose Md Faruk Khan as Your SEO Specialist in Bangladesh?"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex md:justify-end justify-center">
            <div className="rounded-2xl w-full max-w-[370px] flex items-center md:justify-end justify-center">
              <img
                src="/about.png"
                alt="Md Faruk Khan"
                className="object-cover rounded-2xl w-full h-auto"
                style={{ background: 'rgba(0,0,0,0.01)' }}
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="text-xs font-semibold tracking-widest text-[#7C6F6F] mb-2">LITTLE BIT ABOUT ME</div>
            <p className="text-[#2d2d2d] text-base mb-4">
              As a seasoned SEO professional, my journey in the digital marketing landscape has been one of continuous evolution and success. With over a decade of experience, I have established myself as a pioneering SEO veteran in Bangladesh, known for my innovative strategies and results-driven approach. At the heart of my philosophy lies a deep understanding of the dynamic nature of search engine algorithms and user behavior, enabling me to craft SEO solutions that are not only effective but also sustainable in the long term.
            </p>
            <p className="text-[#2d2d2d] text-base mb-6">
              With over a decade of experience, I have established myself as a pioneering SEO veteran in Bangladesh, known for my innovative strategies and results-driven approach.
            </p>
            <button className="inline-flex items-center gap-1 text-sm font-medium text-black border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition mb-8 md:mb-10 w-fit">
              Know More About Me
              <span className="inline-block"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </button>
            <div className="flex gap-8 md:gap-12 mt-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">100%</div>
                <div className="text-xs text-[#7C6F6F] mt-1">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">10</div>
                <div className="text-xs text-[#7C6F6F] mt-1">Years Of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">556+</div>
                <div className="text-xs text-[#7C6F6F] mt-1">Clients Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
