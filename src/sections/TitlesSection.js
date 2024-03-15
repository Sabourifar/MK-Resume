import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";

import "./TitlesSection.css";

class TitlesSection extends Component {
	render() {
		const { isDarkMode } = this.props;

		return (
			<div
				id="titlesection"
				className={`my-component ${isDarkMode ? "dark" : "light"}`}
			>
				<Fullpage id="home" className="first">
					<h1 className="title">{data.title}</h1>
					<div>
						<h2>{data.subtitle}</h2>
					</div>
					<div className="icons-wrapper">
						{Object.keys(data.links).map((key) => {
							return (
								<div className="icon">
									<SocialIcon url={data.links[key]} />
								</div>
							);
						})}
					</div>
				</Fullpage>
			</div>
		);
	}
}

export default TitlesSection;
