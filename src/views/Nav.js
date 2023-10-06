import "../styles/Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
const Nav = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("data");
    setUser(JSON.parse(data));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-blue sticky-top navbar-light p-3 shadow-sm ">
        <a className="navbar-brand ms-20" href="">
          <Link className="nav-link text-uppercase" to="/">
            {/* <i className="fa-solid fa-shop me-5  "></i> */}
            <img className="logo fa-solid fa-shop me-5" src={logo}></img>
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className="border-danger input-group-text bg-danger text-black">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="form-control border-danger" />
            <button className="btn btn-danger text-white">Tìm kiếm</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block ">
            <div className="input-group">
              <span className="border-danger input-group-text bg-danger text-black">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" className="form-control border-danger" />
              <button className="btn btn-danger text-white">Tìm kiếm</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link
                to="/Shopping"
                className="nav-link-nav mx-2 text-uppercase"
                href="#"
              >
                SẢN PHẨM
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">
                Catalog
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">
                Services
              </a>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link-nav mx-2 text-uppercase" to="/Cart">
                <i className="fa-solid fa-cart-shopping me-1"></i> Giỏ hàng
              </Link>
            </li>

            {user == null ? (
              <li className="nav-item">
                <Link
                  className="nav-link-nav mx-2 text-uppercase"
                  to="/Register"
                >
                  Đăng kí
                </Link>
              </li>
            ) : (
              <></>
            )}
            {user == null ? (
              <li className="nav-item">
                <Link className="nav-link-nav mx-2 text-uppercase" to="/login">
                  <i className="fa-solid fa-circle-user me-1"></i> Đăng nhập
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link-nav mx-2 text-uppercase" to="/home">
                  <i className="fa-solid fa-circle-user me-1"></i> Cá nhân
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto "></ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
