import React from 'react';
import styles from './leftSideBar.module.css';
import { data } from '../../../utilites/data';
import Image from 'next/image';

const LeftSideBar = () => {
  return (
    <div className={`${styles.mainLeftSideBar}`}>
      <div className="container">
        <div className={`${styles.LeftSideBar}`}>
          {data.map((logo) => (
            <div key={logo.id} className={`${styles.LeftSideBarLogo} `}>
              <Image src={logo.logo} width="50" height="50" alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
