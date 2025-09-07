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
						className="absolute right-6 -bottom-26 w-40 h-40  pointer-events-none select-none"
						style={{zIndex: 1}}
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
			<div className="flex flex-wrap items-center justify-center gap-[80px] mt-8">
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
