import { useState } from "react";
import "../styles/DetailItemDescription.scss";
import { useEffect } from "react";
import axios from "axios";

const DetailItemDescription = (props) => {
  const [dataDes, setDataDes] = useState();

  useEffect(async () => {
    if (props.data) {
      let res = await axios.get(
        `http://localhost:8080/api/product/${props.data}`
      );
      setDataDes(res);
      console.log(res);
    }
  }, []);
  return (
    <div className="ContainerDes">
      <table>
        <tr>
          <th className="title" colspan="3">
            {dataDes && dataDes.data ? dataDes.data.name : ""}
          </th>
        </tr>
        <tr className="brand" colspan="3">
          <th className="name">
            {`Thương hiệu: ${
              dataDes && dataDes.data ? dataDes.data.brand.name : ""
            }`}
          </th>
          <th className="stock">
            {`Số lượng: ${dataDes && dataDes.data ? dataDes.data.stock : ""}`}
          </th>
          <th className="creat">
            {`Ngày mở bán: ${
              dataDes && dataDes.data ? dataDes.data.brand.createdDate : ""
            }`}
          </th>
        </tr>
        <tr className="des">
          <td colspan="3">
            {dataDes && dataDes.data ? dataDes.data.description : ""}
          </td>
        </tr>
        <tr className="price">
          <th colspan="3">
            <span
              style={{
                color: "black",
                marginRight: "5em",
                letterSpacing: "0px",
              }}
            >
              Giá chỉ:
            </span>
            {dataDes && dataDes.data ? dataDes.data.price + "\tVND" : ""}
          </th>
        </tr>

        <tr>
          <td colspan="3">
            <button className="btnBuy">Mua ngay</button>
          </td>
        </tr>

        <tr>
          <td colspan="3">
            <button className="btnAdd">Thêm vào giỏ hàng</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default DetailItemDescription;
