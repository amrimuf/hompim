"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { slides } from "@/lib/dummy-data";
import ScrollDownAnimation from "./scroll-down";

const Hero: React.FC = () => {
	return (
		<div
			className="relative flex flex-col items-center justify-around p-2"
			style={{ height: "calc(100vh - 4rem)" }}
		>
			<div className="w-full max-w-7xl mx-auto">
				<Swiper
					onSwiper={(swiper) => console.log(swiper)}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 4000 }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					pagination={{ clickable: true }}
					modules={[Autoplay, Pagination, Navigation]}
					className="rounded-xl overflow-hidden"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="relative w-full h-[70vh]">
								<Image
									src={slide.src}
									alt={`Slide ${index + 1}`}
									layout="fill"
									objectFit="cover"
								/>
								<div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-20 rounded-lg">
									<h2 className="text-4xl text-white font-bold mb-4 text-center md:text-5xl">
										{slide.title}
									</h2>
									<p className="text-lg text-white text-center md:text-xl max-w-md">
										{slide.description}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
			<ScrollDownAnimation />
		</div>
	);
};

export default Hero;
