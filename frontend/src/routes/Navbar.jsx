import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { Outlet } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles["navbar-item"]}>
            <Link className={styles["navbar-link"]} to="/">
              Home
            </Link>
          </li>
          <li className={styles["navbar-item"]}>
            <Link className={styles["navbar-link"]} to="/profiles">
              Profiles
            </Link>
          </li>
          <li className={styles["navbar-item"]}>
            <Link className={styles["navbar-link"]} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
