"use client";

import React, { useState } from "react";
import { features } from "@/lib/dummy-data";
import ServiceSection from "@/components/service-section";

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
