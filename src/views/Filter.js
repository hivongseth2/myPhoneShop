import { useEffect, useState } from "react";
import axios from "axios";
const Filter = () => {
  return (
    <div
      className="container-xs shadow-none p-3 mb-5 bg-body-tertiary rounded"
      style={{ color: "#333" }}
    >
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          Thương hiệu
          <div class="form-check">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Laptop Acer
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Laptop Asus
              </label>
            </div>
          </div>
        </div>
        {/* ============ */}

        <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
          <label for="customRange3" class="form-label">
            Loại sản phẩm
          </label>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Laptop
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Tai nghe
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Chuột
            </label>
          </div>
        </div>
      </div>

      <div className="rangePrice p-2 bd-highlight shadow p-3 mb-2 bg-body-tertiary rounded">
        <label for="customRange3" class="form-label">
          Khoảng giá
        </label>
        <div class="d-flex flex-row">
          {/* ============= */}
          <div class="input-group mb-3 mx-3 ">
            <span class="input-group-text">Từ</span>

            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span class="input-group-text">VND</span>
          </div>
          {/* ============ */}

          <div class="input-group mb-3 mx-1">
            <span class="input-group-text">Đến</span>
            <input
              type="text"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"
            />

            <span class="input-group-text">VND</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;