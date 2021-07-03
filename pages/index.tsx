import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Misha Moroshko</title>
        <meta name="description" content="Personal website of Misha Moroshko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hi there, I’m Misha.</h1>
        <p>More stuff is coming soon...</p>
      </main>
    </div>
  );
}
