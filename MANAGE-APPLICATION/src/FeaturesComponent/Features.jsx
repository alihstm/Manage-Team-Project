import React, { useEffect } from "react";
import styles from "../FeaturesComponent/Features.module.css";
function Features() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className={styles.features} data-aos="zoom-in-up" id="Features">
      <div className={styles.difference}>
        <h1>What’s different about Manage?</h1>

        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className={styles.examples}>
        <div className={styles.example}>
          <span>01</span>

          <div>
            <h1>Track company-wide progress</h1>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>

        <div className={styles.example}>
          <span>02</span>

          <div>
            <h1>Advanced built-in reports</h1>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customizable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        <div className={styles.example}>
          <span>03</span>

          <div>
            <h1>Everything you need in one place</h1>
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks, and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
