import { useRef, useState } from "react";
import "../styles/Register.scss";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleChange = (event) => {
    // name = e.target.classList.contains("inputEmail")
    const { name, value } = event.target;
    switch (name) {
      case "fname":
        setName(value);
        break;
      case "uName":
        setUName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "rPassword":
        setRPassword(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        birthday: birthday,
        email: email,
        fullnName: name,
        password: password,
        phoneNumber: phone,
        username: uName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="containerReg container justify-content-end col-8">
      <button class="nav-item btn btn-primary">
        <Link class="nav-link mx-2 text-uppercase" to="/Login">
          <i class="fa-solid fa-circle-user me-1"></i> Account
        </Link>
      </button>

      <form className="formReg col-12">
        <div className="row">
          <div className="col-12">
            <h1>REGISTER</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="item  ">
              <label htmlFor="fname">Full Name:</label>

              <input
                type="text"
                id="fname"
                name="fname"
                value={name}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="item ">
              <label htmlFor="uName">User Name:</label>

              <input
                type="text"
                id="uName"
                name="uName"
                className="form-control"
                value={uName}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="col-6">
            <div className="item ">
              <label htmlFor="sdt">Phone:</label>

              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-6">
            <div className="item">
              <label htmlFor="birthday">Birthday:</label>

              <input
                type="birthday"
                id="birthday"
                name="birthday"
                className="form-control"
                value={birthday}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Thực tế thì bỏr username thay bang email */}

          <div className="col-6">
            <div className="item">
              <label htmlFor="email">Email:</label>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="item">
              <label htmlFor="password">Password:</label>

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="item">
              <label htmlFor="rPassword">Re-Password:</label>

              <input
                type="password"
                id="rPassword"
                className="form-control"
                name="rPassword"
                value={rPassword}
                onChange={handleChange}
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
                Đăng ký{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
