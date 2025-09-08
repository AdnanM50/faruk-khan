import { BadgeCheck, BarChart2, Globe2 } from 'lucide-react';
import Button from '../common/button';
import ResultsList from '../common/service-result';

const results = [
  {
    icon: '/icons/medal-star.png',
    title: 'Highly Competitive Environment',
    desc: 'With millions of WordPress sites online, standing out in search results requires expertise. An SEO expert can help you rise above your competitors, particularly in first-tier markets like the USA and UK.',
  },
  {
    icon: '/icons/chart3.png',
    title: 'WordPress-Specific SEO',
    desc: 'WordPress offers great flexibility, but optimizing it for SEO requires a deep understanding of plugins, technical settings, and customizations. I specialize in using WordPress to its full SEO potential, from improving page load speeds to structuring content efficiently.',
  },
  {
    icon: '/icons/cloud-change.png',
    title: 'Organic Growth Without Ads',
    desc: 'Paid ads can provide short-term traffic, but organic search delivers long-term, sustainable growth. I help WordPress websites build steady, high-quality traffic that converts without relying on continuous ad spend.',
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
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch">
          {/* Image */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <div className="rounded-3xl w-full max-w-[380px] md:max-w-[520px] flex items-center justify-center overflow-hidden shadow-md  aspect-[0.635] md:aspect-[0.635]">
              <img
                src="/proven.png"
                alt="SEO Consultant"
                className="object-cover rounded-2xl w-full h-full"
                style={{ background: 'rgba(0,0,0,0.01)' }}
              />
            </div>
          </div>
          {/* Results List */}
          <div className="flex flex-col w-full md:w-1/2 justify-center">
            <ResultsList items={results} />
          </div>
        </div>
         <div className="flex justify-center mt-8">
           <Button >
      Schedule a Free Meeting
    </Button>
         </div>
      </div>
    </section>
  );
};

export default ProvenResultSection;
