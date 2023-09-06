import "../styles/Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
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

      <nav class="navbar navbar-expand-lg bg-blue sticky-top navbar-light p-3 shadow-sm">
        <a class="navbar-brand" href="#">
          <Link className="nav-link text-uppercase" to="/home">
            {" "}
            <i class="fa-solid fa-shop me-2 "></i>
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div class="input-group">
            <span class="border-warning input-group-text bg-warning text-white">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" class="form-control border-warning" />
            <button class="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <div class="ms-auto d-none d-lg-block">
            <div class="input-group">
              <span class="border-warning input-group-text bg-warning text-white">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" class="form-control border-warning" />
              <button class="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a
                class="nav-link mx-2 text-uppercase active"
                aria-current="page"
                href="#"
              >
                Offers
              </a>
            </li>
            <li class="nav-item">
              <Link
                to="/Shopping"
                class="nav-link mx-2 text-uppercase"
                href="#"
              >
                Mua san pham
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 text-uppercase" href="#">
                Catalog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 text-uppercase" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2 text-uppercase" to="/Register">
                Register
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <Link class="nav-link mx-2 text-uppercase" to="/Cart">
                <i class="fa-solid fa-cart-shopping me-1"></i> Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mx-2 text-uppercase" to="/Login">
                <i class="fa-solid fa-circle-user me-1"></i> Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
