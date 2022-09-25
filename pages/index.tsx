import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Landing.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cameron Zimmerman</title>
        <meta
          name="Cameron Zimmerman - Portfolio site"
          content="Cameron Zimmerman's professional history."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>

        <p className={styles.description}>
          thank you for taking the time to view my portfolio
        </p>

        <section className={styles.bio}>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>I am...</h2>
            <p>
              A full-stack software engineer who has created frontend
              components, APIs, Microservices, CI-CD workflows, and even
              deployment infrastructure in a professional environment!
            </p>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>I am...</h2>
            <p>
              A pragmatic thinker, who loves tackling new and interesting
              issues. I learn quickly, and intuitively.
            </p>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>I am...</h2>
            <p>
              Relentlessly positive. I bring my best self every day, striving to
              iterate and improve whenever possible. I thrive both in team
              oriented environments, and autonomous work.
            </p>
          </section>
        </section>

        <section className={styles.proficiencies}>
          <h2 className={styles.subtitle}>Proficiencies</h2>
          <div className={styles.skillContainer}>
            <h3>React.js</h3>
            <h3>Next.js</h3>
            <h3>Node.js</h3>
            <h3>AWS Lambda</h3>
            <h3>EKS</h3>
            <h3>Kubernetes</h3>
            <h3>Javascript</h3>
            <h3>Typescript</h3>
            <h3>MongoDB</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
