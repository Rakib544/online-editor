import React from "react";
import AnalyticsBody from "./analyticsBody";
import AnalyticsSideBar from "./analyticsSideBar";

const Analytics = () => {
  return (
    <div className="row container">
      <div className="col-3">
        <AnalyticsSideBar />
      </div>
      <div className="col-9 mt-5">
        <AnalyticsBody />
      </div>
    </div>
  );
};

export default Analytics;
