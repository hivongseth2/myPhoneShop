import { useRef, useState } from "react";
import "../styles/Register.scss";

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
    <div className="containerReg">
      <form className="formReg">
        <div className="item">
          <label htmlFor="fname">First name:</label>

          <input
            type="text"
            id="fname"
            name="fname"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="uName">User Name:</label>

          <input
            type="text"
            id="uName"
            name="uName"
            value={uName}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="sdt">Phone:</label>

          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="birthday">Birthday:</label>

          <input
            type="birthday"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="password">Password:</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="rPassword">Re-Password:</label>

          <input
            type="password"
            id="rPassword"
            name="rPassword"
            value={rPassword}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <input
            className="submitBtn"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            value="Đăng kí"
          />
        </div>
      </form>
      <div className="imgReg">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        ></img>
      </div>
    </div>
  );
};

export default Register;
