import { useState, useRef } from "react";
import "../styles/DetailImg.scss";
import { useEffect } from "react";
import axios from "axios";
const DetailImg = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(
    "https://concrete.store/Content/images/not-available.jpg"
  );

  const imageListRef = useRef(null);

  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        `http://localhost:8080/api/product/${props.data}/image`
      );
      setActiveImg(res.config.url);
    }
  }, [activeImg]);
  const handleActive = (index, event) => {
    setActiveIndex(index);
    setActiveImg(event.target.src);
    imageListRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const nextBtn = () => {
    const numberOfLi = imageListRef.current.children.length;

    if (activeIndex < numberOfLi - 1) {
      setActiveIndex(activeIndex + 1);
      setActiveImg(
        imageListRef.current.children[activeIndex + 1].children[0].src
      );
      imageListRef.current.children[activeIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  const preBtn = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setActiveImg(
        imageListRef.current.children[activeIndex - 1].children[0].src
      );
      imageListRef.current.children[activeIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  return (
    <div className="detailItemContainer">
      <div className="detailImg">
        <img src={activeImg} alt="item" />
        <div className="divChild">
          <button className="btnNext" onClick={() => nextBtn()}>
            &#10095;
          </button>

          <button
            className="btnPre"
            onClick={() => {
              preBtn();
            }}
          >
            &#10094;
          </button>

          <ul className="itemChild" ref={imageListRef}>
            <li
              className={`img ${activeIndex === 0 ? "active" : ""}`}
              onClick={(event) => handleActive(0, event)}
            >
              <img src={activeImg} alt="item" />
            </li>

            <li
              className={`img ${activeIndex === 1 ? "active" : ""}`}
              onClick={(event) => handleActive(1, event)}
            >
              <img
                src="https://www.zdnet.com/a/img/resize/a599efb452885d4f668855aea18aae668867a960/2023/02/06/10e9ac75-29ce-4e6c-b2fb-8df48e1e40b0/oneplus-11-never-settle.jpg?auto=webp&fit=crop&height=900&width=1200"
                alt="item"
              />
            </li>
            <li
              className={`img ${activeIndex === 2 ? "active" : ""}`}
              onClick={(event) => handleActive(2, event)}
            >
              <img
                src="https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620"
                alt="item"
              />
            </li>
            <li
              className={`img ${activeIndex === 3 ? "active" : ""}`}
              onClick={(event) => handleActive(3, event)}
            >
              <img
                src="https://www.androidauthority.com/wp-content/uploads/2022/03/HMD-Global-Nokia-C21-Plus-display-angled-in-hand.jpg"
                alt="item"
              />
            </li>

            <li
              className={`img ${activeIndex === 4 ? "active" : ""}`}
              onClick={(event) => handleActive(4, event)}
            >
              <img
                src="https://www.androidauthority.com/wp-content/uploads/2022/03/HMD-Global-Nokia-C21-Plus-display-angled-in-hand.jpg"
                alt="item"
              />
            </li>
            <li
              className={`img ${activeIndex === 5 ? "active" : ""}`}
              onClick={(event) => handleActive(5, event)}
            >
              <img
                src="https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620"
                alt="item"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailImg;
