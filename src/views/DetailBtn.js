import "../styles/DetailBtn.scss";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const DetailBtn = (props) => {
  const history = useHistory();
  const [id, setId] = useState();
  useEffect(() => {
    if (props.data.children.id) {
      setId(props.data.children.id);
      // setData(props);
    }
  }, [props]);

  const handleView = () => {
    console.log(props.data.children.id);
    history.push(`Shopping/${id}`);
  };
  return (
    <button className="DetailBtn" onClick={() => handleView()}>
      <span className="label">Xem</span>
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </span>
    </button>
  );
};
export default withRouter(DetailBtn);
