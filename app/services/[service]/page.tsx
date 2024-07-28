"use client";

import { useParams } from "next/navigation";

export default function Service() {
	const params = useParams();
	const { service } = params;
	return (
		<main className="container pt-96">
			<p>{service}</p>
		</main>
	);
}
