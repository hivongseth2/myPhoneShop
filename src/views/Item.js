import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import BtnBuy from "./BtnBuy";
import BtnCart from "./BtnCart";

const Item = (props) => {
  const [data, setData] = useState(props);
  const [img, setImg] = useState();

  useEffect(async () => {
    if (props) {
      const res = await axios.get(
        `http://localhost:8080/api/product/${props.children.id}/image`
      );
      setImg(res.config.url);
      setData(props);
    }
  }, [props]);

  return (
    <>
      {/* {console.log(data.children)} */}
      <article class="card">
        {/* <div class="temporary_text">Place image here</div> */}
        <img className="temporary_text" src={img}></img>
        <div class="card_content">
          <span class="card_title">
            {data.children ? data.children.name : ""}
          </span>
          <span class="card_subtitle">
            {data.children ? data.children.price : 0}
          </span>
          <p class="card_description">
            {data.children ? data.children.description : ""}
          </p>
          <div className="button">
            <div className="btn-item">
              <BtnBuy />
            </div>
            <div className="btn-item">
              <BtnCart />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
