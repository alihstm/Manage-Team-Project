import styles from "./Header.module.css";
import AnimatedBtn from "../animatedBtnComponent/animatedBtn.jsx";
import logo from "../assets/material/logo.svg";
function Header() {
  const navLinks = document.querySelectorAll(".navBar li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const sectionId = link.getAttribute("href");

      const section = document.querySelector(sectionId);

      section.scrollIntoView({ behavior: "smooth" });
    });
  });
  return (
    <header id="Home">
      <img src={logo} className="logo" />
      <ul className={styles.navBar}>
        <li>
          <a href="#" className={styles.navBarA}>
            Pricing
          </a>
        </li>

        <li>
          <a href="#">Product</a>
        </li>

        <li>
          <a href="#">About Us</a>
        </li>

        <li>
          <a href="#Features">Careers</a>
        </li>

        <li>
          <a href="#Footer">Community</a>
        </li>
      </ul>

      <AnimatedBtn />
    </header>
  );
}
export default Header;
