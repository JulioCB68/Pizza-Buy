import React from "react";

import "./assets/style/global.scss";
import styles from "./assets/style/Home.module.scss";

import SheetIcon from "./assets/icons/FolhaEfect.svg";
import HomeIcon from "./assets/icons/HomeIcon.svg";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <div className={styles.links}>
          <button className={styles.homeButton}>
            <img src={HomeIcon} alt="" />
          </button>
          <ul>
            <li className={styles.link}>Destaques</li>
            <li className={styles.link}>Promoções</li>
            <li className={styles.link}>Cardápio</li>
            <li className={styles.link}>Feedbacks</li>
          </ul>
        </div>
        <div className={styles.sheetIcon}>
          <img src={SheetIcon} alt="" />
        </div>
      </div>
      <div className={styles.sla}></div>
    </div>
  );
}

export default App;
