
import ServiceCard from '../cards/service-card';
import SectionTitle from '../common/section-tittle';

const services = [
  {
    icon: '/icons/global-search.png',
    title: 'Local SEO',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
  {
    icon: '/icons/monitor.png',
    title: 'E-commerce SEO',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
  {
    icon: '/icons/user-search.png',
    title: 'SEO Consultant',
    desc: 'With my Local SEO services, I focus on maximizing your visibility within your local community. I tailor strategies to ensure your business stands out.',
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle label="SERVICES" title="Results–Driven SEO Services for Businesses" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, idx) => (
           <ServiceCard key={idx} data={service} icon={''} title={''} desc={''} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
