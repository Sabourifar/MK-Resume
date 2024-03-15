import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

import "./SkillsSection.css";

class AboutSection extends Component {
	constructor(props) {
		super(props);
		this.sectionRef = React.createRef();
	}
	render() {
		const { isDarkMode } = this.props;

		return (
			<div
				id="skillsection"
				className={`my-component ${isDarkMode ? "dark" : "light"}`}
			>
				<Fullpage id="skills" className="third">
					<h3 className="stitle">{data.sections[1].title}</h3>
					<div className="cards-wrapper">
						{data.sections[1].items.map((eachSkill) => {
							return <SkillCard skill={eachSkill} />;
						})}
					</div>
				</Fullpage>
			</div>
		);
	}
}

export default AboutSection;
