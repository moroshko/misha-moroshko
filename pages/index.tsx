import Head from "next/head";
import Image from "next/image";
import ExternalLink from "../components/ExternalLink";
import myPicture from "../public/images/misha.jpeg";
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
        <div className={styles.introContainer}>
          <h1>Hi there, I’m Misha.</h1>
          <div className={styles.myPictureContainer}>
            <Image
              className={styles.myPicture}
              src={myPicture}
              alt="Picture of Misha Moroshko"
            />
          </div>
          <p>
            I’m a Front End engineer and a UX enthusiast from Melbourne,
            Australia. I love bootstrapping new products and engineering teams.
          </p>
          <p>Design Systems and Open Source are very close to my heart.</p>
        </div>
        <p>
          {`I worked at great companies like `}
          <ExternalLink href="https://twitter.com/fb_engineering">
            Facebook
          </ExternalLink>
          {` and `}
          <ExternalLink href="https://www.seek.com.au">SEEK</ExternalLink>
          {`. Today, I’m
              helping `}
          <ExternalLink href="https://www.latitudefinancial.com.au">
            Latitude
          </ExternalLink>
          {` to become an employee of choice for Front End engineers.`}
        </p>
        <p>
          {`I love building tools to `}
          <ExternalLink href="https://rxviz.com">learn</ExternalLink>
          {` new things, to become `}
          <ExternalLink href="https://accessible-colors.com">
            more productive
          </ExternalLink>
          {`, or simply to `}
          <ExternalLink href="https://rotating-circle-illusion.vercel.app">
            have fun
          </ExternalLink>
          .
        </p>
        <p>You can find me online on:</p>
        <ul>
          <li>
            <ExternalLink href="https://twitter.com/moroshko">
              Twitter
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://github.com/moroshko">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://stackoverflow.com/users/247243/misha-moroshko">
              Stack Overflow
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://au.linkedin.com/in/moroshko">
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </main>
    </div>
  );
}
/*
  Get in touch
  fun facts:
    - total github stars
    - stackoverflow reputation
    - lichess rating (invite me for a game!)

*/
