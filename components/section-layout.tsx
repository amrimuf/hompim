import { cn } from "@/lib/utils";
import { Mouse_Memoirs } from "next/font/google";
import React from "react";
const mouse = Mouse_Memoirs({ subsets: ["latin"], weight: ["400"] });

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
			className={cn("", gradient ? gradient : "bg-white", className)}
		>
			{title && (
				<h2
					className={cn(
						"text-4xl md:text-5xl font-bold mb-8 px-4 text-center text-gray-800 ",
						mouse.className
					)}
				>
					{title}
				</h2>
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
