"use client";

import { useParams } from "next/navigation";

export default function Case() {
	const params = useParams();
	return (
		<main className="container ">
			<p>{params.case}</p>
		</main>
	);
}
