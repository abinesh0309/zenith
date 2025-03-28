import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          src="/logo/nklogo.png"
          alt=""
          srcset=""
          className={styles.logoimg}
        />
        <ul className={styles.navbarList}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/tech">TECHNICAL</a>
          </li>
          <li>
            <a href="/nonetech">NON-TECHNICAL</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
