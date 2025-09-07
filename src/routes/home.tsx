
import AboutSection from '../components/Home/about'
import BlogSection from '../components/Home/blog'
import CaseStudySection from '../components/Home/case-study'
import ClientSection from '../components/Home/client'
import ExpertSection from '../components/Home/expert'
import FaqSection from '../components/Home/faq'
import FeatureSection from '../components/Home/feature'
import HeroSection from '../components/Home/hero'
import LastStatement from '../components/Home/last-statement'
import PriceSection from '../components/Home/price'
import ProvenResultSection from '../components/Home/proven-result'
import SeoExpertSection from '../components/Home/seo-expert'
import SEOTestimonialSection from '../components/Home/seo-testimonial'
import SeoTestimonial from '../components/Home/seo-testimonial'
import ServicesSection from '../components/Home/services'
import TestimonialSection from '../components/Home/testimonial'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <AboutSection />
      <FeatureSection />
      {/* <CaseStudySection /> */}
      <SeoExpertSection />
      <ProvenResultSection />
      {/* <TestimonialSection /> */}
      <ExpertSection />
      <PriceSection />
      <FaqSection />
      <BlogSection />
      <SEOTestimonialSection />
      <LastStatement />
    </div>
  )
}

export default Home