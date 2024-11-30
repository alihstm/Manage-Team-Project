import React, { useEffect } from "react";
import styles from "../UsersComponent/Users.module.css";
import User1Pic from "../assets/material/avatar-ali.png";
import User2Pic from "../assets/material/avatar-anisha.png";
import User3Pic from "../assets/material/avatar-richard.png";
import User4Pic from "../assets/material/avatar-shanai.png";

function Users() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className={styles.users}>
      <h1>What they've said</h1>

      <div className={styles.scrollContainer}>
        <div className={styles.ContentContainer}>
          <article className={styles.user}>
            <img src={User1Pic} alt="Ali Bravo" />
            <span>Ali Bravo</span>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </article>

          <article className={styles.user}>
            <img src={User2Pic} alt="Anisha Li" />
            <span>Anisha Li</span>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </article>

          <article className={styles.user}>
            <img src={User3Pic} alt="Richard Watts" />
            <span>Richard Watts</span>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </article>

          <article className={styles.user}>
            <img src={User4Pic} alt="Shanai Gough" />
            <span>Shanai Gough</span>
            <p>
              “Their software allows us to track, manage, and collaborate on our
              projects from anywhere. It keeps the whole team in sync without
              being intrusive.”
            </p>
          </article>
        </div>
      </div>

      <button className={styles.getStartedBtn}>Get Started !</button>
    </section>
  );
}

export default Users;
