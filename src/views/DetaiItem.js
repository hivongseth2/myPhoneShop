import DetailImg from "./DetailImg";
import "../styles/DetailItem.scss";
import { withRouter } from "react-router-dom";
import DetailItemDescription from "./DetailItemDescription";
import { useEffect } from "react";
import axios from "axios";

const DetailItem = (props) => {
  return (
    <div className="ContainerDetail">
      <DetailImg data={props.match.params.id} />

      <DetailItemDescription data={props.match.params.id} />
    </div>

    // <div className="detailItemInfo">
    //   <h2 className="detailItemTitle">Item title</h2>
    //   <p className="detailItemDescription">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
    //     nisl vel ultricies lacinia, nisl nisl aliquam nisl, vitae aliquam nisl
    //     nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
    //     aliquam nisl, vitae aliquam nisl nisl sit amet nisl.
    //   </p>
    //   <div className="detailItemPrice">$ 100</div>
    //   <div className="detailItemButton">
    //     <button className="btn btn--primary">Add to cart</button>
    //     <button className="btn btn--primary">Buy</button>
    //   </div>
    // </div>
  );
};
export default withRouter(DetailItem);
