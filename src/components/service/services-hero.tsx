
import React from "react";

const ServicesHero = () => {
	return (
		<section className="w-full flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-4 md:px-8 lg:px-20 py-10 bg-white">
			{/* Left Side */}
			<div className="w-full md:w-1/2 flex flex-col items-start justify-center max-w-xl">
				   <span className="uppercase text-[11px] sm:text-xs md:text-sm tracking-widest text-gray-500 mb-2 font-semibold">WordPress SEO Expert</span>
				   <h1 className="text-[1.5rem] sm:text-[2.125rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[2.9rem] font-bold text-gray-900 mb-4 leading-tight">
					   Take Your WordPress<br className="hidden sm:block" />
					   Site to the Top of Google
				   </h1>
				   <p className="text-gray-600 text-[13px] sm:text-[15px] md:text-base lg:text-lg mb-6">
					   Maximize the visibility of your WordPress site with professional SEO services designed for results. As a seasoned WordPress SEO expert with over a decade of experience, I specialize in optimizing WordPress websites to achieve high search engine rankings, boost organic traffic, and drive conversions. Whether you’re targeting a global audience or specific markets like the USA, UK, or Australia, I can help you succeed.
				   </p>
				<button className="bg-black text-white px-6 py-3 rounded-md font-medium shadow hover:bg-gray-800 transition mb-4 md:mb-0">
					Schedule a Free Meeting
				</button>
			</div>
			{/* Right Side */}
			<div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
				<div className="rounded-2xl overflow-hidden  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
					<img
						src="/services/shero.png"
						alt="WordPress SEO Expert"
						className="object-cover w-full h-80 sm:h-96 md:h-[420px] "
					/>
				</div>
			</div>
		</section>
	);
};

export default ServicesHero;
