import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import globalStyles from "../HeaderComponent/Header.module.css";
import pictures from "../assets//material/illustration-intro.svg";
function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className={styles.HeroSection} data-aos="zoom-out">
      <div className={styles.introduction}>
        <h1>Bring everyone together to build better products.</h1>

        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <button className={globalStyles.getStartedBtn}>Get Started !</button>
      </div>

      <img src={pictures} />
    </section>
  );
}
export default HeroSection;