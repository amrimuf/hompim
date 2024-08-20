"use client";
import WavyDivider from "@/components/divider";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Works from "@/components/works";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Hero />
			<WavyDivider bgColor="white" fillColor="#d2ff58" />
			<Works />
			<WavyDivider bgColor="secondary" fillColor="#fff" />
			<Testimonial />
		</React.Fragment>
	);
}
