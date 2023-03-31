import "../styles/Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/home">Trang chủ</NavLink>
      <NavLink to="/Register">Đăng kí</NavLink>
      <NavLink to="/Login">Đăng Nhập</NavLink>
      <NavLink to="/ForgotPass">Quên Mật khẩu</NavLink>
      <NavLink to="/Info">Ca Nhan</NavLink>
    </div>
  );
};
export default Nav;
