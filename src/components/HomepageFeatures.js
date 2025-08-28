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

const FeatureList = [
  {
    title: 'Decentralized Identity',
    description: 'Secure, verifiable credentials using blockchain technology for educational institutions.',
    icon: '🔐'
  },
  {
    title: 'School Directory',
    description: 'Comprehensive database of schools with verified information and real-time updates.',
    icon: '🏫'
  },
  {
    title: 'API Integration',
    description: 'RESTful APIs for seamless integration with existing educational platforms.',
    icon: '🔌'
  },
  {
    title: 'Open Source',
    description: 'Transparent, community-driven development with full source code availability.',
    icon: '📖'
  }
];

function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
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
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Key Features</h2>
            <p>Discover what makes Giga Blocks the future of educational data management</p>
          </div>
          <div className={styles.featureGrid}>
            {FeatureList.map((props, idx) => (
              <FeatureCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      
      <section className={styles.contributors}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Open Source Contributors</h2>
            <p>Meet the amazing developers building the future of education</p>
          </div>
          <div className={styles.contributorGrid}>
            {contributorsList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
