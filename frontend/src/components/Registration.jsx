import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "./Alert";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});
const Registration = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState();
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  // const [alertData, setAlertData] = useState({
  //   tag: "",
  //   message: "",
  //   visible: false,
  // });
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
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await client.post("/api/register/", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        confirmpassword: confirmpassword
      });
      const loginResponse = await client.post("/api/login/", {
        username: username,
        password: password
      });
      navigate("/")
      window.location.reload();
      if (registerResponse && loginResponse) {
        setCurrentUser(true);
      }
    } catch (error) {
      console.error('Error during registration and login:', error);
    }
  };
  // const closeAlert = () => {
  //   setAlertData({
  //     tag: "",
  //     message: "",
  //     visible: false,
  //   });
  // };
  const pass1=()=> {
    var password = document.getElementById("password");
    let eyeIcon = document.getElementById("togglePassword");
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.classList.remove("ri-eye-fill");
      eyeIcon.classList.add("ri-eye-off-fill");
    } else {
      password.type = "password";
      eyeIcon.classList.remove("ri-eye-off-fill");
    eyeIcon.classList.add("ri-eye-fill");
    }
  }
  const pass2=()=> {
    var password = document.getElementById("confirmpassword");
    let eyeIcon = document.getElementById("togglePassword2");
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.classList.remove("ri-eye-fill");
      eyeIcon.classList.add("ri-eye-off-fill");
    } else {
      password.type = "password";
      eyeIcon.classList.remove("ri-eye-off-fill");
    eyeIcon.classList.add("ri-eye-fill");
    }
  }
  if (!currentUser) {
  return (
    <>
      {/* {alertData.visible && (
        <Alert
          messages={[{ tags: alertData.tag, message: alertData.message }]}
          onClose={closeAlert}
        />
      )} */}
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 offset-md-3">
            <h3>Customer Registration</h3>
            <hr />
            <form onSubmit={e => handleRegister(e)} noValidate className="my_form3 shadow p-5">
              <div className="mb-3">
                <h5 htmlFor="username" className="form-label">
                  Username
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Choose a unique username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <h5 htmlFor="fname" className="form-label">
                    First Name
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <h5 htmlFor="lname" className="form-label">
                    Last Name
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your last name"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <h5 htmlFor="email" className="form-label">
                  Email
                </h5>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <h5 htmlFor="pass1" className="form-label">
                  Password
                </h5>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Choose Your Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <i
                  className="ri-eye-fill"
                  id="togglePassword"
                  onClick={pass1}
                />
              </div>
              <div className="mb-3">
                <h5 htmlFor="pass2" className="form-label">
                  Confirm Password
                </h5>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Enter your password again"
                  value={confirmpassword}
                  onChange={e => setConfirmpassword(e.target.value)}
                />
                <i
                  className="ri-eye-fill"
                  id="togglePassword2"
                  onClick={pass2}
                />
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-danger"
                >
                  Submit
                </button>
              </div>
              <br />
              <div className="text-center text-dark fs-6">
                <small>
                  Existing User ?
                  <Link to="/login" className="text-green">
                    Login Now
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  }
};

export default Registration;
