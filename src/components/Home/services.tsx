import { Briefcase, ShoppingCart, User } from 'lucide-react';

const services = [
  {
    icon: <Briefcase size={32} className="text-[#BFA6A6]" />,
    title: 'Local SEO',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
  {
    icon: <ShoppingCart size={32} className="text-[#BFA6A6]" />,
    title: 'E-commerce SEO',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
  {
    icon: <User size={32} className="text-[#BFA6A6]" />,
    title: 'SEO Consultant',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-2 text-xs tracking-widest text-[#7C6F6F]">SERVICES</div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12">
          Results–Driven SEO Services for Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col h-full rounded-2xl border border-[#E2DADA]  px-7 py-8 items-start transition-shadow duration-200 hover:border-black shadow-[0_2px_16px_0_rgba(0,0,0,0.04)]`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-sm text-[#7C6F6F] mb-6">{service.desc}</p>
              <button className="mt-auto flex items-center gap-1 text-sm font-medium text-black border  rounded-lg px-4 py-2 hover:bg-black hover:text-white transition">
                Get a quote <span className="inline-block"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
