"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "@/lib/dummy-data";
import Marquee from "react-fast-marquee";
import Section from "./section-layout";
import ClientCard from "./client-card";

const Testimonial: React.FC = () => {
	return (
		<Section id="testimonial" fullWidth={true}>
			<h2 className="text-3xl font-bold text-center mb-6">
				Testimonials
			</h2>
			<div className="overflow-hidden relative ">
				<Marquee
					pauseOnHover={true}
					speed={100}
					gradient={false}
					loop={0}
					direction="left"
					play={true}
					delay={0}
				>
					<div className="flex gap-8 pl-8 bg-secondary py-8">
						{testimonials.map((testimonial, index) => (
							<div key={index}>
								<ClientCard
									key={index}
									quote={testimonial.quote}
									imageSrc={testimonial.imageSrc}
									imageAlt={testimonial.imageAlt}
									author={testimonial.author}
									company={testimonial.company}
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</Section>
	);
};

export default Testimonial;
