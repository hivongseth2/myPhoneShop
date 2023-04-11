import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// import UpDown
const CartItem = (props) => {
  const [item, setItem] = useState(props.item);
  const [id, setId] = useState(props.item.product.id);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [price, setPrice] = useState(
    props.item.quantity * props.item.product.price
  );

  const [img, setImg] = useState();

  const accessToken = props.token;

  const handleQuantityItemPlus = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/cart-item/update?id=${props.item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            productId: id,
            quantity: quantity + 1,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      console.log(props.item);
      console.log(accessToken);
      setQuantity(quantity + 1);
      props.updateCart();
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityItemMinus = async (event) => {
    if (quantity === 0) return;
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/cart-item/update?id=${props.item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            productId: id,
            quantity: quantity - 1,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      console.log(props.item);
      console.log(accessToken);
      setQuantity(quantity - 1);
      props.updateCart();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(async () => {
    if (props.item) {
      let res = await axios.get(
        `http://localhost:8080/api/product/${id}/image`
      );
      setImg(res.config.url);
      console.log(id);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light"
        >
          <img src={img} className="w-100" />
          <a href="#!">
            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.2)",
              }}
            ></div>
          </a>
        </div>
      </div>

      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <p>
          <strong>{item.product.name}</strong>
        </p>

        <button
          typeName="button"
          className="btn btn-primary btn-sm me-1 mb-2"
          data-mdb-toggle="tooltip"
          title="Remove item"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mb-2"
          data-mdb-toggle="tooltip"
          title="Move to the wish list"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          <button
            className="btn btn-primary px-3 me-3"
            onClick={(e) => {
              handleQuantityItemMinus(e);
            }}
          >
            <i className="fas fa-minus"></i>
          </button>

          <div className="form-outline">
            <input
              id="form2"
              min="0"
              name="quantity"
              value={quantity}
              type="number"
              className="form-control"
            />
            <label className="form-label" htmlFor="form1">
              Quantity
            </label>
          </div>

          <button
            className="btn btn-primary px-3 ms-2"
            onClick={(event) => {
              handleQuantityItemPlus(event);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <p className="text-start text-md-center">
          <strong>{price}</strong>
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};
export default CartItem;
