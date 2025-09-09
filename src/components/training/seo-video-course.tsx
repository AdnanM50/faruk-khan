import React from "react";

const videoData = {
  title: "How to find Keywords for your Website",
  duration: "10:32min",
  image: "/image.png",
  youtube: "#", 
  join: "#", 
};

const lessons = [
  "What is SEO and Why is it Important?",
  "How to analyze search intent",
  "How to find Keywords for your website",
  "Understanding Ranking Difficulty",
  "Optimize a Page for a Keyword",
  "Building Strategies to Get Backlinks",
  "Link Building Tactics for Beginners",
  "Blogger Outreach for Backlinks",
];

const SeoVideoCourse = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
      <h4 className="text-xs md:text-sm text-[#555] font-medium tracking-widest text-center mb-2 uppercase">MY SEO COURSES</h4>
      <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#121212] text-center mb-10 leading-tight">
        Take Your SEO Game to Next Level
      </h2>
      <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Left: Video Card */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-base md:text-lg text-[#222]">{videoData.title}</span>
            <span className="text-xs md:text-sm text-[#555]">{videoData.duration}</span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#F5F5F5] mb-4">
            <img src={videoData.image} alt="Local SEO Practical Course" className="w-full h-auto object-cover" />
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href={videoData.youtube}
              className="flex-1 text-center bg-[#222] text-white font-semibold rounded-lg py-2 transition-colors duration-200 hover:bg-[#333]"
              target="_blank" rel="noopener noreferrer"
            >
              Watch More on Youtube
            </a>
            <a
              href={videoData.join}
              className="flex-1 text-center border border-[#222] text-[#222] font-semibold rounded-lg py-2 transition-colors duration-200 hover:bg-[#222] hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Join My Courses
            </a>
          </div>
        </div>
        {/* Right: Lessons List */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
          <ol className="list-decimal pl-5 space-y-2">
            {lessons.map((lesson, idx) => (
              <li key={idx}>
                <button
                  className={`w-full text-left rounded-lg px-4 py-2 font-medium text-[#222] transition-colors duration-200 ${idx === 2 ? 'bg-[#222] text-white shadow-md flex items-center' : 'hover:bg-[#F5F5F5]'}`}
                >
                  {idx === 2 && (
                    <span className="inline-block mr-2">
                      <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M6.75 5.25v7.5l6-3.75-6-3.75z" fill="currentColor"/></svg>
                    </span>
                  )}
                  {lesson}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SeoVideoCourse;
