import React from "react";
import Image from "next/image";

interface CardProps {
	quote: string;
	imageSrc: string;
	imageAlt: string;
	author: string;
	company: string;
}

const ClientCard: React.FC<CardProps> = ({
	quote,
	imageSrc,
	imageAlt,
	author,
	company,
}) => {
	return (
		<div className="bg-white w-60 sm:w-96 p-6 rounded-xl shadow-lg border border-2 border-primary">
			<p className="text-lg italic text-gray-700">{quote}</p>
			<div className="flex items-center mt-6">
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={50}
					height={50}
					className="rounded-full border-2 border-primary"
				/>
				<div className="ml-4">
					<p className="font-semibold text-gray-900">{author}</p>
					<p className="text-sm text-gray-600">{company}</p>
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
