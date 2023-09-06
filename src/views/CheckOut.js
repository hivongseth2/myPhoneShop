import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CheckoutItem from "./CheckoutItem";
import Address from "./Address";
import FormCheckOut from "./FormCheckOut";
const CheckOut = () => {
  const [cart, setCart] = useState([]);

  const accessToken = localStorage.getItem("token");

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0)
      );
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      setQuantity(
        cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0)
      );
    }
  }, [cart]);

  // useEffect(async () => {
  //   if (props.data) {
  //     let res = await axios.get(
  //       `http://localhost:8080/api/product/${props.data}/image`
  //     );
  //     setActiveImg(res.config.url);
  //   }
  // }, []);

  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart-item", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setCart(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="container-lg mt-1 bg-white rounded">
      <div className="row">
        {cart.length > 0 ? (
          <div className="col-12">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <h4 className="mb-3">Tiến hành thanh toán</h4>
                <form className="needs-validation" noValidate>
                  <FormCheckOut />
                </form>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="shadow bg-white rounded">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.length > 0 &&
                        cart.map((item, index) => {
                          return item.quantity !== 0 ? (
                            <CheckoutItem data={item} index={index} />
                          ) : null;
                        })}

                      <tr className="sum">
                        <th scope="total">Thành tiền</th>
                        <td></td>
                        <td></td>
                        <td>{quantity}</td>
                        <th>{total}</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <button className="w-100 btn btn-danger btn-lg" type="submit">
                Continue to checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="col-12">Không có sản phẩm nào trong giỏ hàng</div>
        )}
      </div>
    </div>
  );
};
export default CheckOut;
