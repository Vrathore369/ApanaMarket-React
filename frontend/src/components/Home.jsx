import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner1 from "../images/banner/fashion.jpg";
import banner2 from "../images/banner/grocery.jpg";
import banner3 from "../images/banner/mobile.jpg";
import banner4 from "../images/banner/electronics.jpg";
import payment1 from "../images/payavail/cc.jpg";
import payment2 from "../images/payavail/upi.jpg";
import payment3 from "../images/payavail/nb.jpg";
import payment4 from "../images/payavail/bj.jpg";
// import Alert from "./Alert";
const Home = () => {
	const [Products, setProducts] = useState(null);
	const [Mobile, setMobile] = useState(null);
	const [Fashion, setFashion] = useState(null);
	const [Electronic, setElectronic] = useState(null);
	const [Grocery, setGrocery] = useState(null);
	const [Home, setHome] = useState(null);
	const owlRef = useRef();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/home/");
				setProducts(response.data.products);
				setMobile(response.data.categories.M);
				setFashion(response.data.categories.MF, response.data.categories.WF);
				setElectronic(response.data.categories.E);
				setGrocery(response.data.categories.G);
				setHome(response.data.categories.H);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	const owlOptions = {
		loop: true,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				autoplay: true,
			},
			600: {
				items: 3,
				nav: true,
				autoplay: true,
			},
			1000: {
				items: 5,
				nav: true,
				loop: true,
				autoplay: true,
			},
		},
	};
	useEffect(() => {
		if (owlRef.current) {
			owlRef.current.on("changed", (event) => {});
		}
	}, []);
	if (Products && Mobile && Fashion && Grocery && Electronic && Home) {
		return (
			<>
				{/* <Alert messages={messages}/> */}
				<div>
					<div
						id="carouselExampleControls"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<Link to="/fashion/womens">
									<img src={banner1} className="d-block w-100" />
								</Link>
							</div>
							<div className="carousel-item ">
								<Link to="/grocery">
									<img src={banner2} className="d-block w-100" />
								</Link>
							</div>
							<div className="carousel-item ">
								<Link to="/mobile">
									<img src={banner3} className="d-block w-100" />
								</Link>
							</div>
							<div className="carousel-item ">
								<Link to="/electricappliances">
									<img src={banner4} className="d-block w-100" />
								</Link>
							</div>
						</div>
						<Link
							className="carousel-control-prev"
							to="#carouselExampleControls"
							role="button"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</Link>
						<Link
							className="carousel-control-next"
							to="#carouselExampleControls"
							role="button"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</Link>
					</div>
					<div className="container">
						<div className="row my-2 bg-danger text-center p-5 text-white border-bottom shadow">
							<h1>SALE IS LIVE NOW</h1>
							<span>
								5% Instant Discount on Axis Bank Credit and Debit Card
							</span>
							<small className="fw-lighter">
								Term and Condition Applied (For details visit Bank's official
								Website)
							</small>
						</div>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Deals of The Day</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success mx-2">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
					<div className="container my-5">
						<div className="row">
							<div className="col-sm-3">
								<div className="card mb-3">
									<div className="card-body">
										<img src={payment1} className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="card mb-3">
									<div className="card-body">
										<img src={payment2} className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="card mb-3">
									<div className="card-body">
										<img src={payment3} className="img-fluid" />
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="card mb-3">
									<div className="card-body">
										<img src={payment4} className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Top Deals on Mobiles</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Mobile.products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Deals on Fashion</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Fashion.products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Best in Electronics</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Electronic.products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Deals on Grocery</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Grocery.products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
					<div className="m-3">
						<h2 className="text-center mt-5">Deals on Home Appliances</h2>
						<OwlCarousel
							className="owl-carousel"
							id="slider1"
							{...owlOptions}
							ref={owlRef}
						>
							{Home.products.map((product) => (
								<div key={product.id} className="home-slide-row">
									<div className="home-product-img">
										<Link
											to={`/product-detail/${product.title}`}
											className="btn prod-con"
										>
											<div
												className="img-main"
												style={{
													height: "180px",
													width: "180px",
													position: "relative",
													margin: "0 auto",
												}}
											>
												<img
													src={product.product_image}
													className="p-img"
													alt=""
												/>
											</div>
											<div className="product-desc">
												<span className="product-title">{product.title}</span>
												<span className="badge bg-success">
													{product.rating} &#9733;
												</span>
												<span className="product-review">{product.review}</span>
											</div>
											<div className="product-desc2">
												<span className="product-price">
													₹{product.discounted_price}
												</span>
												<span className="product-price2">
													₹{product.selling_price}
												</span>
											</div>
										</Link>
									</div>
								</div>
							))}
						</OwlCarousel>
					</div>
				</div>
			</>
		);
	}
	return <p>Hello</p>;
};

export default Home;
