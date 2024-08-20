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
		<Section
			id="testimonial"
			title="What Our Clients Are Saying"
			fullWidth={true}
		>
			<div className="overflow-hidden relative ">
				<Marquee
					pauseOnHover={true}
					speed={90}
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
