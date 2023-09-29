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

  // =======================addd cart

  const addCartItem = () => {
    console.log(data.children);
    const userData = JSON.parse(localStorage.getItem("data"));
    if (userData && userData.token) {
      delete userData.token;
    }
    console.log("user", userData);
  };

  // =============
  useEffect(async () => {
    if (props) {
      {
        props && props.children.imageProducts.length > 0
          ? setImg(props.children.imageProducts[0].imageLink)
          : setImg(
              "https://media.istockphoto.com/id/936182806/vi/vec-to/kh%C3%B4ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%C3%ACnh-%E1%BA%A3nh-kh%E1%BA%A3-d%E1%BB%A5ng.jpg?s=612x612&w=0&k=20&c=AqTYDe8XDlTT4HlkKmWrI57391QNOV0zZeC7u8TKYiE="
            );
      }

      setData(props);
      console.log("đây là item", props);
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
      <div class="col hp">
        <div class="card h-100 shadow-sm">
          <a
            target="_blank"
            href={data.children ? data.children.productLink : "#"}
          >
            <img
              src={img}
              class="card-img-top"
              alt={data.children ? data.children.productName : "Product Title"}
              onClick={() => handleView()}
            />
          </a>

          <div class="label-top shadow-sm">
            <a class="text-white" target="_blank" onClick={() => handleView()}>
              {data.children ? data.children.productName : ""}
            </a>
          </div>
          <div class="card-body">
            <div class="clearfix mb-3">
              <span class="float-start badge rounded-pill bg-success">
                {" "}
                {data.children ? data.children.price : 0} <span>VND </span>
              </span>
            </div>
            <h5 class="card-title">
              <a target="_blank" href="#">
                {data.children ? data.children.productName : ""}
              </a>
            </h5>

            <div class="d-grid gap-2 my-4">
              <button
                class="btn btn-warning bold-btn"
                onClick={() => addCartItem()}
              >
                add to cart
              </button>
            </div>
            <div class="clearfix mb-1">
              <span class="float-start">
                <a href="#">
                  <i class="fas fa-question-circle"></i>
                </a>
              </span>

              <span class="float-end">
                <i class="far fa-heart" style={{ cursor: "pointer" }}></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
