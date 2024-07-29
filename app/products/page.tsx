"use client";

import ProductSection from "@/components/product-section";
import { features } from "@/lib/dummy-data";

export default function Product() {
	return <ProductSection products={features}></ProductSection>;
}
