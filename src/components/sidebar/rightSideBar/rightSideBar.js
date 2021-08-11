import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const RightSideBar = () => {
  const [selectedColor, setSelectedColor] = useState("#000");
  return (
    <div className="bg-white vh-100">
      <p className="text-white py-3 text-center bg-dark">Projects settings</p>
      <div className="container">
        <div className="col-12 mt-4">
          <p className="fs-18 fw-bold">Project Name</p>
          <input
            placeholder="Title is here"
            className="form-control input-style fw-bold"
            type="text"
          />
        </div>
        <p className="fs-18 fw-bold mt-5">Canvas Color</p>
        <div className="row me-1">
          <div className="col-6 pt-1">
            <input
              className="form-control color-field"
              onChange={(e) => setSelectedColor(e.target.value)}
              type="color"
            />
          </div>
          <p className="col-6 mt-1 py-2 rounded-3 bg-dark text-white text-center">
            {selectedColor}
          </p>
        </div>
        <hr className="mt-4" />
        <p className="fs-18 fw-bold">Canvas area (?)</p>
        <div className="row">
          <div className="col-6 d-grid">
            <button className="w-full btn btn-color">
              <AiOutlinePlus />
            </button>
          </div>
          <div className="col-6 d-grid">
            <button className="w-full btn btn-color">
              {" "}
              <AiOutlineMinus />{" "}
            </button>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="form-check-label fs-18 fw-bold">Show guides</p>
        <div className="form-check form-switch ">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
