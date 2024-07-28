// components/Card.tsx
import Image from "next/image";
import React from "react";

interface CardProps {
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, title, description }) => {
	return (
		<div className="text-center p-4 bg-white rounded-xl shadow-md">
			<Image
				src={imgSrc}
				alt={imgAlt}
				width={150}
				height={150}
				className="mx-auto"
			/>
			<h3 className="text-xl font-bold mt-4">{title}</h3>
			<p className="mt-2">{description}</p>
		</div>
	);
};

export default Card;
