"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroSlides } from "@/lib/dummy-data";
import ScrollDownAnimation from "./scroll-down";
import { Mouse_Memoirs } from "next/font/google";
import { cn } from "@/lib/utils";
const mouse = Mouse_Memoirs({ subsets: ["latin"], weight: ["400"] });

const Hero: React.FC = () => {
	return (
		<section className="relative flex flex-col items-center justify-around gap-8 m-4 md:m-8 ">
			<div className="w-full mx-auto">
				<Swiper
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
					{heroSlides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="relative w-full h-[70vh]">
								<Image
									src={slide.src}
									alt={`Slide ${index + 1}`}
									layout="fill"
									objectFit="cover"
								/>
								<div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-secondary/20 rounded-lg ">
									<h2
										className={cn(
											"text-6xl md:text-8xl text-white font-bold mb-4 text-center",
											mouse.className
										)}
									>
										{slide.title}
									</h2>
									<p className="text-lg text-white text-center md:text-xl max-w-lg">
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
		</section>
	);
};

export default Hero;
