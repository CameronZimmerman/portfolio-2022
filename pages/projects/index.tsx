import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./Projects.module.css";
import { GithubLogo } from "phosphor-react";

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
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>some projects I have worked on</p>

        <section className={styles.projects}>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>GIM llc</h2>
            <Image
              src="/gimimage.png"
              alt="corporate website transforming in a ghost like manner"
              width="300px"
              height="150px"
            />
            <p>
              A seemingly normal corporate website turned multiplayer ghost
              story.
            </p>
            <p>React.js | Socket.io | Node.js</p>
            <a
              target="_blank"
              className={styles.icon}
              rel="noreferrer"
              href="https://github.com/GIM-LLC"
            >
              <GithubLogo size={32} />
            </a>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>Flappy Duck</h2>
            <Image
              src="/flappyduck.png"
              alt="Pixle art words of 'Flappy Duck'"
              width="300px"
              height="150px"
            />
            <p>
              A clone of Flappy Bird used as a learning example during a lecture
              on Phaser.io.
            </p>
            <p>Phaser.io | Node.js</p>
            <a
              target="_blank"
              className={styles.icon}
              rel="noreferrer"
              href="https://github.com/CameronZimmerman/phaser-flappy-duck-finished"
            >
              <GithubLogo size={32} />
            </a>
          </section>
          <section className={styles.card}>
            <h2 className={styles.subtitle}>Discord Ambience Bot</h2>
            <Image
              src="/ambi.jpeg"
              alt="Pixle art words of 'Flappy Duck'"
              width="150px"
              height="150px"
            />
            <p>
              Discord bot to play soothing ambience
              in your Discord voice channel
            </p>
            <p>discord.js | Node.js | Youtube API</p>
            <a
              target="_blank"
              className={styles.icon}
              rel="noreferrer"
              href="https://github.com/ambience-bot"
            >
              <GithubLogo size={32} />
            </a>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
