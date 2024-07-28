"use client";

import { useParams } from "next/navigation";

export default function Case() {
	const params = useParams();
	return (
		<main className="container pt-96">
			<p>{params.case}</p>
		</main>
	);
}
