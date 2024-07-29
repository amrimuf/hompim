"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="p-2 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition"
					aria-label="Back to Top"
				>
					<ChevronUp className="w-6 h-6 text-white" />
				</button>
			)}
		</div>
	);
};

export default BackToTopButton;
