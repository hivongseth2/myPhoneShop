import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";
import "../styles/Shopping.scss";

const Shopping = () => {
  const [dataPhone, setDataPhone] = useState([]);
  useEffect(async () => {
    let res = await axios.get("http://localhost:8080/api/product/views");
    let data = res && res.data ? res.data : [];
    setDataPhone(data);
  }, []);

  return (
    <div className="container">
      {dataPhone.map((item) => {
        return <Item children={item} />;
      })}
    </div>
  );
};

export default Shopping;