import { useState } from "react";
import "../styles/Register.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState(0);
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lName":
        setLastName(value);
        break;
      case "fName":
        setFirstName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "birthday":
        setBirthDay(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "sex":
        setSex(value);
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

    axios
      .post("http://localhost:8521/api/v1/auth/register", {
        email: email,
        passWordA: password,
        enable: true,
        roles: [{ id: 1 }],
      })
      .then((response) => {
        const account = response.data;
        const customerData = {
          id: "1222",
          firstName,
          lastName,
          email,
          dateOfBirth: null,
          sex: parseInt(sex),
          phone,
          address,
          account,
          customerType: "customer",
          avatar: null,
        };

        console.log(customerData);
        axios
          .post(
            "http://localhost:8521/api/v1/customer/createOrUpdate",
            customerData
          )
          .then((response) => {
            // Xử lý khi tạo khách hàng thành công
            console.log("Khách hàng đã được tạo:", response.data);
            toast.success(`Chúc mừng bạn đã đăng ký thành công!`);
          })
          .catch((error) => {
            // Xử lý khi có lỗi xảy ra
            console.error("Lỗi khi tạo khách hàng:", error);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message || "Đã có lỗi xảy ra.");
      });
  };

  return (
    <div className="containerReg container justify-content-center col-8">
      <form className="formReg col-12  fs-8s pb-xl-5 ">
        <div className="row">
          <div className="col-12">
            <h3>REGISTER</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="item">
              <label htmlFor="fName" className="lbInput">
                Họ
              </label>
              <input
                type="fName"
                id="fName"
                name="fName"
                value={firstName}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-6">
            <div className="item">
              <label htmlFor="lName" className="lbInput">
                Tên
              </label>
              <input
                type="lName"
                id="lName"
                name="lName"
                value={lastName}
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
              <label htmlFor="address" className="lbInput">
                Địa chỉ:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="item">
              <label htmlFor="email" className="lbInput">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-6">
            <div className="item">
              <label htmlFor="phone" className="lbInput">
                Số điện thoại:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="item">
              <label htmlFor="birthday" className="lbInput">
                Ngày sinh:
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={birthDay}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-6">
            <label className="lbInput">Giới tính:</label>

            <div className="item row">
              <div className="col-6 ">
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="0"
                  checked={sex === "0"}
                  onChange={handleChange}
                />
                <label htmlFor="female">Nữ</label>
              </div>

              <div className="col-6">
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="1"
                  checked={sex === "1"}
                  onChange={handleChange}
                />
                <label htmlFor="male">Nam</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
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

          <div className="col-6">
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
        </div>

        <div className="row">
          <div className="col-12 pb-xl-2">
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

        <Link class="nav-item btn btn-primary col-12" to="/Login">
          {/* <Link class="nav-link mx-2 text-uppercase" to="/Login"> */}
          <i class="fa-solid fa-circle-user me-1"></i> Đi đến trang đăng nhập
          {/* </Link> */}
        </Link>
      </form>
    </div>
  );
};

export default Register;
