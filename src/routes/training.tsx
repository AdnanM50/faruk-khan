import FeatureSection from "../components/Home/feature";
import LastStatement from "../components/Home/last-statement";
import SEOTestimonialSection from "../components/Home/seo-testimonial";
import FutureExperts from "../components/training/future";
import Partners from "../components/training/patners";
import SeoHero from "../components/training/seo-hero";

const SEOTraining = () => {
  return (
   <>
   <SeoHero />
   <Partners />
         <FeatureSection />
<FutureExperts />
  <SEOTestimonialSection />
       <LastStatement />
   </>
  );
};
export default SEOTraining;