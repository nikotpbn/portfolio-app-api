import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faDeviantart,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./profile_card.module.css";

import OverlayImage from "./OverlayImage";

export default function ProfileCard({ profile }) {
  return (
    <div className={styles["profile-card"]}>
      <OverlayImage slug={profile.slug} name={profile.name} src={profile.img} />

      <div className={styles.socials}>

        <Link to={profile.twitter} target="_blank">
          <FontAwesomeIcon
            className={styles["socials-icon"]}
            icon={faSquareXTwitter}
          />
        </Link>
        <Link to={profile.instagram} target="_blank">
          <FontAwesomeIcon
            className={styles["socials-icon"]}
            icon={faSquareInstagram}
          />
        </Link>
        <Link to={profile.deviant} target="_blank">
          <FontAwesomeIcon
            className={styles["socials-icon"]}
            icon={faDeviantart}
          />
        </Link>
        <Link
          className={styles["socials-icon"]}
          to={profile.oficial}
          target="_blank"
        >
          Oficial
        </Link>
      </div>
    </div>
  );
}
