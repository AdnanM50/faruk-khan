import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/service' },
    { label: 'SEO Training', to: '/seo-training' },
    { label: 'Blogs', to: '/blogs' },
  ];
  return (
    <header className="w-full inter-font bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-5 relative">
          {/* Left: Logo */}
          <div className="flex flex-col items-start select-none" style={{ minWidth: 70 }}>
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Right: Nav links + CTA (desktop) */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-10">
              {menuItems.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-lg text-neutral-800 hover:text-neutral-600 font-normal">{label}</Link>
                </li>
              ))}
            </ul>
            {/* CTA Button (desktop) */}
            <div className="hidden md:flex items-center">
              <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-8 py-3 rounded-xl text-base transition-all">
                Book a Free Call
              </button>
            </div>
            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center z-20">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <X className="text-[#231012] relative z-[999]" size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className=" md:hidden" onClick={() => setMenuOpen(false)}><X className="text-[#231012] relative z-[999]" size={28} /></div>
          )}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col h-full p-8">
              <ul className="flex flex-col space-y-8 mt-12">
                {menuItems.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-lg text-neutral-800 hover:text-neutral-600 font-normal"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-8 py-3 rounded-xl text-base transition-all mt-8">
                  Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;