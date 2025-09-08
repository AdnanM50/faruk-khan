
import React from 'react';
import {  ArrowUpRight } from 'lucide-react';

export interface ServiceCardProps {
	icon: string;
	title: string;
	desc: string;
	onClick?: () => void;
    data: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => (
	<div
		className="flex flex-col h-full rounded-2xl border border-[#E2DADA] px-4 py-8 md:px-8 md:py-[60px] max-w-full sm:max-w-[357px] items-start transition-shadow duration-200 hover:border-black shadow-[0_2px_16px_0_rgba(0,0,0,0.04)]"
	>
		<div className="mb-4">
			<img src={data.icon} alt={data.title} className="w-11 h-11 object-contain" />
		</div>
		<h3 className="text-lg font-semibold mb-2 text-black">{data.title}</h3>
		<p className="text-sm text-[#7C6F6F] mb-6">{data.desc}</p>
		   <button
			   className="mt-auto flex items-center gap-1 text-sm font-medium text-black border rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
			   onClick={data.onClick}
			   type="button"
		   >
			   Get a quote{' '}
			   <span className="inline-block">
				   <ArrowUpRight size={16} />
			   </span>
		   </button>
	</div>
);

export default ServiceCard;
