import Address from "./Address";

const FormCheckOut = () => {
  return (
    <form className="needs-validation" noValidate>
      <div className="row g-3">
        <div className="col-sm-12">
          <label htmlFor="firstName" className="form-label">
            Người nhận hàng
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
            value=""
            required
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="phoneNumber" className="form-label">
            Số điện thoại nhận hàng
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="08xxxxxxx"
            required
          />
          <div className="invalid-feedback">
            Vui lòng nhập số điện thoại nhận hàng
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="country" className="form-label">
            Địa chỉ nhận hàng
          </label>

          <Address />

          <div className="invalid-feedback">Chọn địa chỉ.</div>
        </div>

        <div className="col-md-12">
          <label htmlFor="zip" className="form-label">
            Số nhà
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder=""
            required
          />
          <div className="invalid-feedback">
            Vui lòng nhập số nhà chính xác.
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="same-address" />
        <label className="form-check-label" htmlFor="same-address">
          Shipping address is the same as my billing address
        </label>
      </div>

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="save-info" />
        <label className="form-check-label" htmlFor="save-info">
          Save this information for next time
        </label>
      </div>

      <hr className="my-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="my-3">
        <div className="form-check">
          <input
            id="credit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            checked
            required
          />
          <label className="form-check-label" htmlFor="credit">
            Credit card
          </label>
        </div>
        <div className="form-check">
          <input
            id="debit"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            required
          />
          <label className="form-check-label" htmlFor="debit">
            Debit card
          </label>
        </div>
        <div className="form-check">
          <input
            id="paypal"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            required
          />
          <label className="form-check-label" htmlFor="paypal">
            Paytm
          </label>
        </div>
        <div className="form-check">
          <input
            id="phonepe"
            name="paymentMethod"
            type="radio"
            className="form-check-input"
            required
          />
          <label className="form-check-label" htmlFor="phonepe">
            Phonepe
          </label>
        </div>
      </div>

      <hr className="my-4" />
    </form>
  );
};
export default FormCheckOut;
