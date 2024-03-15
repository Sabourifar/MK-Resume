import React from "react";

import "./Navbar.css";

const Navbar = ({ isDarkMode, toggleTheme }) => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className={isDarkMode ? "dark" : "light"}>
			<ul>
				<li>
					<a href="#home" onClick={() => scrollToSection("titlesection")}>
						Home
					</a>
				</li>
				<li>
					<a href="#about" onClick={() => scrollToSection("aboutsection")}>
						About
					</a>
				</li>
				<li>
					<a href="#skills" onClick={() => scrollToSection("skillsection")}>
						Skills
					</a>
				</li>
				<li>
					<button onClick={toggleTheme}>Change Theme</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
