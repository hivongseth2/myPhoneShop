import "../styles/Item.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import Filter from "./Filter";
import BtnBuy from "./BtnBuy";
import BtnCart from "./BtnCart";

const Item = (props) => {
  const [data, setData] = useState(props);
  const [img, setImg] = useState();
  const history = useHistory();

  // useEffect lấy ảnh all

  useEffect(async () => {
    if (props) {
      // const res = await axios.get(
      //   `http://localhost:8080/api/product/${props.children.id}/image`
      // );

      // setImg(res.config.url);
      setImg(
        "https://media.istockphoto.com/id/936182806/vi/vec-to/kh%C3%B4ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%C3%ACnh-%E1%BA%A3nh-kh%E1%BA%A3-d%E1%BB%A5ng.jpg?s=612x612&w=0&k=20&c=AqTYDe8XDlTT4HlkKmWrI57391QNOV0zZeC7u8TKYiE="
      );
      setData(props);
    }
  }, [props]);

  const handleView = () => {
    const currentPath = window.location.pathname;
    const newPath = `/Shopping/${data.children.id}`;

    if (currentPath.match(/\/Shopping\/SP\d{4}/)) {
      const updatedPath = currentPath.replace(/\/Shopping\/SP\d{4}/, newPath);
      window.location.href = `${window.location.origin}${updatedPath}`;
    } else {
      history.push(newPath);
    }
  };

  return (
    <>
      <article className="card ">
        <img
          className="temporary_text"
          src={img}
          onClick={() => handleView()}
        ></img>
        <div className="card_content" style={props.style ? props.style[1] : {}}>
          <span
            className="card_title"
            onClick={() => handleView()}
            style={props.style ? props.style[0] : {}}
          >
            {console.log(data)}
            {data.children ? data.children.productName : ""}
          </span>

          <p className="card_description" onClick={() => handleView()}>
            {data.children ? data.children.description : ""}
          </p>

          <div className="d-flex flex-column ">
            <span className="card_subtitle row" onClick={() => handleView()}>
              <span
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "normal",
                }}
              >
                Giá chỉ:{" "}
              </span>{" "}
              {data.children ? data.children.price : 0} <span>VND </span>
            </span>
            <div className="row mb-2">
              <button className="btn btn-primary col-12 ">Mua</button>
            </div>

            <div className="row">
              <BtnCart data={props.children} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
