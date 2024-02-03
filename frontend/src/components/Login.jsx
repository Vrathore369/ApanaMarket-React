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
const Login = () => {
  const navigate = useNavigate();
  // const [alertData, setAlertData] = useState({
  //   tag: "",
  //   message: "",
  //   visible: false,
  // });
  const [currentUser, setCurrentUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  async function submitLogin(e) {
    e.preventDefault();
    try {
      const res = await client.post("/api/login/", {
        username: username,
        password: password
      });
      setCurrentUser(true);
      navigate("/")
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
    }
  }  
  const pass1 = () => {
    let password = document.getElementById("password");
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
            <h3>Login</h3>
            <hr />
            <form onSubmit={e => submitLogin(e)} noValidate className="my_form3 shadow p-5">
              <div className="mb-3">
                <h5 htmlFor="username" className="form-label">
                  Username
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <h5 htmlFor="password" className="form-label">
                  Password
                </h5>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <i
                  className="ri-eye-fill"
                  id="togglePassword"
                  onClick={pass1}
                />
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <br />
              <div className="text-center text-dark fs-6">
                <small>
                  New User?
                  <Link to="/registration" className="text-green">
                    Register Now
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

export default Login;
