import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});
const Navbar = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.get("/api/user/");
        setCurrentUser(true);
        const response = await client.get("/api/auth/");
        setUserData(response.data);
      } catch (error) {
        setCurrentUser(false);
      }
    };
    fetchData();
  }, []);
  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
      setUserData(null);
      navigate("/")
    });
  }
  if (userData) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
          <div className="container-xxl">
            <Link className="navbar-brand" to="/">
              ApnaMarket
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="electronicsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Categories
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="electronicsDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/mobile">
                        Mobiles
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/laptop">
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fashion/mens">
                        Mens Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fashion/womens">
                        Women Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/grocery">
                        Grocery
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/homeappliances">
                        Home Appliances
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/electricappliances">
                        Electrical Appliances
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/toys">
                        Toys
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="electronicsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Electronics
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="electronicsDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/mobile">
                        Mobiles
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/laptop">
                        Laptops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/electricappliances">
                        Electrical Appliances
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    to="#"
                    id="fashionDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Fashion
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="fashionDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/fashion/mens">
                        Mens Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fashion/womens">
                        Women Fashion
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form action="/search" method="get" className="d-flex col-lg-5">
                <input
                  className="form-control me-2"
                  name="query"
                  id="query"
                  type="search"
                  placeholder="Search for products, brands & more"
                  aria-label="Search"
                />
                <button className="btn btn-warning" type="submit">
                  <i className="ri-search-line"></i>
                </button>
              </form>
              <ul className="navbar-nav mb-lg-0">
                {currentUser == true && currentUser && (
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle text-white"
                        to="#"
                        id="profileDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Welcome {userData.username}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="profileDropdown"
                      >
                        {userData.admin == 'True' && userData.admin && (
                          <li>
                            <Link className="dropdown-item" to="/admin">
                              Admin
                            </Link>
                          </li>
                        )}
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/orders">
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/changepassword">
                            Change Password
                          </Link>
                        </li>
                        <li>
                          <Link onClick={e => submitLogout(e)} className="dropdown-item" to="/logout">
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/cart" className="nav-link text-white">
                        {userData.product_count_in_cart !== null &&
                          userData.product_count_in_cart !== 0 && (
                            <span className="badge bg-danger mx-1">
                              {userData.product_count_in_cart}
                            </span>
                          )}
                        Cart <i className="ri-shopping-cart-2-line"></i>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">
            ApnaMarket
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="electronicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="electronicsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/mobile">
                      Mobiles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/laptop">
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fashion/mens">
                      Mens Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fashion/womens">
                      Women Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/grocery">
                      Grocery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/homeappliances">
                      Home Appliances
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/electricappliances">
                      Electrical Appliances
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/toys">
                      Toys
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="electronicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Electronics
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="electronicsDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/mobile">
                      Mobiles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/laptop">
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/electricappliances">
                      Electrical Appliances
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="fashionDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fashion
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="fashionDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/fashion/mens">
                      Mens Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fashion/womens">
                      Women Fashion
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form action="/search" method="get" className="d-flex col-lg-5">
              <input
                className="form-control me-2"
                name="query"
                id="query"
                type="search"
                placeholder="Search for products, brands & more"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                <i className="ri-search-line"></i>
              </button>
            </form>
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item mx-2">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/registration" className="nav-link text-white">
                    Registration
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
