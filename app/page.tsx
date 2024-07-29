"use client";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Works from "@/components/works";

export default function Home() {
	return (
		<div>
			<Hero />

			<Works />

			<Gallery />
		</div>
	);
}
