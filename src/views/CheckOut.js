import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CheckoutItem from "./CheckoutItem";
import Address from "./Address";
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
    <div className="container">
      {cart.length > 0 ? (
        <table class="table table-hover">
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
                  // <tr key={index}>
                  //   <th scope="row">{index}</th>
                  //   <td>{item.product.name}</td>
                  //   <td>{item.quantity}</td>
                  //   <td>{item.quantity * item.product.price}</td>
                  // </tr>
                  <CheckoutItem data={item} index={index} />
                ) : null;
              })}

            <tr className="sum">
              <th scope="total">Thành tiền</th>
              <td></td>
              <td></td>
              <th>{total}</th>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Không có sản phẩm nào trong giỏ hàng</div>
      )}

      {/* =============== */}

      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Họ tên</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">Số điện thoại</th>
            <td>Jacob</td>
          </tr>
          <tr>
            <th scope="row">Địa chỉ </th>
            <td>
              <Address />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CheckOut;
