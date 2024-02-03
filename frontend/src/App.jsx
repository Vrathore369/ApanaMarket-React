import "./index.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Address from "./components/Address";
import Cart from "./components/Cart";
import ChangePassword from "./components/ChangePassword";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import ElectricalAppliances from "./components/ElectricAppliance";
import Grocery from "./components/Grocery";
import Home from "./components/Home";
import HomeAppliances from "./components/HomeAppliance";
import Invoice from "./components/Invoice";
import Laptop from "./components/Laptop";
import Login from "./components/Login";
import MensFashion from "./components/MensFashion";
import Mobile from "./components/Mobile";
import OrderHistory from "./components/OrderHistory";
import PrivacyPolicy from "./components/Privacy";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import Register from "./components/Registration";
import SearchResults from "./components/SearchResults";
import TermsAndConditions from "./components/Terms&Condition";
import ToysPage from "./components/Toys";
import WomenFashion from "./components/WomenFashion";
import NotFoundPage from "./components/404";
import Alert from "./components/Alert";
import SomeComponent from "./components/SomeComponent";

document.title = "ApnaMarket";
const RouteHandler = () => {
  const location = useLocation();
  const { productId } = useParams();
  const showNavbarAndFooterRoutes = [
    "/",
    "/login",
    "/registration",
    "/cart",
    "/about",
    "/address",
    "/changepassword",
    "/checkout",
    "/contact",
    "/electricappliances",
    `/product-detail/:title`,
    `/add-to-cart/:productId`,
    "/remove-from-cart/<int:pk>",
    "/plus-cart/<int:pk>",
    "/minus-cart/<int:pk>",
    "/remove/<int:pk>",
    "/buy",
    "/profile",
    "/address/remove/<int:pk>",
    "/orders",
    "/logout",
    "/mobile",
    `/mobile/:filter`,
    "/laptop",
    "/laptop/filter=<str:data>",
    "/fashion/mens",
    "/fashion/mens/filter=<str:data>",
    "/fashion/womens",
    "/fashion/womens/filter=<str:data>",
    "/grocery",
    "/grocery/filter=<str:data>",
    "/homeappliances",
    "/homeappliances/filter=<str:data>",
    "/electricappliances/filter=<str:data>",
    "/toys",
    "/toys/filter=<str:data>",
    "/payment",
    "/search",
    "/terms",
    "/privacy",
  ];
  // const shouldShowNavbarAndFooter =
  //   showNavbarAndFooterRoutes.includes(location.pathname) ||
  //   location.pathname.match(/^\/product-detail\/.*$/);
  
  return (
    <>
      {/* {shouldShowNavbarAndFooter && <Navbar />} */}
      { <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/electricappliances"
          element={<ElectricalAppliances />}
        />
        <Route
          exact
          path={`/product-detail/:title`}
          element={<ProductDetail />}
        />
        <Route
          exact
          path={`/add-to-cart/:productId`}
          element={<ProductDetail productId={productId} />}
        />
        {/* <Route exact path="/add-to-cart/<int:pk>" element={<Home />} /> */}
        {/* <Route exact path="/remove-from-cart/<int:pk>" element={<Home />} /> */}
        {/* <Route exact path="/plus-cart/<int:pk>" element={<Home />} /> */}
        {/* <Route exact path="/minus-cart/<int:pk>" element={<Home />} /> */}
        {/* <Route exact path="/remove/<int:pk>" element={<Home />} /> */}
        {/* <Route exact path="/buy" element={<Home />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route exact path="/address/remove/<int:pk>" element={<Home />} /> */}
        <Route exact path="/orders" element={<OrderHistory />} />
        {/* <Route exact path="/logout" element={<Home />} /> */}
        <Route exact path="/mobile" element={<Mobile />} />
        <Route exact path={`/mobile/:filter`} element={<Mobile />} />
        <Route exact path="/laptop" element={<Laptop />} />
        <Route exact path="/laptop/filter=<str:data>" element={<Laptop />} />
        <Route exact path="/fashion/mens" element={<MensFashion />} />
        <Route
          exact
          path="/fashion/mens/filter=<str:data>"
          element={<MensFashion />}
        />
        <Route exact path="/fashion/womens" element={<WomenFashion />} />
        <Route
          exact
          path="/fashion/womens/filter=<str:data>"
          element={<WomenFashion />}
        />
        <Route exact path="/grocery" element={<Grocery />} />
        <Route exact path="/grocery/filter=<str:data>" element={<Grocery />} />
        <Route exact path="/homeappliances" element={<HomeAppliances />} />
        <Route
          exact
          path="/homeappliances/filter=<str:data>"
          element={<HomeAppliances />}
        />
        <Route
          exact
          path="/electricappliances/filter=<str:data>"
          element={<ElectricalAppliances />}
        />
        <Route exact path="/toys" element={<ToysPage />} />
        <Route exact path="/toys/filter=<str:data>" element={<ToysPage />} />
        <Route exact path="/payment" element={<Home />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/terms" element={<TermsAndConditions />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/orders/download-invoice/1" element={<Invoice />} />
        <Route path="*" element={<NotFoundPage />} />
       </Routes>
      {<Footer />}
      {/* {shouldShowNavbarAndFooter && <Footer />} */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <RouteHandler />
    </Router>
  );
};

export default App;
