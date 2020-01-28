import React from "react";
import styled from "styled-components";

class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fetching: true,
			list: {},
			list_items: []
		};
	}

	async componentDidMount() {
		const list_id = this.props.match.params.list_id;

		const response = await fetch(`${window.wines.hostname}/getList/${list_id}`);
		const json = await response.json();

		const response2 = await fetch(`${window.wines.hostname}/getListTastings/${list_id}`);
		const json2 = await response2.json();

		this.setState({
			fetching: false,
			list: json,
			list_items: json2
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.fetching && (
					<div>Loading...</div>
				)}

				{!this.state.fetching && this.state.list &&(
					<React.Fragment>
						Not yet
					</React.Fragment>
				)}
			</React.Fragment>
		)
	}
}

export default List;