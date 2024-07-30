import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
	id?: string;
	className?: string;
	title?: string;
	gradient?: string;
	children: React.ReactNode;
	fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
	id,
	title,
	children,
	className,
	gradient,
	fullWidth,
}) => {
	return (
		<section
			id={id}
			className={cn("py-16", gradient ? gradient : "bg-white", className)}
		>
			{title && (
				<h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
			)}
			<div
				className={cn(" mx-auto", {
					"container max-w-7xl": !fullWidth,
				})}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
