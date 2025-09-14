import { Globe, ShoppingCart, Wrench, Package } from 'lucide-react';

const platforms = [
  {
    icon: <Globe size={40} className="text-[#231012]" />,
    title: 'WordPress',
    desc: 'With my Local SEO services, I focus on maximizing your visibility.',
    highlight: true,
  },
  {
    icon: <ShoppingCart size={40} className="text-[#231012]" />,
    title: 'Shopify',
    desc: 'With my Local SEO services, I focus on maximizing your visibility.',
  },
  {
    icon: <Wrench size={40} className="text-[#231012]" />,
    title: 'Wix',
    desc: 'With my Local SEO services, I focus on maximizing your visibility.',
  },
  {
    icon: <Package size={40} className="text-[#231012]" />,
    title: 'Magento',
    desc: 'With my Local SEO services, I focus on maximizing your visibility.',
  },
];

const SeoExpertSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-2 text-xs tracking-widest text-[#7C6F6F]">WHITE HAT SEO EXPERT</div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12 max-w-3xl mx-auto">
          Comprehensive CMS–Based SEO Solutions for All Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className={`flex flex-col h-full rounded-2xl border hover:border-black hover:shadow-[0_2px_16px_0_rgba(0,0,0,0.04)] px-7 py-10 items-center transition-shadow duration-200 ${platform.highlight ? '' : 'border-[#E2DADA]'}`}
            >
              <div className="mb-4">{platform.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-black">{platform.title}</h3>
              <p className="text-sm text-[#7C6F6F] mb-6 text-center">{platform.desc}</p>
              <button className={`mt-auto flex items-center gap-1 text-sm font-medium rounded-full px-4 py-2 transition ${platform.highlight ? 'bg-black text-white' : 'border border-black text-black hover:bg-black hover:text-white'}`}>
                Get a quote <span className="inline-block"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoExpertSection;
