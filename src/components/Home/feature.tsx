const features = [
  { name: 'Kaler Kantho', logo: '/featured/kalerkantho.png' },
  { name: 'The Business Standard', logo: '/featured/tbs.png' },
  { name: 'Samakal', logo: '/featured/samakal.png' },
  { name: 'News24', logo: '/featured/news24.png' },
  { name: 'BanglaMail', logo: '/featured/banglamail.png' },
];

const FeatureSection = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs text-[#7C6F6F] mb-4 tracking-widest">FEATURED ON</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full items-center justify-items-center">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center h-12">
                <img
                  src={feature.logo}
                  alt={feature.name}
                  className="max-h-10 object-contain"
                  style={{ maxWidth: 120 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
