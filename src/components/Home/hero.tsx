const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center bg-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 pb-10 sm:pb-16">
        
        {/* Top Heading */}
        <h1
          style={{  fontWeight: 200 }}
          className="text-center text-2xl sm:text-3xl md:text-[60px] !font-extralight text-[#121212]"
        >
          Hi, I’m <span style={{ fontWeight: 200 }}>Md Faruk Khan</span>
        </h1>

        {/* Sub Heading */}
        <div className="mt-2 text-center text-lg sm:text-xl md:text-2xl">
          <span style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-[#121212] font-extrabold text-2xl sm:text-3xl md:text-4xl">SEO Expert & Consultant</span>
          <span style={{ fontWeight: 200, }} className="text-[#121212] md:text-[40px] sm:text-3xl text-2xl"> in Bangladesh</span>
        </div>

        {/* Image */}
        <div className="mt-8 mb-8 flex justify-center w-full">
          <img
            src="/faruk.png"
            alt="Md Faruk Khan"
            className="object-cover rounded-lg shadow-lg max-w-[260px] sm:max-w-[320px] md:max-w-[370px] w-full h-auto"
            style={{ background: 'rgba(0,0,0,0.01)' }}
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
          <span className="text-base sm:text-lg font-medium text-black">
            Need help to with organic growth?
          </span>
          <button
            className="mt-2 sm:mt-0 bg-black text-white px-6 py-3 rounded-full font-medium text-base sm:text-lg transition hover:bg-[#222] focus:outline-none"
          >
            Schedule a Free Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
