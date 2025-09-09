import React from "react";

const courses = [
  {
    type: "Physical Class",
    logo: "/united.png",
    logoAlt: "United International University Logo",
    title: "Post Graduate Diploma (PGD) in Digital Marketing",
    location: "Location: United International University",
    includes: [
      { label: "Number of Credit", value: "18 Credits" },
      { label: "Course Duration", value: "6 Months" },
      { label: "Total Semester", value: "2 Semester" },
      { label: "Total Hours", value: "144 Hours" },
    ],
    button: { text: "Enroll now", link: "#" },
  },
  {
    type: "Recorded Course",
    logo: "/10_Minute_School.png",
    logoAlt: "10 Minute School Logo",
    title: "Advanced SEO Training in Bangladesh",
    location: "10 Minutes Schools",
    includes: [
      { label: "Number of Videos", value: "64 Videos" },
      { label: "Course Duration", value: "6 Months" },
      { label: "Total Hours", value: "144 Hours" },
    ],
    button: { text: "Enroll now", link: "#" },
  },
];

const Courses = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-14 px-2 md:px-0 flex flex-col items-center">
      <h4 className="text-xs md:text-sm text-[#555] font-medium tracking-widest text-center mb-2 uppercase">MY SEO COURSES</h4>
      <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#121212] text-center mb-10 leading-tight">
        Take Your SEO Game to Next Level
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#F2F2F2] shadow-sm flex flex-col p-6 md:p-8 lg:p-10 min-h-[480px] max-w-xl mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#F5F5F5] text-[#333] text-sm md:text-base font-semibold rounded px-4 py-2">
                {course.type}
              </span>
              <img src={course.logo} alt={course.logoAlt} className="h-8 md:h-10 w-auto sm:w-[124px] object-fill" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#222] mb-1 leading-snug">
              {course.title}
            </h3>
            <div className="text-sm md:text-base text-[#555] mb-4">
              {course.location}
            </div>
            <div className="border-t border-[#E5E5E5] my-4"></div>
            <div className="mb-6">
              <div className="text-sm md:text-base font-semibold mb-2 text-[#222]">This Course Includes</div>
              <ul className="list-disc pl-5 space-y-1">
                {course.includes.map((item, i) => (
                  <li key={i} className="text-sm md:text-base text-[#555]">
                    <span className="font-medium">{item.label}:</span> <span className="font-bold text-[#222]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={course.button.link}
              className="mt-auto block w-full text-center border border-[#222] rounded-lg py-2 font-semibold text-[#222] hover:bg-[#222] hover:text-white transition-colors duration-200"
            >
              {course.button.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
