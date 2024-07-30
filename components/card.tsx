import Image from "next/image";
import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface CardProps {
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	type: string;
	slug: string;
}

const Card: React.FC<CardProps> = ({
	imgSrc,
	imgAlt,
	title,
	description,
	type,
	slug,
}) => {
	return (
		<div className="relative group bg-white rounded-xl shadow-md overflow-hidden">
			{/* Image Container */}
			<div className="relative w-full h-96">
				<Image
					src={imgSrc}
					alt={imgAlt}
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* External Link Button */}
			<Link
				href={`/${slug}`}
				target="_blank"
				rel="noopener noreferrer"
				className="absolute top-4 right-4 bg-white text-primary p-2 rounded-full shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-all duration-500"
			>
				<ExternalLink className="h-6 w-6" />
			</Link>

			{/* Title */}
			<h3 className="absolute bottom-4 left-4 md:text-xl font-bold text-primary bg-white bg-opacity-80 p-2 mr-4 rounded-lg shadow-md z-10">
				{title}
			</h3>

			{/* Overlay */}
			<div className="absolute inset-0 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-0">
				<div className="text-center text-primary">
					<p className="text-lg">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
