import React from "react";

const WavyDivider = ({
	bgColor = "white",
	fillColor = "#FF5733",
	height = "h-24",
}) => {
	return (
		<div className={`relative ${height} bg-${bgColor}`}>
			<svg
				className="absolute bottom-0 w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				preserveAspectRatio="none"
			>
				<path
					fill={fillColor}
					fillOpacity="1"
					d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</div>
	);
};

export default WavyDivider;
