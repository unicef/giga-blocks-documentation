import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./HomepageFeatures.module.css";

const fetchContributors = async () => {
  const contributors = await axios(
    "https://api.github.com/repos/giga-nft2-0/Giga_Documentation/contributors" //Contributors of only giga documentation.
  );
  if (!contributors && !contributors.data) return [];
  return contributors.data;
};

function Feature({ avatar_url, login, html_url }) {
  return (
    <div className={`text-center ${styles.avatarsRow}`}>
      <a href={html_url} className={styles.contributorItem} target="_blank">
        <img
          src={avatar_url}
          className={styles.contributorsAvatar}
          alt={login}
        />
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  const [contributorsList, setContributorsList] = useState([]);

  useEffect(() => {
    async function fetchAllContributors() {
      const res = await fetchContributors();
      setContributorsList(res);
    }
    fetchAllContributors();
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="hero__title">
          <h2>Our Open Source Contributors</h2>
        </div>
        <div className="row">
          {contributorsList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
