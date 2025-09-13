const fSign = "/sign.png";



const LastStatement = () => {
	// Array of 5 image objects for logos
	const logos = [
		{ src: '/brands/Trustpilot.png', alt: 'Trustpilot logo 1' },
		{ src: '/brands/Trustpilot_Logo1.png', alt: 'Trustpilot logo 2' },
		{ src: '/brands/clutch-co-vector-logo 1.png', alt: 'Trustpilot logo 3' },
		{ src: '/brands/Linknews24-bd.png', alt: 'Trustpilot logo 4' },
		{ src: '/brands/Trustpilot_Logo_(2022) 3.png', alt: 'Trustpilot logo 5' },
	];

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
						className="absolute pointer-events-none select-none z-10 right-2 -bottom-[60px] w-24 h-24 sm:right-6 sm:bottom-[-104px] sm:w-40 sm:h-40 md:right-10 md:bottom-[-104px] md:w-44 md:h-44 lg:-right-10 lg:bottom-[-120px] lg:w-48 lg:h-48"
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
				{logos.map((logo, idx) => (
					<img
						key={"trustpilot-" + idx}
						src={logo.src}
						alt={logo.alt}
						className='max-h-[108px] max-w-[108px] object-fill'
					/>
				))}
			</div>
		</section>
	);
};

export default LastStatement;
