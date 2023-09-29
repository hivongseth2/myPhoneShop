import { useEffect, useState } from "react";
import axios from "axios";

const Filter = () => {
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let resCate = await axios.get(
          "http://localhost:8521/api/v1/category/getAll"
        );

        let dataCate = resCate && resCate.data ? resCate.data : [];
        console.log(dataCate);
        setCategory(dataCate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div
      className="container-xs shadow-none p-3 mb-5 bg-body-tertiary rounded"
      style={{ color: "#333" }}
    >
      <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          Thương hiệu
          <div className="form-check">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Laptop Acer
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Laptop Asus
              </label>
            </div>
          </div>
        </div>
        {/* ============ */}

        <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          <label htmlFor="customRange3" className="form-label">
            Loại sản phẩm
          </label>

          {category &&
            category.length > 0 &&
            category.map((item) => (
              <div className="form-check" key={item.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={`categoryCheckbox-${item.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`categoryCheckbox-${item.id}`}
                >
                  {item.categoryName}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
        <label htmlFor="customRange3" className="form-label">
          Khoảng giá
        </label>
        <div className="d-flex flex-row">
          {/* ============= */}
          <div className="input-group mb-3 mx-3 ">
            <span className="input-group-text">Từ</span>

            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">VND</span>
          </div>
          {/* ============ */}

          <div className="input-group mb-3 mx-1">
            <span className="input-group-text">Đến</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />

            <span className="input-group-text">VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
