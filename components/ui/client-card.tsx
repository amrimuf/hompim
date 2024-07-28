import React from "react";
import Image from "next/image";

interface CardProps {
	quote: string;
	imageSrc: string;
	imageAlt: string;
	author: string;
}

const ClientCard: React.FC<CardProps> = ({
	quote,
	imageSrc,
	imageAlt,
	author,
}) => {
	return (
		<div className="bg-white w-96 p-4 rounded-xl shadow border border-2 border-primary">
			<p className="text-lg italic">{quote}</p>
			<div className="flex items-center mt-4">
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={30}
					height={30}
					className="rounded-full"
				/>
				<footer className="text-right ml-2">- {author}</footer>
			</div>
		</div>
	);
};

export default ClientCard;
