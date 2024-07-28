import React from "react";
import Lottie from "react-lottie";
import animationData from "@/public/scroll.json";

const ScrollDownAnimation: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleScroll = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	return (
		<div className="cursor-pointer" onClick={handleScroll}>
			<Lottie options={defaultOptions} height={50} width={50} />
		</div>
	);
};

export default ScrollDownAnimation;
