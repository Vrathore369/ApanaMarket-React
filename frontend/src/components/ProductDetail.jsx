import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = ({productId}) => {
	const { title } = useParams();
  // const { productId } = useParams();
	const [productData, setProductData] = useState(null);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/product-detail/${title}/`
				);
				console.log(response.data);
				setProductData(response.data.products[0]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [title]);
	const addToCartHandler = async () => {
		try {
			const response = await axios.post(
				`http://localhost:8000/api/add-to-cart/${productId}/`,
				null,
				{
					withCredentials: true,
				}
			);
			console.log(response.data);
			setIsAddedToCart(true);
		} catch (error) {
			console.error("Error adding to cart:", error);
		}
	};
	if (!productData) {
		return <div>Loading...</div>;
	}
	if (productData) {
		return (
			<div className="container my-4">
				<div className="row">
					<div className="col-md-6 text-center align-self-center">
						<img src={productData.product_image} alt="" className="img-fluid" />
					</div>
					<div className="col-md-5 offset-md-1">
						<h2>{productData.title}</h2>
						<hr />
						<p>{productData.description}</p>
						<br />
						<div className="detailed_Rating">
							<span className="badge bg-success my-2">
								{productData.rating} &#9733;
							</span>
							<span className="product-review mx-2">
								{productData.review} Reviews
							</span>
						</div>
						<h4>
							Rs. {productData.discounted_price}
							<small className=" text-decoration-line-through mx-2">
								{productData.selling_price}
							</small>
						</h4>
						<br />
						<form method="post" action={`/add-to-cart/${productData.id}`} className="d-inline">
							<input type="hidden" value={productData.id} />
							{productData.is_in_cart === true ? (
								<a href="/cart" className="btn btn-warning shadow px-4 py-2">
									Go to Cart
								</a>
							) : (
								<button
									onSubmit={addToCartHandler}
									type="submit"
									className="btn btn-primary shadow px-4 py-2"
								>
									Add to Cart
								</button>
							)}
						</form>
						<form action="/buy/" className="d-inline">
							<input
								type="hidden"
								name="prod_id2"
								value={productData.id}
								id="prod_id2"
							/>
							<button
								type="submit"
								className="btn btn-danger shadow px-4 py-2 ms-4"
							>
								Buy Now
							</button>
						</form>
						<h5 className="mt-5">Available Offers</h5>
						<ul>
							<li>{productData.offer_1}</li>
							<li>{productData.offer_2}</li>
							<li>{productData.offer_3}</li>
							<li>{productData.offer_4}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
};

export default ProductDetail;
