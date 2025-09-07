const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-start bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-start w-full px-4 pb-10 sm:pb-16">
        
        {/* Top Heading */}
        <h1
          style={{ fontWeight: 200 }}
          className="text-center text-2xl sm:text-3xl md:text-[60px] !font-extralight text-[#121212] mt-6"
        >
          Hi, I’m <span style={{ fontWeight: 200 }}>Md Faruk Khan</span>
        </h1>

        {/* Sub Heading */}
        <div className="mt-2 text-center text-lg sm:text-xl md:text-2xl">
          <span
            style={{ fontFamily: 'Plus Jakarta Sans' }}
            className="text-[#121212] font-extrabold text-2xl sm:text-3xl md:text-4xl"
          >
            SEO Expert & Consultant
          </span>
          <span
            style={{ fontWeight: 200 }}
            className="text-[#121212] md:text-[40px] sm:text-3xl text-2xl"
          >
            {" "}
            in Bangladesh
          </span>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full mt-4">
          <img
            src="/hero.jpg"
            alt="Md Faruk Khan"
            className="object-contain w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] "
            loading="lazy"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto mt-6">
          <span className="text-base sm:text-lg font-medium text-black">
            Need help with organic growth?
          </span>
          <button className="mt-2 sm:mt-0 bg-black text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg transition hover:bg-[#222] focus:outline-none">
            Schedule a Free Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;