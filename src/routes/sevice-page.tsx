import FaqSection from "../components/Home/faq"
import LastStatement from "../components/Home/last-statement"
import SEOTestimonialSection from "../components/Home/seo-testimonial"
import ServiceProven from "../components/service/service-proven"
import ServicesSrx from "../components/service/service-srx"
import ServicesHero from "../components/service/services-hero"
import ServiceProvenResult from "../components/service/sevice-proven"

const Service = () => {
  return (
    <>
 <ServicesHero />
 <ServiceProvenResult />
 <ServicesSrx />
 <ServiceProven />
 <FaqSection />
  <SEOTestimonialSection />
       <LastStatement />
    </>
  )
}

export default Service
  