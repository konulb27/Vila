import React from "react";
import styles from "../../components/Section/Section.module.scss";
const Section = () => {
  return (
    <section className={styles.velcome}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Welcome to Villa resort</h1>
          <p>Discover our world-class hotel & restaurant resort.</p>
          <div className={styles.btn}>
            <button className={styles.pink}>EXPLORE THE BEAUTY</button>
            <button className={styles.transparent}>DOWNLOAD</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
