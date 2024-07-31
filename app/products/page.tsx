import ProductSection from "@/components/product-section";
import { works } from "@/lib/dummy-data";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Product",
	description: "Your Description",
};

export default function Product() {
	return <ProductSection products={works}></ProductSection>;
}
