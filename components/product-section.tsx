import React from "react";
import Card from "./card";

interface FeatureSectionProps {
	products: any[];
}

const ProductSection: React.FC<FeatureSectionProps> = ({ products }) => {
	const filteredWorks = products.filter(
		(product) => product.type === "product"
	);

	return (
		<main className="container mx-auto p-4 ">
			<h2 className="text-3xl font-bold mb-6 text-center">Product</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{filteredWorks.map((feature, index) => (
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

export default ProductSection;
