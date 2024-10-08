import { workFilters, works } from "@/lib/dummy-data";
import { useEffect, useState } from "react";
import Section from "./section-layout";
import Card from "./card";

const Works: React.FC = () => {
	const uniqueSubtypes = new Set(works.map((work) => work.type));

	const filteredWorkFilters = workFilters.filter((filter) =>
		uniqueSubtypes.has(filter.slug)
	);

	const visibleCount = 3;

	const [filterType, setFilterType] = useState<string>(
		filteredWorkFilters[0].slug
	);
	const [filteredWorks, setFilteredWorks] = useState(works);
	const [displayedWorks, setDisplayedWorks] = useState(
		works.slice(0, visibleCount)
	);

	// Update the filtered works whenever the filterType changes
	useEffect(() => {
		if (filterType) {
			setFilteredWorks(works.filter((work) => work.type === filterType));
		} else {
			setFilteredWorks(works);
		}
	}, [filterType]);

	// Update the displayed works based on the visible count
	useEffect(() => {
		setDisplayedWorks(filteredWorks.slice(0, visibleCount));
	}, [filteredWorks, visibleCount]);

	return (
		<Section
			id="works"
			title="Innovations We've Brought to Life"
			className="bg-secondary"
		>
			{/* Filter Buttons */}
			{filteredWorkFilters.length >= 2 && (
				<div className="flex justify-center mb-8">
					<div className="inline-flex p-1 rounded-full bg-white shadow-inner">
						{filteredWorkFilters.map((option) => (
							<button
								key={option.slug}
								className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
            ${
				filterType === option.slug
					? "bg-primary text-white shadow-md"
					: "text-gray-600 hover:text-gray-800"
			}
          `}
								onClick={() => setFilterType(option.slug)}
							>
								{option.label}
							</button>
						))}
					</div>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{displayedWorks.map((work, index) => (
					<Card
						key={index}
						imgSrc={work.imageSrc}
						imgAlt={work.imageAlt}
						title={work.title}
						description={work.description}
						type={work.type}
						slug={work.slug}
					/>
				))}
			</div>
			{filteredWorks.length > visibleCount && (
				<div className="flex justify-center mt-8">
					<a href={`/${filterType}s`} className="btn-secondary">
						See More
					</a>
				</div>
			)}
		</Section>
	);
};

export default Works;
