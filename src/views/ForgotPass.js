import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

import { useState } from "react";
const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setEmail(value);
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/account/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      const data = await response.json();

      if (data.errorCode !== undefined) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="forgot-pass">
      <form className="col-8 offset-2 fs-6 " onSubmit={handleResetPassword}>
        <div className="mb-3">
          <h2>Email address</h2>
          <input
            type="email"
            className="form-control inputEmail "
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleOnChangeInput}
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPass;
