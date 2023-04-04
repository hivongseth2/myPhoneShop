import { useState, useRef } from "react";
import "../styles/DetailImg.scss";
const DetailImg = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(
    "https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg"
  );

  const imageListRef = useRef(null);

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
          <button onClick={() => nextBtn()}> next </button>
          <ul className="itemChild" ref={imageListRef}>
            <li
              className={`img ${activeIndex === 0 ? "active" : ""}`}
              onClick={(event) => handleActive(0, event)}
            >
              <img
                src="https://www.cnet.com/a/img/resize/f887b44e7f291bb73928786204b1b39f079c9f04/hub/2022/09/17/1b245795-b741-44b7-be8a-5f41eefdb310/20220916-iphone-14-pro-01.jpg?auto=webp&fit=crop&height=528&width=940"
                alt="item"
              />
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
          <button
            onClick={() => {
              preBtn();
            }}

















            
          >
            prev
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailImg;
