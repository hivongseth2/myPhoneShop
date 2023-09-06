import "../styles/Cart.scss";
import "../fontawesome/css/all.css";
import { withRouter } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useState } from "react";
import CheckOut from "./CheckOut";
import { useHistory } from "react-router-dom";

const Cart = () => {
  // Khai bao bien
  const accessToken = localStorage.getItem("token");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();

  // control
  useEffect(() => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce((total, item) => {
          return total + item.quantity * item.product.price;
        }, 0)
      );
    }
  }, [cart]);

  const updateCart = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart-item", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      setQuantity(
        cart.reduce((total, item) => {
          return total + item.quantity;
        }, 0)
      );
    }
  }, [cart]);

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

  const handleCheckOut = () => {
    // console.log(props.data.children.id);
    history.push(`/Checkout`);
  };

  //Return
  return (
    <section className="h-100 gradient-custom">
      <div className="container-xxl py-5">
        <div className="row container-lg">
          <div className="col-md-8">
            <div
              className="card mb-4 item"
              style={{ width: "45em", maxWidth: "50em" }}
            >
              <div className="card-header">
                <h5 className="mb-0">Cart - {cart.length} item</h5>
              </div>

              {}
              <div className="card-body">
                {/* ------------------------------------------------------------------- */}

                {cart && cart.length > 0 ? (
                  cart.map((item, index) => {
                    console.log(item + "bbbbbbbbb");

                    return item.quantity !== 0 ? (
                      <CartItem
                        item={item}
                        key={index}
                        token={accessToken}
                        setCart={setCart}
                        updateCart={updateCart}
                      />
                    ) : null;
                  })
                ) : (
                  <div>Bạn chưa đăng nhập</div>
                )}
              </div>
            </div>
          </div>

          {/* ============================= Total */}
          <div className="col-md-4">
            <div
              className="card mb-4 "
              style={{ width: "25em", maxWidth: "25em" }}
            >
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{total}</span>
                    <span className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      {quantity}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>{total}</strong>
                    </span>
                  </li>
                  <strong>Expected shipping delivery</strong>
                  <p className="mb-5">12.10.2020 - 14.10.2020</p>
                </ul>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={() => handleCheckOut()}
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Cart);
