import "../styles/Nav.scss";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Nav = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("data");
    setUser(JSON.parse(data));
  }, []);
  return (
    <div>
      {/* <NavLink to="/home">Trang chủ</NavLink>
      <NavLink to="/Register">Đăng kí</NavLink>
      <NavLink to="/Login">Đăng Nhập</NavLink>
      <NavLink to="/ForgotPass">Quên Mật khẩu</NavLink>
      <NavLink to="/Info">Ca Nhan</NavLink>
      <NavLink to="/Shopping">Mua san pham</NavLink>
      <NavLink to="/CheckOut">Thanh Toan</NavLink>
      <NavLink to="/Cart">Giỏ Hàng </NavLink> */}

      <nav className="navbar navbar-expand-lg bg-blue sticky-top navbar-light p-3 shadow-sm">
        <a className="navbar-brand" href="">
          <Link className="nav-link text-uppercase" to="/">
            {" "}
            <i className="fa-solid fa-shop me-2 "></i>
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
            <span className="border-warning input-group-text bg-warning text-white">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="form-control border-warning" />
            <button className="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" className="form-control border-warning" />
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a
                className="nav-link mx-2 text-uppercase active"
                aria-current="page"
                href="#"
              >
                Offers
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/Shopping"
                className="nav-link mx-2 text-uppercase"
                href="#"
              >
                Mua san pham
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">
                Catalog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="/Register">
                Register
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="/Cart">
                <i className="fa-solid fa-cart-shopping me-1"></i> Cart
              </Link>
            </li>
            {user == null ? (
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/login">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/home">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
