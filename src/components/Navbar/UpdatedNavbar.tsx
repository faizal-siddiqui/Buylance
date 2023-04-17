import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./UpdatedNavbar.module.css";

type Props = {};

const UpdatedNavbar = (props: Props) => {
  const [username, setusername] = useState("Login");

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <img className={styles.logo} src="./logo.png" alt="logo" />
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to="/mens">Men</Link>
            <div className={styles.megamenu}></div>
          </li>
          <li>
            <Link to="/womens">Women</Link>
            <div className={styles.megamenu}></div>
          </li>
          <li>
            <Link to="/boys">Boys</Link>
            <div className={styles.megamenu}></div>
          </li>
          <li>
            <Link to="/girls">Girls</Link>
            <div className={styles.megamenu}></div>
          </li>
          <li>
            <input />
          </li>
          <li>
            <Link to="/login">{username}</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default UpdatedNavbar;
