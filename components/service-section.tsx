import React from "react";
import Card from "./card";
import FilterButtons from "./filter-buttons";

interface servicesectionProps {
	services: any[];
	filterType: string | null;
	subtypeSlug: string | null;
}

const ServiceSection: React.FC<servicesectionProps> = ({
	services,
	filterType,
	subtypeSlug,
}) => {
	const filteredservices = services.filter(
		(service) =>
			(filterType ? service.type === filterType : true) &&
			(subtypeSlug ? service.subTypeSlug === subtypeSlug : true)
	);

	return (
		<main className="container mx-auto p-4">
			<h2 className="text-3xl font-bold mb-6 text-center">Service</h2>
			<FilterButtons currentFilter={subtypeSlug} />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{filteredservices.length > 0 ? (
					filteredservices.map((service, index) => (
						<Card
							key={index}
							imgSrc={service.imageSrc}
							imgAlt={service.imageAlt}
							title={service.title}
							description={service.description}
							type={service.type}
							slug={service.slug}
						/>
					))
				) : (
					<p className="text-center col-span-3">
						No services match the selected category.
					</p>
				)}
			</div>
		</main>
	);
};

export default ServiceSection;
