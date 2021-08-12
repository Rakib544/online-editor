import React from "react";

const AnalyticsBody = () => {
  return (
    <div className="row">
      <div className="col-4 m-3 p-4 bg-white border  d-flex align-items-center  justify-content-center">
        <div className="text-center">
          <p className="fs-22 fw-bold">QR Codes</p>
          <p className="fs-46 fw-bold">20</p>
          <p className="fs-18 fw-bold">SCANS</p>
        </div>
      </div>
      <div className="col-4 m-3 p-4  bg-white border  d-flex align-items-center  justify-content-center">
        <div className="text-center">
          <p className="fs-22 fw-bold">Projects</p>
          <p className="fs-46 fw-bold">20</p>
        </div>
      </div>
      <div className="col-4 m-3 p-4  bg-white border  d-flex align-items-center  justify-content-center">
        <div className="text-center">
          <p className="fs-22 fw-bold">Landing Pages</p>
          <p className="fs-46 fw-bold">12</p>
        </div>
      </div>
      <div className="col-4 m-3 p-4 bg-white border  d-flex align-items-center  justify-content-center">
        <div className="text-center">
          <p className="fs-22 fw-bold">Business</p>
          <p className="fs-46 fw-bold">12</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBody;
