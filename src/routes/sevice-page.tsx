import React from "react"
import LastStatement from "../components/Home/last-statement"
import SEOTestimonialSection from "../components/Home/seo-testimonial"
import ServiceFaqSection from "../components/service/service-faq"
import ServiceProven from "../components/service/service-proven"
import ServicesSrx from "../components/service/service-srx"
import ServicesHero from "../components/service/services-hero"
import ServiceProvenResult from "../components/service/sevice-proven"
import WordPressSEOProcess from "../components/service/wordpress"

const Service = () => {
  return (
    <>
 <ServicesHero />
 <ServiceProvenResult />
 <ServicesSrx />
 <ServiceProven />
 <WordPressSEOProcess />
 <ServiceFaqSection />
  <SEOTestimonialSection />
       <LastStatement />
    </>
  )
}

export default Service
  