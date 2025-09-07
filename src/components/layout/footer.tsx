// ...existing code...
import { Facebook, Linkedin, X } from "lucide-react";

const Footer = () => {
  // Footer columns array
  type InquiryItem = { type: "text" | "address" | "social"; value?: React.ReactNode };
  type FooterColumn =
    | { title: string; items: string[]; type: "list" }
    | { title: string; items: InquiryItem[]; type: "inquiry" };

  const footerColumns: FooterColumn[] = [
    {
      title: "Site Map",
      items: ["Home", "About", "Contact", "SEO Training", "Blogs"],
      type: "list"
    },
    {
      title: "Explore",
      items: ["Home", "About", "Contact", "SEO Training", "Blogs"],
      type: "list"
    },
    {
      title: "Inquiry",
      items: [
        { type: "text", value: "info@contact.com" },
        { type: "text", value: "01746-6334455" },
        { type: "address", value: (<>
          1723 Down Height Streets,<br />Baridhara DOHS, Kafrul, Dhaka
        </>) },
        { type: "social" }
      ],
      type: "inquiry"
    }
  ];

  return (
    <footer className="bg-[#0C1115]  text-white pt-16 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left: Gradient LET’S TALK */}
        <div className="md:w-1/2 flex flex-col items-start md:justify-center md:items-start mb-8 md:mb-0">
          <h2
            className="text-[64px] leading-[1] font-bold mb-0 select-none bg-clip-text text-transparent md:text-[100px] sm:text-[40px] text-start w-full"
            style={{
              background: 'linear-gradient(90deg, #FFA347 0%, #FF5858 44%, #6938D6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            LET’S TALK
          </h2>
        </div>
        {/* Right: 3 columns */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 inter-font w-full md:w-1/2 justify-between">
          {footerColumns.map((col, idx) => (
            <div className="flex flex-col items-start" key={col.title}>
              <h3 className="font-semibold text-lg mb-2">{col.title}</h3>
              {col.type === "list" ? (
                <ul className="space-y-2 text-gray-300">
                  {(col.items as string[]).map((item) => (
                    <li key={item} className="cursor-pointer transition-colors duration-200 hover:text-orange-500">{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-2 text-gray-300 text-sm">
                  {(col.items as InquiryItem[]).map((item, i) => {
                    if (item.type === "text" || item.type === "address") {
                      return <div key={i}>{item.value}</div>;
                    } else if (item.type === "social") {
                      return (
                        <div key={i} className="flex gap-6 mt-2 text-white text-xl">
                          <a href="#" aria-label="Facebook" className="hover:text-[#F97316] transition-colors"><Facebook size={22} /></a>
                          <a href="#" aria-label="LinkedIn" className="hover:text-[#F97316] transition-colors"><Linkedin size={22} /></a>
                          <a href="#" aria-label="X" className="hover:text-[#F97316] transition-colors"><X size={22} /></a>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#232626] mt-12 mb-4"></div>
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto md:py-10 sm:py-8 py-6 w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2 px-2 md:px-0">
        <span>© 2024 Md Faruk Khan</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;