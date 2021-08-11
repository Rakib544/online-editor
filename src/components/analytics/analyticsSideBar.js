import React from "react";
import styles from "./analyticsSideBar.module.css";

const AnalyticsSideBar = () => {
  return (
    <div className={`${styles.analyticsSidebar}`}>
      <p className={`${styles.overView} text-center py-2 text-white`}>
        OverView
      </p>
      <p className="py-3">Analytics</p>
      <p className="py-3">Template</p>
      <p className="py-3">Campaign</p>
      <p className="py-3">QR Code</p>
    </div>
  );
};

export default AnalyticsSideBar;
