"use client";

import React from "react";
import { works } from "@/lib/dummy-data";
import ServiceSection from "@/components/service-section";

interface SectionProps {
	params: { service: string };
}

const ServiceSubtypePage: React.FC<SectionProps> = ({ params }) => {
	const subTypeSlug = params.service;
	return (
		<div>
			<ServiceSection
				services={works}
				filterType="service"
				subtypeSlug={subTypeSlug}
			/>
		</div>
	);
};

export default ServiceSubtypePage;
