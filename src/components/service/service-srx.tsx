
import ServiceCard from '../cards/service-card';
import SectionTitle from '../common/section-tittle';

const services = [
  {
    icon: '/icons/global-search1.png',
    title: 'Full WordPress SEO Audits',
    desc: 'I perform a comprehensive audit of your WordPress website, covering on-page SEO, technical SEO, and off-page factors. This includes identifying issues.',
  },
  {
    icon: '/icons/search.png',
    title: 'Keyword Research & Targeting',
    desc: 'Using in-depth research tools, I identify high-intent keywords relevant to your niche. I focus on finding the right balance between competitive keywords.',
  },
  {
    icon: '/icons/setting-2.png',
    title: 'On-Page Optimization',
    desc: '(Meta Tags, Content, Image Optimization)\nUsing in-depth research tools, I identify high-intent keywords relevant to your niche. I focus on finding the right balance between competitive keywords.',
  },
  {
    icon: '/icons/simcard.png',
    title: 'Technical SEO',
    desc: '(Site Speed, Structured Data, Mobile Optimization)\nUsing in-depth research tools, I identify high-intent keywords relevant to your niche. I focus on finding the right balance between competitive keywords.',
  },
  {
    icon: '/icons/blogger.png',
    title: 'Content Strategy & Blogging',
    desc: 'Using in-depth research tools, I identify high-intent keywords relevant to your niche. I focus on finding the right balance between competitive keywords.',
  },
  {
    icon: '/icons/graph.png',
    title: 'SEO Reporting & Analytics',
    desc: 'Using in-depth research tools, I identify high-intent keywords relevant to your niche. I focus on finding the right balance between competitive keywords.',
  },
];

const ServicesSrx = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle label="Services I offer" title="WordPress SEO Services" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, idx) => (
           <ServiceCard key={idx} data={service} icon={''} title={''} desc={''} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSrx;
