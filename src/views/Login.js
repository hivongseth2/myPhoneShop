import "../styles/Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";

import { useHistory } from "react-router-dom";

import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleOnChangeInput = (e) => {
    if (e.target.classList.contains("inputEmail")) {
      setEmail(e.target.value);
    } else {
      setPassWord(e.target.value);
    }
    console.log(email, password);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data.errorCode);
      if (data.errorCode !== undefined) {
        toast.error(data.message);
        // alert(data.message);
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      history.push("/Info", { user: data });

      toast.success(`Chào mừng ${data.fullName} đã quay trở lại!`);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="col-8 offset-2 fs-6s container bgLogin">
      <div className="left col-8">
        <h2>Sign In</h2>
        <div className="mb-3 p">
          <label className="lbInput">Email address</label>
          <input
            type="email"
            className="form-control inputEmail "
            placeholder="User@gmail.com"
            name="email"
            value={email}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="mb-3 ">
          <label className="lbInput">Password</label>
          <input
            type="password"
            className="form-control inputPassword"
            name="password"
            placeholder="*******"
            value={password}
            onChange={(e) => handleOnChangeInput(e)}
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheck1"
            />
            <label
              className="form-check-label text-left"
              htmlFor="customCheck1"
            >
              {/* <br /> */}
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-primary col-12 mx-auto"
            onClick={(e) => handleSignIn(e)}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </div>
      <div className="right">
        <button class="nav-item btn btn-primary">
          <Link class="nav-link mx-2 text-uppercase" to="/Register">
            Register
          </Link>
        </button>
      </div>
    </form>
  );
};
export default Login;
