import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Giga Blocks</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>Decentralized School Directory Platform</Translate>
        </p>
        <p className="hero__description">
          <Translate>
          We Are Building the World's Largest Decentralized School Database - Together
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            <Translate>Get Started</Translate>
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/category/giga"
            style={{ marginLeft: '1rem' }}
          >
            <Translate>View API</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

      </main>
    </Layout>
  );
}
