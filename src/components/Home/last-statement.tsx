import React from "react";

const fSign = "/sign.png";



const LastStatement = () => {
	return (
		<section className="w-full bg-white flex flex-col items-center justify-center py-12 px-4 min-h-[350px]">
			<div className="max-w-[700px] text-center mx-auto text-[#222]">
				<div className="relative inline-block w-full max-w-[700px] mb-6 text-center">
					<span className="block text-[32px] font-normal italic leading-snug text-[#222] ">
						“SEO is a marathon, not a sprint. Be patient, be consistent, and watch your brand blossom with the power of organic growth.”
					</span>
					<img
						src="/quote-down-circle.png"
						alt="Quote Decorative"
						className="absolute pointer-events-none select-none z-10 right-2 bottom-[-60px] w-24 h-24 sm:right-6 sm:bottom-[-104px] sm:w-40 sm:h-40 md:right-10 md:bottom-[-104px] md:w-44 md:h-44 lg:right-16 lg:bottom-[-120px] lg:w-48 lg:h-48"
					/>
				</div>
				<div className="flex items-center justify-center gap-2">
					<img
						src={fSign}
						alt="Faruk Khan signature"
						className="h-12 mx-auto"
					/>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-center md:gap-[80px] gap-5 mt-8">
				{[1, 2, 3, 4, 5].map((item, idx) => (
					<img
						key={"trustpilot-" + idx}
						src='/brands/Trustpilot.png'
						alt={`Trustpilot logo ${idx + 1}`}
						className='max-h-[108px] max-w-[108px] object-fill'
					/>
				))}
			</div>
		</section>
	);
};

export default LastStatement;
