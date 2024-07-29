"use client";

import { useParams } from "next/navigation";

export default function Product() {
	const params = useParams();
	const { product } = params;
	return (
		<main className="container">
			<p>{product}</p>
		</main>
	);
}
