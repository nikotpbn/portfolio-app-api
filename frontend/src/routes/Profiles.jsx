import { useLoaderData } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";

import styles from "./profiles.module.css";

export default function Profiles() {
  const { profiles } = useLoaderData();

  return (
    <>
      <div className={styles["profiles-container"]}>
        {profiles.results.map((element) => (
          <ProfileCard profile={element} />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const data = await fetch("http://localhost:8000/api/artists/");
  const profiles = await data.json();
  return { profiles };
}
