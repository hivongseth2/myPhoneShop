import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/CheckoutItem.scss";
const CheckoutItem = (props) => {
  const [activeImg, setActiveImg] = useState();
  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        `http://localhost:8080/api/product/${props.data.product.id}/image`
      );
      setActiveImg(res.config.url);
      console.log(activeImg);
    }
  }, []);
  console.log(props);
  return (
    <tr key={props.index}>
      <th scope="row">{props.index}</th>
      <td>{props.data.product.name}</td>
      <td>{<img src={activeImg}></img>}</td>
      <td>{props.data.quantity}</td>
      <td>{props.data.quantity * props.data.product.price}</td>
    </tr>
  );
};
export default CheckoutItem;
