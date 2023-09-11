import { useRef, useState } from "react";
import "../styles/Register.scss";
import { toast } from "react-toastify";

import { Link, NavLink } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "rPassword":
        setRPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== rPassword) {
      toast.error("Mật khẩu và xác nhận mật khẩu không giống nhau.");
      return;
    }

    fetch("http://localhost:8521/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        passWordA: password,
        enable: true,
        roles: [{ id: 1 }],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(`Chúc mừng bạn đã đăng ký thành công!`);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
  };

  return (
    <div className="containerReg container justify-content-end col-8">
      <Link class="nav-item btn btn-primary" to="/Login">
        {/* <Link class="nav-link mx-2 text-uppercase" to="/Login"> */}
        <i class="fa-solid fa-circle-user me-1"></i> Account
        {/* </Link> */}
      </Link>

      <form className="formReg col-8 offset-2 fs-6s ">
        <div className="row">
          <div className="col-12">
            <h3>REGISTER</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="item">
              <label htmlFor="email" className="lbInput">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="item">
              <label htmlFor="password" className="lbInput">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div />
          <div className="col-12">
            <div className="item">
              <label htmlFor="rPassword" className="lbInput">
                Re-Password:
              </label>
              <input
                type="password"
                id="rPassword"
                className="form-control"
                name="rPassword"
                value={rPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col-12 pb-xl-5">
            <div className="item">
              <button
                className="submitBtn btn btn-primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
