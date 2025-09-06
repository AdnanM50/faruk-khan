// ...existing code...
import { Facebook, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#181B1B] text-white pt-16 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left: Gradient LET’S TALK */}
        <div className="md:w-1/2 flex flex-col items-start md:justify-center md:items-start mb-8 md:mb-0">
          <h2 className="text-[64px] leading-[1] font-bold mb-0 select-none gradient-text-footer">
            LET’S TALK
          </h2>
        </div>
        {/* Right: 3 columns */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-1/2 justify-between">
          {/* Site Map */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-2">Site Map</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Contact</li>
              <li className="footer-link">SEO Training</li>
              <li className="footer-link">Blogs</li>
            </ul>
          </div>
          {/* Explore */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-2">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Contact</li>
              <li className="footer-link">SEO Training</li>
              <li className="footer-link">Blogs</li>
            </ul>
          </div>
          {/* Inquiry */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-2">Inquiry</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>info@contact.com</div>
              <div>01746-6334455</div>
              <div>1723 Down Height Streets,<br/>Baridhara DOHS, Kafrul, Dhaka</div>
              <div className="flex gap-6 mt-2 text-white text-xl">
                <a href="#" aria-label="Facebook" className="hover:text-[#F97316] transition-colors"><Facebook size={22} /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#F97316] transition-colors"><Linkedin size={22} /></a>
                <a href="#" aria-label="X" className="hover:text-[#F97316] transition-colors"><X size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#232626] mt-12 mb-4"></div>
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2 px-2 md:px-0">
        <span>© 2024 Md Faruk Khan</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
      {/* Custom styles for gradient text and responsive tweaks */}
      <style>{`
        .gradient-text-footer {
          background: linear-gradient(90deg, #F97316 0%, #F43F5E 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        @media (max-width: 768px) {
          .gradient-text-footer {
            font-size: 40px;
            text-align: center;
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .gradient-text-footer {
            font-size: 32px;
            text-align: center;
            width: 100%;
          }
        }
        .footer-link {
          cursor: pointer;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #F97316;
        }
      `}</style>
    </footer>
  );
};

export default Footer;