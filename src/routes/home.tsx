
import AboutSection from '../components/Home/about'
import CaseStudySection from '../components/Home/case-study'
import ClientSection from '../components/Home/client'
import FeatureSection from '../components/Home/feature'
import HeroSection from '../components/Home/hero'
import ProvenResultSection from '../components/Home/proven-result'
import SeoExpertSection from '../components/Home/seo-expert'
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
      <CaseStudySection />
      <SeoExpertSection />
      <ProvenResultSection />
      <TestimonialSection />
    </div>
  )
}

export default Home