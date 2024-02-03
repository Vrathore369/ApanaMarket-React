import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import empty from "../images/emptycart.png";
import payment from "../images/payments.svg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
	const [Products, setProducts] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/cart/");
				setProducts(response.data);
				console.log(response.data);
				console.log(response.data.cart_value);
				console.log(response.data.cart_items[0].product.id);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	if (Products) {
		return (
			<>
				{Products.cart_value === 0 ? (
					<div className="empty-cart text-center">
						<h1 className="text-center my-3">Cart is Empty</h1>
						<img className="mb-2 cart-avatar" src={empty} alt="" />
					</div>
				) : (
					<div>
						<div className="container my-3">
							<div className="row">
								<h1 className="text-center mb-3">Shopping Cart</h1>
								<div className="col-md-8">
									<div className="card">
										<div className="card-body">
											<h3>Cart</h3>
											{Products.cart_items.map((product) => (
												<div className="row" key={product.id}>
													<hr />
													<a
														href={`/product-detail/${product.product.title}`}
														className="col-md-3 text-center align-self-center"
													>
														<div
															style={{
																height: "180px",
																width: "auto",
																position: "relative",
																margin: "0 auto",
															}}
														>
															<img
																src={`http://127.0.0.1:8000${product.product.product_image}`}
																alt=""
																className="img-fluid p-img"
															/>
														</div>
													</a>
													<div className="col-md-9">
														<div>
															<a
																className="heading"
																href={`/product-detail/${product.product.title}`}
															>
																<h5>{product.product.title}</h5>
															</a>
															<div className="my-1">
																<label className="text-primary">
																	Description:
																</label>
																{product.product.description.length > 175 ? (
																	<span className="ms-2 mb-2 small">
																		{product.product.description.slice(0, 175)}
																		...
																	</span>
																) : (
																	<span className="ms-2 mb-2 small">
																		{product.product.description}
																	</span>
																)}
																<br />
																<label className="text-primary">
																	Ratings & Reviews:
																</label>
																<span className="badge bg-success small ms-2">
																	{product.product.rating} &#9733;
																</span>
																<span className="small ms-2">
																	{product.product.review} Reviews
																</span>
															</div>
															<div className="mb-2">
																<label htmlFor="quantity">Quantity:</label>
																<form
																	action={`/minus-cart/${product.product.id}`}
																	className="d-inline"
																>
																	<input
																		type="hidden"
																		name="prod_id"
																		value={product.product.id}
																		id="prod_id"
																	/>
																	<button
																		type="submit"
																		className="btn text-dark"
																	>
																		<FontAwesomeIcon icon={faMinusSquare} />
																	</button>
																</form>
																<span id="quantity">{product.quantity}</span>
																<form
																	action={`/plus-cart/${product.product.id}`}
																	className="d-inline"
																>
																	<input
																		type="hidden"
																		name="prod_id"
																		value={product.product.id}
																		id="prod_id"
																	/>
																	<button
																		type="submit"
																		className="btn text-dark"
																	>
																		<FontAwesomeIcon icon={faPlusSquare} />
																	</button>
																</form>
															</div>
															<div className="d-flex justify-content-between">
																<form
																	action={`/remove-from-cart/${product.product.id}`}
																	className="d-inline"
																>
																	<input
																		type="hidden"
																		name="prod_id"
																		value={product.product.id}
																		id="prod_id"
																	/>
																	<button
																		type="submit"
																		className="btn btn-md btn-danger mr-3"
																	>
																		Remove item
																	</button>
																</form>
																<p>
																	<span className="fs-4 mx-2">
																		₹{product.product.discounted_price}
																	</span>
																	<span className="fs-5 text-secondary text-decoration-line-through">
																		{product.product.selling_price}
																	</span>
																</p>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="card">
										<div className="card-body">
											<h3>The Total Amount of</h3>
											<ul className="list-group">
												<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 fs-5">
													Maximum Retail Price (
													{Products.cart_value === 1
														? `${Products.cart_value} item`
														: `${Products.cart_value} items`}
													)<span>₹{Products.total_price}</span>
												</li>
												<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 fs-5">
													Price (
													{Products.cart_value === 1
														? `${Products.cart_value} item`
														: `${Products.cart_value} items`}
													)<span>₹{Products.product_price}</span>
												</li>
												<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 fs-5">
													Discount
													<span class="text-success2">
														- ₹{Products.discount_price}
													</span>
												</li>
												<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 fs-5">
													Delivery Charges
													{Products.shipping_price === 0 ? (
														<span className="text-success2">Free</span>
													) : (
														<span>₹{Products.shipping_price}</span>
													)}
												</li>
												<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 fs-5">
													<div>
														<span className="fw-semibold">Total</span>{" "}
														<small>(including GST)</small>
													</div>
													<span>
														<div className="fw-medium fs-4">
															₹{Products.final_price}
														</div>
													</span>
												</li>
											</ul>
											<div className="d-grid">
												<Link to="/checkout" className="btn btn-primary">
													Place Order
												</Link>
											</div>
										</div>
										<h5 className="text-center text-success2">
											You will save ₹{Products.discount_price} on this order
										</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<div className="card">
										<div className="card-body">
											<h5 className="mb-4">We accept</h5>
											<img
												src={payment}
												alt=""
												className="img-fluid"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
	return <p>Loading...</p>;
};

export default Cart;
