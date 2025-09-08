import React from "react";
// import '../../styles/wordpress-seo-process.css';

const processSteps = [
  {
    number: 1,
    title: "Comprehensive WordPress SEO Audit",
    desc: `I start with a thorough audit, analyzing on-page SEO, technical performance, and off-page factors like backlinks. This allows me to pinpoint exactly what’s holding your site back and what improvements can be made.`,
  },
  {
    number: 2,
    title: "Keyword Research & Strategy",
    desc: `I start with a thorough audit, analyzing on-page SEO, technical performance, and off-page factors like backlinks. This allows me to pinpoint exactly what’s holding your site back and what improvements can be made.`,
  },
  {
    number: 3,
    title: "Technical SEO for WordPress",
    desc: `From optimizing meta tags and headers to improving content and images, I’ll ensure every page of your WordPress site is perfectly optimized for search engines and user experience.`,
  },
  {
    number: 4,
    title: "Content Creation & Optimization",
    desc: `I handle the technical aspects, from optimizing site speed to setting up schema markup. Whether fixing broken links or improving mobile usability, I take care of the technical challenges WordPress sites often face.`,
  },
  {
    number: 5,
    title: "Link Building & Off-Page SEO",
    desc: `I help create and acquire backlinks from reputable sources to strengthen your authority. Whether it’s guest contributions, blog posts, or digital PR, I’ll ensure your content is SEO-friendly and conversion-focused.`,
  },
  {
    number: 6,
    title: "Ongoing Monitoring & Reporting",
    desc: `I hold the quality of backlinks from reputable sources to strengthen your authority. With my experience in outreach and partnership building, your WordPress site will benefit from a strong link-building strategy.`,
  },
  {
    number: 7,
    title: "Continuous Learning",
    desc: `SEO requires ongoing iteration. I monitor your site’s rankings, traffic, and performance metrics, providing regular reports and insights to ensure continuous improvement.`,
  },
];

const WordPressSEOProcess = () => {
  return (
    <section className="seo-process-section">
      <div className="text-center mb-8">
        <span className="seo-process-title">PROVEN RESULTS</span>
        <h2 className="seo-process-heading">My Proven WordPress SEO Process</h2>
      </div>
      <div className="seo-process-list">
        {processSteps.map((step, idx) => (
          <div
            key={step.number}
            className="seo-process-card py-6"
          >
            {/* Left (Number & Title) or Right depending on even/odd */}
            {idx % 2 === 0 ? (
              <div className="seo-process-card-left">
                <span className="seo-process-number">{step.number}</span>
                <span className="seo-process-step-title">
                  {step.title}
                </span>
              </div>
            ) : null}
            {/* Description */}
            <div className={`flex-1 p-6 flex items-center ${idx % 2 === 0 ? '' : 'order-first md:order-none'}`}> 
              <span className="seo-process-desc">{step.desc}</span>
            </div>
            {/* For odd, number & title on right */}
            {idx % 2 !== 0 ? (
              <div className="seo-process-card-right">
                <span className="seo-process-number">{step.number}</span>
                <span className="seo-process-step-title">
                  {step.title}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <button className="seo-process-cta">Get a Quote</button>
    </section>
  );
};

export default WordPressSEOProcess;
