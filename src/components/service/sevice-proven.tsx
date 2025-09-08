import { BadgeCheck, BarChart2, Globe2 } from 'lucide-react';
import Button from '../common/button';
import ResultsList from '../common/service-result';

const results = [
  {
    icon: '/icons/medal-star.png',
    title: 'Proven SEO Expertise',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
  {
    icon: '/icons/chart3.png',
    title: 'ROI Enhancement',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
  {
    icon: '/icons/cloud-change.png',
    title: 'Local to Global SEO',
    desc: 'With over a decade of experience in the Bangladesh SEO market, I offer an extensive wealth of knowledge and a consistent track record of success.',
  },
];




const ServiceProvenResult = () => {
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

export default ServiceProvenResult;
