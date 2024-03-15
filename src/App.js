import React, { Component } from "react";
import Navbar from "./components/Navbar";
import DownIcon from "./components/DownIcon";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import SnowfallOverlay from "./components/Snow";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSectionIndex: 0,
			isUpIcon: false,
			isDarkMode: false,
		};
		this.sections = ["titlesection", "aboutsection", "skillsection"];
		this.toggleTheme = this.toggleTheme.bind(this);
	}

	toggleTheme() {
		this.setState((prevState) => ({
			isDarkMode: !prevState.isDarkMode,
		}));
	}

	handleIconClick = () => {
		const { currentSectionIndex } = this.state;
		const { sections } = this;

		if (currentSectionIndex === sections.length - 1) {
			this.scrollToSection(sections[0]);
			this.setState({ currentSectionIndex: 0, isUpIcon: false });
		} else {
			const nextIndex = currentSectionIndex + 1;
			this.scrollToSection(sections[nextIndex]);
			this.setState((prevState) => ({
				currentSectionIndex: nextIndex,
				isUpIcon: nextIndex === sections.length - 1,
			}));
		}
	};

	scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	render() {
		const { isDarkMode, isUpIcon } = this.state;

		return (
			<div className={isDarkMode ? "dark" : "light"}>
				<Navbar toggleTheme={this.toggleTheme} isDarkMode={isDarkMode} />

				<TitlesSection id="titlesection" isDarkMode={isDarkMode} />
				<AboutSection id="aboutsection" isDarkMode={isDarkMode} />
				<SkillsSection id="skillsection" isDarkMode={isDarkMode} />

				<DownIcon
					onClick={this.handleIconClick}
					isUpIcon={isUpIcon}
					sections={this.sections}
				/>

				<SnowfallOverlay />
			</div>
		);
	}
}

export default App;
