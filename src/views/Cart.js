import "../styles/Cart.scss";
import "../fontawesome/css/all.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
  const accessToken = localStorage.getItem("token");
  const [cart, setCart] = useState([]);

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
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-1">
          <div className="col-md-8">
            <div className="card mb-4 item">
              <div className="card-header">
                <h5 className="mb-0">Cart - {cart.length} item</h5>
              </div>
              <div className="card-body">
                {/* ------------------------------------------------------------------- */}
                {cart &&
                  cart.map((item, index) => {
                    return <CartItem item={item} key={index} />;
                  })}
                {/* ================================ */}
              </div>
            </div>
          </div>

          {/* ============================= */}
          <div className="col-md-4 mr-4 bb">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
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
                      <strong>$53.98</strong>
                    </span>
                  </li>
                  <strong>Expected shipping delivery</strong>
                  <p className="mb-5">12.10.2020 - 14.10.2020</p>
                </ul>

                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
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

export default Cart;
