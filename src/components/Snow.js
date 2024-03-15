import React from "react";

import "./Snow.css";

const SnowFlake = ({ color, size, positionX, positionY }) => {
	const snowflakeStyle = {
		position: "fixed",
		color,
		fontSize: `${size * 2}px`,
		top: `${positionY}vh`,
		left: `${positionX}vw`,
		animationName: "rain",
		animationDuration: `${Math.random() * 5 + 5}s`,
		animationTimingFunction: "linear",
		animationIterationCount: "infinite",
		transform: "rotate(45deg)",
		zIndex: 9999,
	};

	return <span style={snowflakeStyle}>&#10052;</span>;
};

const SnowfallOverlay = () => {
	const snowflakes = [];

	for (let i = 0; i < 300; i++) {
		const size = Math.random() * 5 + 2;
		const positionX = Math.random() * 100;
		const positionY = Math.random() * 100;

		snowflakes.push(
			<SnowFlake
				key={i}
				color="gray"
				size={size}
				positionX={positionX}
				positionY={positionY}
			/>,
		);
	}

	return <div className="snowfall-overlay">{snowflakes}</div>;
};

export default SnowfallOverlay;
