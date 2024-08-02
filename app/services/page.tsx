import React from "react";
import { works } from "@/lib/dummy-data";
import ServiceSection from "@/components/service-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Service",
};

const ServicesPage: React.FC = () => {
	return (
		<div>
			<ServiceSection
				services={works}
				filterType="service"
				subtypeSlug={null}
			/>
		</div>
	);
};

export default ServicesPage;
