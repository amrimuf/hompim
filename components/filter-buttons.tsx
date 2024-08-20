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
					className={`
      px-4 py-2 rounded-md
      font-medium text-sm
      transition-all duration-200 ease-in-out
      transform hover:-translate-y-0.5 active:translate-y-0.5
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
      ${
			currentFilter === filter.slug
				? "bg-secondary shadow-lg scale-105"
				: "bg-primary/10 text-primary-700 hover:bg-primary/20 hover:shadow-md"
		}
      ${
			currentFilter === filter.slug
				? "border-b-4 border-secondary-dark active:border-b-0"
				: "border-b-4 border-primary/20 active:border-b-0"
		}
    `}
					onClick={() => handleFilterChange(filter.slug)}
				>
					{filter.name}
				</button>
			))}
		</div>
	);
};

export default FilterButtons;
