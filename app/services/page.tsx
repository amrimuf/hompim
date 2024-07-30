import React, { useState } from "react";
import { features } from "@/lib/dummy-data";
import ServiceSection from "@/components/service-section";
import type { Metadata } from "next";
import { generateTitle } from "@/lib/metadata";

export const metadata: Metadata = {
	title: generateTitle("Service"),
	description: "Hompim's services.",
};

const ServicesPage: React.FC = () => {
	return (
		<div>
			<ServiceSection
				features={features}
				filterType="service"
				subtypeSlug={null}
			/>
		</div>
	);
};

export default ServicesPage;
