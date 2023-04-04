import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import BtnBuy from "./BtnBuy";
import BtnCart from "./BtnCart";
import DetailBtn from "./DetailBtn";
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
      <article className="card">
        {/* <div class="temporary_text">Place image here</div> */}
        <img className="temporary_text" src={img}></img>
        <div className="card_content">
          <span className="card_title">
            {data.children ? data.children.name : ""}
          </span>
          <span className="card_subtitle">
            {data.children ? data.children.price : 0}
          </span>
          <p className="card_description">
            {data.children ? data.children.description : ""}
          </p>
          <DetailBtn className="DetailBtn" data={data} />
          <div className="button">
            <div className="btn-item">
              <BtnBuy />
            </div>
            <div className="btn-item">
              <BtnCart data={props.children} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
