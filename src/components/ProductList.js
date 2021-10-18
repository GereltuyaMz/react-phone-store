import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
	state = {
		searchTerm: "",
	};

	productSearch = (event) => {
		this.setState(() => {
			return { searchTerm: event.target.value };
		});
	};

	render() {
		return (
			<>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">Search product</span>
							</div>
							<input
								type="text"
								className="form-control"
								value={this.state.searchTerm}
								onChange={this.productSearch}
								placeholder="search product"
							/>
						</div>
						<div className="row">
							<ProductConsumer>
								{(value) => {
									return value.products.filter((product) => {
										if (this.state.searchTerm === "") {
											return product;
										} else if (product.title.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())) {
											return product;
										}
									}).map((product) => {
										return <Product key={product.id} product={product} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</>
		);
	}
}
