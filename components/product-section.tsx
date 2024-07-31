import React from "react";
import Card from "./card";

interface ProductSectionProps {
	products: any[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
	const filteredProducts = products.filter(
		(product) => product.type === "product"
	);

	return (
		<main className="container mx-auto p-4 ">
			<h2 className="text-3xl font-bold mb-6 text-center">Product</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{filteredProducts.map((product, index) => (
					<Card
						key={index}
						imgSrc={product.imageSrc}
						imgAlt={product.imageAlt}
						title={product.title}
						description={product.description}
						type={product.type}
						slug={product.slug}
					/>
				))}
			</div>
		</main>
	);
};

export default ProductSection;
