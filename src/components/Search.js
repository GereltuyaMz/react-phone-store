import React, { Component } from "react";

export default class Search extends Component {
	state = {
		value: "",
	};

	productSearch = (event) => {
		this.setState(() => {
			return { value: event.target.value };
		});
	};
	render() {
		console.log("value ", this.state.value);
		return (
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">Search product</span>
				</div>
				<input
					type="text"
					className="form-control"
					value={this.state.value}
					onChange={this.productSearch}
				/>
			</div>
		);
	}
}
