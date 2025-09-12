import { Section } from "lucide-react";
import React from "react";
import SectionTitle from "../common/section-tittle";

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
    <section className="w-full max-w-6xl mx-auto py-12 px-2 md:px-0 flex flex-col items-center">
    
      <SectionTitle label="MY SEO COURSES" title="Take Your SEO Game to Next Level" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 playfair-font gap-6 md:gap-[60px]">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] border border-[#F2F2F2]  flex flex-col p-5 md:p-8 lg:p-10 min-h-[480px] w-full max-w-xl mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-[#F5F5F5] text-[#242424] text-[16px] md:text-[18px] font-bold rounded-[7px] px-4 py-1.5 md:py-2">
                {course.type}
              </span>
              <img src={course.logo} alt={course.logoAlt} className="h-8 md:h-10 w-auto max-w-[124px] object-contain" />
            </div>
            <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#242424] mb-1 leading-[1.1]">
              {course.title}
            </h3>
            <div className="text-[15px] md:text-[16px] text-[#3B3B3B] mb-2 font-medium">
              {course.location}
            </div>
            <div className="border-t border-[#E5E5E5] my-4"></div>
            <div className="mb-6">
              <div className="text-[15px] md:text-[16px] font-bold mb-2 text-[#222]">This Course Includes</div>
              <ul className="list-disc pl-5 space-y-2">
                {course.includes.map((item, i) => (
                  <li key={i} className="text-[15px] md:text-[16px] text-[#3B3B3B]">
                    <span className="font-medium">{item.label}:</span> <span className="font-bold text-[#242424]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={course.button.link}
              className="mt-auto block w-full text-center border border-[#242424] rounded-[10px] py-2.5 font-semibold text-[#242424] hover:bg-[#242424] hover:text-white transition-colors duration-200 text-[16px] md:text-[18px]"
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
