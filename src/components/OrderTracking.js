import React from "react";
import "../styles/OrderTracking.scss";
const OrderTracking = () => {
  return (
    <div className="container padding-bottom-3x mb-1">
      <div className="card mb-3">
        <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
          <span className="text-uppercase">Tracking Order No - </span>
          <span className="text-medium">34VB5540K83</span>
        </div>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Shipped Via:</span> UPS Ground
          </div>
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Status:</span> Checking Quality
          </div>
          <div className="w-100 text-center py-1 px-2">
            <span className="text-medium">Expected Date:</span> SEP 09, 2017
          </div>
        </div>
        <div className="card-body">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </div>
              </div>
              <h4 className="step-title">Confirmed Order</h4>
            </div>
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="pe-7s-config"></i>
                </div>
              </div>
              <h4 className="step-title">Processing Order</h4>
            </div>
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="pe-7s-medal"></i>
                </div>
              </div>
              <h4 className="step-title">Quality Check</h4>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="pe-7s-car"></i>
                </div>
              </div>
              <h4 className="step-title">Product Dispatched</h4>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className="pe-7s-home"></i>
                </div>
              </div>
              <h4 className="step-title">Product Delivered</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
