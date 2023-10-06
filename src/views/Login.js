import "../styles/Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomFetch } from "../utils/CustomFetch";
import { toast } from "react-toastify";
import axios from "axios";
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
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      passWordA: password,
    };

    try {
      const response = axios.post(
        "http://localhost:8521/api/v1/auth/login",
        formData
      );

      const data = await response;
      console.log(data);

      if (data.data) {
        localStorage.setItem("data", JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.data.token));
        toast.success(`Chào mừng  đã quay trở lại!`);
        // history.push("/home");
      }

      console.log(data);
      // if (data.errorCode !== undefined) {
      //   toast.error(data.message);

      //   return;

      // }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      toast.error(`sai tài khoản hoặc mật khẩu!`);
    }
  };

  return (
    <form className="col-8 offset-2  container justify-content-center bgLogin">
      <div className="col-12">
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
        <Link class="nav-item btn btn-primary col-12" to="/Register">
          Register
        </Link>
      </div>

      {/* <button class="nav-item btn btn-primary"> */}

      {/* </button> */}
    </form>
  );
};
export default Login;
