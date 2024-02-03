import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import payment from "../images/payments.svg";
const Footer = () => {
  // const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/user/");
  //       setUserData(response.data);
  //       console.log(response.data);
  //       console.log(response.data.product_count_in_cart);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);
  // if (userData) {
  return (
    <>
      <footer className="bg-navbar mt-5 pt-3 bd-footer bg-body-tertiary">
        <div className="container py-md-3 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <Link
                className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                to="/"
              >
                <span className="fs-5 text-white">ApnaMarket</span>
              </Link>
              <ul className="list-unstyled small">
                <li className="mb-2">ApnaMarket Internet Private Limited </li>
                <li className="mb-2">
                  Outer Ring Road, Shanti Nagar Mhow Gaon Mhow
                </li>
                <li className="mb-2">Indore, 453441, Madhya Pradesh, India</li>
                <li className="mb-2">CIN : U51109KA2012PTC066107</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
              {/* {userData.admin == true && userData.admin && ( */}
                <li className="mb-2">
                  <Link className="text-white" to="/admin">
                    Admin
                  </Link>
                </li>
              {/* )} */}
              {/* {userData.admin == false && !userData.admin && ( */}
                <li className="mb-2">
                  <Link className="text-white" to="/">
                    Home
                  </Link>
                </li>
                {/* )} */}
                <li className="mb-2">
                  <Link className="text-white" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/terms">
                    Terms &amp; Condition
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* {userData.user == true && userData.user && ( */}
            <div className="col-6 col-lg-2 mb-3">
              <h5>Account</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="text-white" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/address">
                    My Address
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/orders">
                    My Orders
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/changepassword">
                    Change Password
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* )} */}
            {/* {userData.user == false && !userData.user && ( */}
            <div className="col-6 col-lg-2 mb-3">
              <h5>Explore</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="text-white" to="/mobile">
                    Mobiles
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/laptop">
                    Laptops
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/fashion/mens">
                    Mens Fashion
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/fashion/womens">
                    Women Fashion
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/toys">
                    Toys
                  </Link>
                </li>
              </ul>
            </div>
            {/* )} */}
            <div className="col-6 col-lg-2 mb-3">
              <h5>Electronics</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/electricappliances/filter=Television"
                  >
                    Television
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/electricappliances/filter=Air_Conditioner"
                  >
                    Air Conditioner
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/electricappliances/filter=Refrigerator"
                  >
                    Refrigerator
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/electricappliances/filter=Washing_Machine"
                  >
                    Washing Machine
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/electricappliances/filter=Others"
                  >
                    More Appliances
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Grocery</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/grocery/filter=Snacks_&_Beverages"
                  >
                    Snacks &amp; Beverages
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/grocery/filter=Personal_&_Baby_Care"
                  >
                    Personal Care
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/grocery/filter=Household_Care"
                  >
                    Household Care
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white"
                    to="/grocery/filter=Packaged_Food"
                  >
                    Packaged Food
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-white" to="/grocery/filter=Foodgrains">
                    Foodgrains
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <small className="text-white text-center">
              Copyright © 2023 | Designed By ApnaMarket |{" "}
            </small>
            <img src={payment} className="img-fluid pb-2" height="2px" />
          </div>
        </div>
      </footer>
    </>
  );
  }
// };

export default Footer;
