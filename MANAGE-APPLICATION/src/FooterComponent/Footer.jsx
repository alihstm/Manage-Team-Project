import React, { useEffect } from "react";
import styles from "../FooterComponent/Footer.module.css";
import logo from "../assets/material/logo.svg";
import SocialIcon from "../FooterComponent/SocialIcon.jsx";
import { emailValidation } from "../FooterComponent/EmailValidation.jsx";

function Footer() {
  const { email, setEmail, isValidEmail, isButtonGreen, handleSubmit } =
    emailValidation();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const socialIcons = [
    {
      icon: "icons-tabler-brand-facebook",
      path: "M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z",
    },
    {
      icon: "icons-tabler-brand-youtube",
      path: "M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z",
    },
    {
      icon: "icons-tabler-brand-twitter",
      path: "M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z",
    },
    {
      icon: "icons-tabler-brand-pinterest",
      path: "M17 3.34a10 10 0 0 1 -8.512 18.023l2.364 -5.315a3.5 3.5 0 0 0 2.398 .952c2.708 0 4.75 -2.089 4.75 -5a6 6 0 1 0 -11.64 2.041a1 1 0 1 0 1.88 -.682a4 4 0 1 1 7.76 -1.36c0 1.818 -1.156 3.001 -2.75 3.001c-.609 0 -1.153 -.361 -1.478 -1.022l1.142 -2.572a1 1 0 0 0 -1.828 -.812l-4.392 9.882a10 10 0 0 1 -4.694 -8.476l.005 -.324a10 10 0 0 1 14.995 -8.336",
    },
    {
      icon: "icons-tabler-brand-instagram",
      path: "M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1",
    },
  ];

  const navLinks = document.querySelectorAll(".sections li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const sectionId = link.getAttribute("href");

      const section = document.querySelector(sectionId);

      section.scrollIntoView({ behavior: "smooth" });
    });
  });
  return (
    <footer data-aos="zoom-out-up" id="Footer">
      <section className={styles.FooterTop}>
        <h1>Simplify how your team works today.</h1>
        <button className={styles.animatedButton}>
          <svg
            viewBox="0 0 24 24"
            className={styles.arr2}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className={styles.text}>Get Started</span>
          <span className={styles.circle}></span>
          <svg
            viewBox="0 0 24 24"
            className={styles.arr1}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </section>

      <section className={styles.FooterBottom}>
        <div className={styles.logoSocialMedia}>
          <img src={logo} alt="Logo" />

          <div>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} icon={icon.icon} path={icon.path} />
            ))}
          </div>
        </div>

        <ul className={styles.sections}>
          <li>
            <a href="#Home">Home</a>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>

          <li>
            <a href="#">Products</a>
          </li>

          <li>
            <a href="#">About US</a>
          </li>
        </ul>

        <ul className={styles.sections}>
          <li>
            <a href="#Features">Careers</a>
          </li>

          <li>
            <a href="#Footer">Community</a>
          </li>

          <li>
            <a href="#Footer">Privacy Policy</a>
          </li>

          <p>Copyright 2024. All Rights Reserved</p>
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email@company.com"
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderColor: isValidEmail ? "" : "red",
            }}
          />
          <button
            type="submit"
            className={styles.goButton}
            style={{
              backgroundColor: isButtonGreen ? "green" : "",
            }}
          >
            Go
          </button>
        </form>
      </section>
    </footer>
  );
}
export default Footer;
