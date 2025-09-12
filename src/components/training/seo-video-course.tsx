

const lessons = [
  {
    title: "What is SEO and Why is it Important?",
    duration: "09:12",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_1",
    thumbnail: "/image.png"
  },
  {
    title: "How to analyze search intent",
    duration: "08:45",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_2",
    thumbnail: "/image.png"
  },
  {
    title: "How to find Keywords for your website",
    duration: "10:32",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_3",
    thumbnail: "/image.png"
  },
  {
    title: "Understanding Ranking Difficulty",
    duration: "07:58",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_4",
    thumbnail: "/image.png"
  },
  {
    title: "Optimize a Page for a Keyword",
    duration: "11:20",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_5",
    thumbnail: "/image.png"
  },
  {
    title: "Building Strategies to Get Backlinks",
    duration: "12:05",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_6",
    thumbnail: "/image.png"
  },
  {
    title: "Link Building Tactics for Beginners",
    duration: "09:50",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_7",
    thumbnail: "/image.png"
  },
  {
    title: "Blogger Outreach for Backlinks",
    duration: "08:30",
    youtube: "https://www.youtube.com/embed/VIDEO_ID_8",
    thumbnail: "/image.png"
  },
];

import React, { useState } from "react";
import SectionTitle from "../common/section-tittle";
import { Play } from "lucide-react";

const SeoVideoCourse = () => {
  const [currentIdx, setCurrentIdx] = useState(2); // default to 3rd lesson as in original
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
    
      <SectionTitle label="MY SEO COURSES" title="Take Your SEO Game to Next Level" />
      <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Left: Video Player/Card */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-base md:text-lg text-[#0C1115]">{lessons[currentIdx].title}</span>
            <span className="text-xs md:text-sm text-[#555]">{lessons[currentIdx].duration}</span>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#F5F5F5] mb-4 max-h-[328px] flex items-center justify-center">
            {!showVideo ? (
              <button
                className="w-full h-full flex items-center justify-center relative group aspect-video"
                onClick={() => setShowVideo(true)}
                style={{ minHeight: 0, padding: 0 }}
              >
                <img
                  src={lessons[currentIdx].thumbnail}
                  alt={lessons[currentIdx].title + ' thumbnail'}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ objectFit: 'cover' }}
                />
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                    <polygon points="26,20 48,32 26,44" fill="#fff" />
                  </svg>
                </span>
              </button>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={lessons[currentIdx].youtube + '?autoplay=1'}
                title={lessons[currentIdx].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ minHeight: 0 }}
              ></iframe>
            )}
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href={lessons[currentIdx].youtube.replace("/embed/", "/watch?v=")}
              className="flex-1 text-center bg-[#0C1115] text-white font-semibold rounded-lg py-2 transition-colors duration-200 hover:bg-[#333]"
              target="_blank" rel="noopener noreferrer"
            >
              Watch on Youtube
            </a>
            <a
              href="#"
              className="flex-1 text-center border border-[#0C1115] text-[#0C1115] font-semibold rounded-lg py-2 transition-colors duration-200 hover:bg-[#0C1115] hover:text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Join My Courses
            </a>
          </div>
        </div>
        {/* Right: Lessons List */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
          <div className="space-y-2">
            {lessons.map((lesson, idx) => (
              <div key={idx} className="flex items-center">
                <button
                  className={`flex-1 text-left rounded-lg px-4 py-2 font-medium transition-colors duration-200 flex items-center ${
                    currentIdx === idx
                      ? 'bg-[#121212] text-white shadow-md'
                      : 'text-[#121212] hover:bg-[#F5F5F5]'
                  }`}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setShowVideo(false);
                  }}
                >
                  <span className="w-7 h-7 flex items-center justify-center mr-3">
                    {currentIdx === idx ? (
                      <Play className="w-4 h-4 text-white" />
                    ) : (
                      <span className="font-semibold" style={{color: '#121212', opacity: 0.7}}>{idx + 1}</span>
                    )}
                  </span>
                  {lesson.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoVideoCourse;
