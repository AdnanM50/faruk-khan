import { BadgeCheck, BarChart2, Globe2 } from 'lucide-react';

const results = [
  {
    icon: <BadgeCheck size={28} className="text-[#231012]" />,
    title: 'Proven SEO Expertise',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
  {
    icon: <BarChart2 size={28} className="text-[#231012]" />,
    title: 'ROI Enhancement',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
  {
    icon: <Globe2 size={28} className="text-[#231012]" />,
    title: 'Local to Global SEO',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
];

const ProvenResultSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-2 text-xs tracking-widest text-[#7C6F6F]">PROVEN RESULTS</div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-12 max-w-2xl mx-auto">
          Why Should You Take My SEO Consultancy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="rounded-2xl w-full max-w-[340px] flex items-center justify-center overflow-hidden shadow-md bg-[#F7F4F4]">
              <img
                src="/proven.png"
                alt="SEO Consultant"
                className="object-cover rounded-2xl w-full h-auto max-w-[340px]"
                style={{ background: 'rgba(0,0,0,0.01)' }}
              />
            </div>
          </div>
          {/* Results List */}
          <div className="flex flex-col gap-6">
            {results.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-[#E2DADA] bg-[#FDF8F8] px-6 py-6">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-black">{item.title}</h3>
                  <p className="text-sm text-[#7C6F6F]">{item.desc}</p>
                </div>
              </div>
            ))}
            <button className="mt-8 px-8 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition self-center">
              Schedule a Free Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResultSection;
