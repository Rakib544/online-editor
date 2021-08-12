import React from "react";
import styles from "./analyticsSideBar.module.css";
import graph from "../../../src/utilites/images/graph.svg";
import drop from "../../../src/utilites/images/drop.svg";
import sound from "../../../src/utilites/images/sound.svg";
import qr from "../../../src/utilites/images/qr.svg";
import eye from "../../../src/utilites/images/eye.svg";
import Image from "next/image";
import Link from "next/link";

const AnalyticsSideBar = () => {
  return (
    <div className={`${styles.analyticsSideBarStyle} bg-white p-4`}>
      <div
        className={`${styles.overView} px-3 d-flex justify-content-between d-flex align-items-center text-white`}
      >
        <Image src={eye} height="30" width="30" alt="eye" />
        <span className="mx-3">OverView</span>
      </div>
      <div className="py-4">
        <Image src={graph} height="30" width="30" alt="graph" />
        <span className="mx-3">Analytics</span>
      </div>
      <div className="py-4">
        <Image src={drop} height="30" width="30" alt="drop" />
        <span className="mx-3">Template </span>
      </div>
      <div className="py-4">
        <Image src={sound} height="30" width="30" alt="sound" />
        <span className="mx-3">Campaign</span>
      </div>
      <div className="py-4">
        <Image src={qr} height="30" width="30" alt="qr" />
        <sapn className="mx-3">QR Code</sapn>
      </div>
    </div>
  );
};

export default AnalyticsSideBar;
