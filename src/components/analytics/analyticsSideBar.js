import React from "react";
import styles from "./analyticsSideBar.module.css";
import graph from "../../../src/utilites/images/graph.svg";
import drop from "../../../src/utilites/images/drop.svg";
import sound from "../../../src/utilites/images/sound.svg";
import qr from "../../../src/utilites/images/qr.svg";
import eye from "../../../src/utilites/images/eye.svg";
import Image from "next/image";

const AnalyticsSideBar = () => {
  return (
    <div className="py-3" className="p-3">
      <div className="py-3" className={`${styles.analyticsSidebar}`}>
        
        <div className="py-3" className={`${styles.overView} px-3 d-flex justify-content-between d-flex align-items-center text-white`}>
        <Image src={eye} height="30" width="30" alt="graph" />
          <span>OverView</span>
        </div>
        <div className="py-3">
          <Image src={graph} height="30" width="30" alt="graph" />{" "}
          <span>Analytics</span>
        </div>
        <div className="py-3">
          <Image src={drop} height="30" width="30" alt="graph" />{" "}
          <span>Template </span>
        </div>
        <div className="py-3">
          <Image src={sound} height="30" width="30" alt="graph" />{" "}
          <span>Campaign</span>
        </div>
        <div className="py-3">
          <Image src={qr} height="30" width="30" alt="graph" />{" "}
          <sapn>QR Code</sapn>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSideBar;
