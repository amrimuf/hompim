import { features } from "@/lib/dummy-data";
import { useEffect, useState } from "react";
import Section from "./section";
import Card from "./card";

const Works: React.FC = () => {
	const visibleCount = 3;

	const [filterType, setFilterType] = useState<string>("service");
	const [filteredFeatures, setFilteredFeatures] = useState(features);
	const [displayedFeatures, setDisplayedFeatures] = useState(
		features.slice(0, visibleCount)
	);

	// Update the filtered features whenever the filterType changes
	useEffect(() => {
		if (filterType) {
			setFilteredFeatures(
				features.filter((feature) => feature.type === filterType)
			);
		} else {
			setFilteredFeatures(features);
		}
	}, [filterType]);

	// Update the displayed features based on the visible count
	useEffect(() => {
		setDisplayedFeatures(filteredFeatures.slice(0, visibleCount));
	}, [filteredFeatures, visibleCount]);

	const filterOptions = [
		{
			label: "Services",
			value: "service",
		},
		{
			label: "Products",
			value: "product",
		},
	];

	return (
		<Section
			id="features"
			title="Our Works"
			gradient="bg-gradient-to-r from-primary via-secondary to-primary"
		>
			{/* Filter Buttons */}
			<div className="flex justify-center gap-4 mb-8">
				{filterOptions.map((option) => (
					<button
						key={option.value}
						className={`px-4 py-2 rounded-md bg-white ${
							filterType === option.value
								? " border border-primary border-2"
								: "shadow"
						}`}
						onClick={() => setFilterType(option.value)}
					>
						{option.label}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{displayedFeatures.map((feature, index) => (
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
			{filteredFeatures.length > visibleCount && (
				<div className="flex justify-center mt-8">
					<a
						href={`/${filterType}s`}
						className="bg-primary text-white px-6 py-3 rounded text-center"
					>
						See More
					</a>
				</div>
			)}
		</Section>
	);
};

export default Works;
