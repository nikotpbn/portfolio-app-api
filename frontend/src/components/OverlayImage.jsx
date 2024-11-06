import { Link } from "react-router-dom";

import avatar from "../assets/le_rato.jpg";

import styles from "./profile_card.module.css";

export default function OverlayImage({ slug, name, image }) {
  return (
    <div>
      <div className={styles["profile-card-image__overlay"]}>
        <div className={styles.text}>{name}</div>
      </div>
      <Link to={`/profiles/${slug}`}>
        <img
          className={styles["profile-card-image"]}
          src={image ? image : avatar}
          alt=""
        />
      </Link>
    </div>
  );
}
