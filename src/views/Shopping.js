import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";
import "../styles/Shopping.scss";
import Nav from "./Nav";
import Filter from "./Filter";

const Shopping = () => {
  const [dataPhone, setDataPhone] = useState([]);
  useEffect(async () => {
    let res = await axios.get("http://localhost:8080/api/product/views");
    let data = res && res.data ? res.data : [];
    setDataPhone(data);
  }, []);

  return (
    <div className="shopping">
      <div className="container-fluid shadow-sm p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md-3">
            {/* Phần Filter */}
            <Filter />
          </div>
          <div className="col-md-9">
            {/* Danh sách sản phẩm */}
            <div className="row">
              {dataPhone.map((item, index) => (
                <div className="col-md-4 mb-5" key={index}>
                  <Item children={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
