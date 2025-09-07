import React from "react";

const blogs = [
  {
    tag: "SEO",
    date: "September 24, 2024",
    title: "Google Product Studio launches AI-generated video creation tool",
    image: "/public/blog1.jpg",
  },
  {
    tag: "Marketing",
    date: "September 24, 2024",
    title: "Visual content and SEO: How to use images and videos in 2025",
    image: "/public/blog2.jpg",
  },
  {
    tag: "SEO",
    date: "September 24, 2024",
    title: "The art of AI–enhanced content: 8 ways to keep human creativity front and center",
    image: "/public/blog3.jpg",
  },
];

const BlogSection = () => (
  <section className="w-full flex flex-col items-center justify-center bg-white py-10 px-2 sm:px-6">
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <span className="text-xs font-medium text-neutral-700 mb-2 mt-2 tracking-widest">BLOGS</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#222] mb-8">
        Recent SEO Update & Blog
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="w-full h-56 bg-neutral-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col gap-2 p-5 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-semibold bg-neutral-100 px-2 py-1 rounded text-neutral-800">{blog.tag}</span>
                <span className="text-xs text-neutral-500">{blog.date}</span>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 leading-snug">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-2 px-6 py-3 rounded-lg border border-neutral-900 text-neutral-900 font-semibold text-base hover:bg-neutral-900 hover:text-white transition-all">
        Read All Posts
      </button>
    </div>
  </section>
);

export default BlogSection;
