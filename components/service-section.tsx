import React from "react";
import Card from "./card";
import FilterButtons from "./filter-buttons";

interface FeatureSectionProps {
	features: any[];
	filterType: string | null;
	subtypeSlug: string | null ;
}

const ServiceSection: React.FC<FeatureSectionProps> = ({
	features,
	filterType,
	subtypeSlug,
}) => {
	const filteredFeatures = features.filter(
		(feature) =>
			(filterType ? feature.type === filterType : true) &&
			(subtypeSlug ? feature.subTypeSlug === subtypeSlug : true)
	);

	return (
		<main className="container mx-auto p-4">
			<h2 className="text-3xl font-bold mb-6 text-center">Service</h2>
			<FilterButtons currentFilter={subtypeSlug} />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{filteredFeatures.map((feature, index) => (
					<Card
						key={index}
						imgSrc={feature.imageSrc}
						imgAlt={feature.imageAlt}
						title={feature.title}
						description={feature.description}
						type={feature.type}
						slug={feature.slug}
					/>
				))}
			</div>
		</main>
	);
};

export default ServiceSection;
