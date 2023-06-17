import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./UpdatedNavbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {};

const UpdatedNavbar = (props: Props) => {
  const [username, setusername] = useState("Login");
  const [cartCount, setCartCount] = useState(10);
  const [openHam, setOpenHam] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleHam = () => {
    setOpenHam(!openHam);
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <header className={styles.header}>
      <div
        onClick={toggleSearch}
        className={openSearch ? `${styles.overlay}` : ""}
      ></div>
      <div
        className={
          openSearch
            ? `${styles.searchDropdown} ${styles.openSearchDropdown}`
            : styles.searchDropdown
        }
      >
        <input placeholder="Search Products" />
      </div>
      <div className={styles.navbar}>
        <div className={styles.ham} onClick={toggleHam}>
          <RxHamburgerMenu />
        </div>
        <div className={styles.flex}>
          <div>
            <Link to="/">
              <img className={styles.logo} src="./logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div className={styles.hide}>
          <FaSearch onClick={toggleSearch} />
        </div>
        <div className={styles.hide}>
          <Link to="/cart">
            <span className={`${styles.flex} ${styles.cartSpan}`}>
              <span className={styles.cartCount}>{cartCount}</span>
              <FaShoppingCart />
            </span>
          </Link>
        </div>

        <ul
          className={
            openHam ? `${styles.nav} ${styles.openHamMenu}` : styles.nav
          }
        >
          <li>
            <Link to="/mens">Men</Link>
            <div className={styles.megamenu}>
              <div className="sub-menu-col">
                <h3>Topwear</h3>
                <ul>
                  <li>
                    <Link to="/men/t-shirt">Casual Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Polo T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Sweatshirts</Link>
                  </li>
                  <li>
                    <Link to="#">Vests</Link>
                  </li>
                </ul>
              </div>
              <div className="sub-menu-col">
                <h3>Bottomwear</h3>
                <ul>
                  <li>
                    <Link to="#">Chinos</Link>
                  </li>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>

                  <li>
                    <Link to="#">Boxer shorts</Link>
                  </li>
                  <li>
                    <Link to="#">Jogers</Link>
                  </li>

                  <li>
                    <Link to="#">Lounge pants</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="/womens">Women</Link>
            <div className={styles.megamenu}>
              <div className="sub-menu-col">
                <h3>Topwear</h3>
                <ul>
                  <li>
                    <Link to="#">T-Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Tops</Link>
                  </li>
                  <li>
                    <Link to="#">Dresses</Link>
                  </li>

                  <li>
                    <Link to="#">Sweatshirts</Link>
                  </li>
                </ul>
              </div>
              <div className="sub-menu-col">
                <h3>Bottomwear</h3>
                <ul>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>
                  <li>
                    <Link to="#">Joggers</Link>
                  </li>
                  <li>
                    <Link to="#">Leggings</Link>
                  </li>
                  <li>
                    <Link to="#">Lounge pants</Link>
                  </li>
                  <li>
                    <Link to="#">Shorts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="/boys">Boys</Link>
            <div className={styles.megamenu}>
              <div className="sub-menu-col">
                <h3>Topwear</h3>
                <ul>
                  <li>
                    <Link to="#">Shirts</Link>
                  </li>
                  <li>
                    <Link to="#">T-shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Polo T-shirts</Link>
                  </li>
                </ul>
              </div>
              <div className="sub-menu-col">
                <h3>Bottomwear</h3>
                <ul>
                  <li>
                    <Link to="#">Shorts</Link>
                  </li>
                  <li>
                    <Link to="#">Joggers</Link>
                  </li>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="/girls">Girls</Link>
            <div className={styles.megamenu}>
              <div className="sub-menu-col">
                <h3>Topwear</h3>
                <ul>
                  <li>
                    <Link to="#">T-shirts</Link>
                  </li>
                  <li>
                    <Link to="#">Dresses</Link>
                  </li>
                </ul>
              </div>
              <div className="sub-menu-col">
                <h3>Bottomwear</h3>
                <ul>
                  <li>
                    <Link to="#">Leggings</Link>
                  </li>
                  <li>
                    <Link to="#">Shorts</Link>
                  </li>
                  <li>
                    <Link to="#">Jeans</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link to="/login">{username}</Link>
          </li>
          <li onClick={toggleSearch} className={styles.show}>
            <FaSearch />
          </li>
          <li className={styles.show}>
            <Link to="/cart">
              <span className={`${styles.flex} ${styles.cartSpan}`}>
                <span className={styles.cartCount}>{cartCount}</span>
                <FaShoppingCart />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default UpdatedNavbar;
