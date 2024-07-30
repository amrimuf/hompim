"use client";

import React from "react";
import { usePathname, useParams } from "next/navigation";
import { features } from "@/lib/dummy-data";
import ServiceSection from "@/components/service-section";

const ServiceSubtypePage: React.FC = () => {
	const pathname = usePathname();
	const subTypeSlug = pathname.split("/").pop() || null;

	return (
		<div>
			<ServiceSection
				features={features}
				filterType="service"
				subtypeSlug={subTypeSlug}
			/>
		</div>
	);
};

export default ServiceSubtypePage;
