import React from "react";

import "./DownIcon.css";

const DownIcon = ({ onClick, isUpIcon }) => {
	return (
		<div className="down-icon-container" onClick={onClick}>
			<div className={`down-icon ${isUpIcon ? "up-icon" : ""}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="icon"
				>
					<path
						fillRule="evenodd"
						d="M12 3.75a.75.75 0 01.75.75v11.25l4.768-4.768a.75.75 0 011.06 1.06l-6.25 6.25a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 111.06-1.06l4.768 4.768V4.5a.75.75 0 01.75-.75z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default DownIcon;
