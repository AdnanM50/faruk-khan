import React from "react"
import LastStatement from "../components/Home/last-statement"
import SEOTestimonialSection from "../components/Home/seo-testimonial"
import ServiceFaqSection from "../components/service/service-faq"
import ServiceProven from "../components/service/service-proven"
import ServicesSrx from "../components/service/service-srx"
import ServicesHero from "../components/service/services-hero"
import ServiceProvenResult from "../components/service/sevice-proven"
import WordPressSEOProcess from "../components/service/wordpress"
import ServiceCases from "../components/service/service-cases"

const Service = () => {
  return (
    <div className="playfair-font">
 <ServicesHero />
 <ServiceProvenResult />
 <ServicesSrx />
 <ServiceProven />
 <ServiceCases />
 <WordPressSEOProcess />
 <ServiceFaqSection />
  <SEOTestimonialSection />
       <LastStatement />
    </div>
  )
}

export default Service
  