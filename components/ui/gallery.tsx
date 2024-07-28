"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { galleryItems, testimonials } from "@/lib/dummy-data";
import Marquee from "react-fast-marquee";
import Section from "../Section";
import ClientCard from "./client-card";

const Gallery: React.FC = () => {
	return (
		<Section id="gallery" fullWidth={true}>
			<h2 className="text-3xl font-bold text-center mb-6">Testimonies</h2>
			<div className="overflow-hidden relative">
				<Marquee
					pauseOnHover={true}
					speed={150}
					gradient={false}
					loop={0}
					direction="left"
					play={true}
					delay={0}
				>
					<div className="flex gap-8 pl-8">
						{testimonials.map((testimonial, index) => (
							<div key={index}>
								<ClientCard
									key={index}
									quote={testimonial.quote}
									imageSrc={testimonial.imageSrc}
									imageAlt={testimonial.imageAlt}
									author={testimonial.author}
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</Section>
	);
};

export default Gallery;
