import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import IntroItem from "./IntroItem";
import ListItem from "./ListItem";
import Shopping from "./Shopping";
import Categories from "./Categories";

import HomeShopping from "./HomeShopping";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="slider container-fluid">
      <Slider />

      {/* ================= */}
      <Categories />
      <h1 className="text-center mt-5">Sản phẩm nổi bật</h1>
      <ListItem />
      {/* ===============LOAI SAN PHAM */}

      {/* =============== */}

      <h1 className="text-center mt-5">Dành cho bạn</h1>
      <HomeShopping />
    </div>
  );
};
export default Home;
