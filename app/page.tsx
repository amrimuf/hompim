"use client";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Works from "@/components/works";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Hero />

			<Works />

			<Testimonial />
		</React.Fragment>
	);
}
