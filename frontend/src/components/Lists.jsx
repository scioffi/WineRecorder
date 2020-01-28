import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Lists extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fetching: true,
			lists: []
		}
	}

	async componentDidMount() {
		const response = await fetch(`${window.wines.hostname}/getAllLists`);
		const json = await response.json();

		this.setState({
			fetching: false,
			lists: json
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.fetching && (
					<div>Loading...</div>
				)}

				{!this.state.fetching && this.state.lists && (
					<React.Fragment>
						<ul>
							{this.state.lists.map((item, index) => {
								return (
									<li key={index}>
										<Link to={`/List/${item.id}`}>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
						<br /><br />
						<Link to="/NewTasting">+ New Tasting</Link>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default Lists;