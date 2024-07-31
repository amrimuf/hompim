"use client";

import { serviceFilters } from "@/lib/dummy-data";
import { useRouter } from "next/navigation";
import React from "react";

interface FilterButtonsProps {
	currentFilter: string | null;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter }) => {
	const router = useRouter();

	const handleFilterChange = (slug: string | null) => {
		const url = slug ? `/services/${slug}` : `/services`;
		router.push(url);
	};

	return (
		<div className="flex justify-center gap-4 mb-8 flex-wrap">
			{serviceFilters.map((filter) => (
				<button
					key={filter.slug}
					className={`px-4 py-2 rounded-md ${
						currentFilter === filter.slug
							? "bg-secondary"
							: "bg-primary/10 shadow-md"
					}`}
					onClick={() => handleFilterChange(filter.slug)}
				>
					{filter.name}
				</button>
			))}
		</div>
	);
};

export default FilterButtons;
