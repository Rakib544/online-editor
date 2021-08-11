import Image from "next/image";
import React from "react";
import Icon from "../../utilites/images/Mask Group.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg  py-2`}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          <Image src={Icon} alt="icon" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex justify-content-end align-items-center ">
            <li className="nav-item me-5">
              <a className={`${styles.navBtn} `} href="#">
                Project
              </a>
            </li>
            <li className="nav-item me-5">
              <a className={`${styles.navBtn} `} href="#">
                QR Code
              </a>
            </li>
            <li className="nav-item me-5">
              <a className={`${styles.navBtn} `} href="#">
                Analytics
              </a>
            </li>
            <li className="nav-item me-5">
              <a className={`${styles.publishBtn} `} href="#">
                Publish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
