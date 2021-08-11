import React from "react";

const RightSideBar = () => {
  return (
    <div className="full-div border border-dark">
      <div className="w-full top-part d-flex align-items-center justify-content-center">
        <p className="text-white">Projects settings</p>
      </div>
      <div className="container">
        <form action=" ">
          <div className="row">
            <div className="col-12 mt-3">
              <p className="fs-18 fw-bold" htmlFor="">
                Project Name
              </p>
              <input className="form-control input-style" type="text" />
            </div>
          </div>
          <div className="row mt-5">
            <p className="fs-18 fw-bold" htmlFor="">
              Canvas Color
            </p>
            <div className="col-6 pt-1">
              <input className="form-control input-style" type="text" />
            </div>

            <div className="col-6 mt-1">
              <input className="form-control  second-canvas" type="text" />
            </div>
          </div>
          <hr className="mt-4" />
          <div className="row">
            <p className="fs-18 fw-bold">Canvas area (?)</p>
            <div className="col-6 d-grid">
              <button className="w-full">+</button>
            </div>
            <div className="col-6 d-grid">
              <button className="w-full">-</button>
            </div>
          </div>
          <hr className="mt-4" />
          <p
            class="form-check-label fs-18 fw-bold"
            for="flexSwitchCheckDefault"
          >
            show guidens
          </p>
          <div class="form-check form-switch ">
            <input
              class="form-check-input "
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSideBar;
