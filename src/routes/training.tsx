import FeatureSection from "../components/Home/feature";
import LastStatement from "../components/Home/last-statement";
import SEOTestimonialSection from "../components/Home/seo-testimonial";
import Courses from "../components/training/courses";
import FutureExperts from "../components/training/future";
import Partners from "../components/training/patners";
import SeoHero from "../components/training/seo-hero";
import SeoProvenResults from "../components/training/seo-profasor";
import SeoVideoCourse from "../components/training/seo-video-course";

const SEOTraining = () => {
  return (
    <div className="playfair-font">
   <SeoHero />
   <Partners />
         <FeatureSection />
<FutureExperts />
<Courses />
<SeoProvenResults />
<SeoVideoCourse />
  <SEOTestimonialSection />
       <LastStatement />
   </div>
  );
};
export default SEOTraining;