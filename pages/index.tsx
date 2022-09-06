import Head from "next/head";
import Image from "next/image";
import parseLinkHeader from "parse-link-header";
import ExternalLink from "../components/ExternalLink";
import Highlight from "../components/Highlight";
import List from "../components/List";
import VerticalWaves from "../components/VerticalWaves";
import { formatWithCommas } from "../utils/numbers";
import myPicture from "../public/images/misha.jpeg";
import styles from "../styles/Home.module.css";

type StackOverflowData = {
  reputation: number;
  badges: {
    gold: number;
    silver: number;
    bronze: number;
  };
};

type GitHubData = {
  totalStars: number;
};

type LichessData = {
  rapidRating: number;
};

type Props = {
  stackOverflowData: StackOverflowData | null;
  gitHubData: GitHubData | null;
  lichessData: LichessData | null;
};

export default function Home({
  stackOverflowData,
  gitHubData,
  lichessData,
}: Props) {
  return (
    <div>
      <Head>
        <title>Misha Moroshko</title>
        <meta name="description" content="Personal website of Misha Moroshko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VerticalWaves className={styles.leftWaves} />
      <VerticalWaves className={styles.rightWaves} />
      <main className={styles.main}>
        <div className={styles.introContainer}>
          <h1 className={styles.h1}>Hi there, I’m Misha.</h1>
          <div className={styles.myPictureContainer}>
            <Image
              className={styles.myPicture}
              src={myPicture}
              alt="Picture of Misha Moroshko"
            />
          </div>
          <p>
            {`I’m a `}
            <Highlight color="red" delay={1000}>
              Front End engineer
            </Highlight>
            {` and a `}
            <Highlight color="green" delay={2000}>
              UX enthusiast
            </Highlight>
            {` from Melbourne, Australia. I love bootstrapping new products and engineering teams.`}
          </p>
          <p>
            <Highlight color="yellow" delay={3000}>
              Design Systems
            </Highlight>
            {` and `}
            <Highlight color="purple" delay={4000}>
              Open Source
            </Highlight>
            {` have a special place in my heart.`}
          </p>
        </div>
        <p>
          {`I worked at great companies like `}
          <ExternalLink href="https://twitter.com/fb_engineering">
            Facebook
          </ExternalLink>
          {` and `}
          <ExternalLink href="https://www.seek.com.au">SEEK</ExternalLink>
          .<br />
          {`Today, I help `}
          <ExternalLink href="https://muso.live">Muso</ExternalLink>
          {` reimagining live experiences.`}
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
        <p>Here are some random facts about me:</p>
        <List>
          {gitHubData && (
            <List.Item>
              I have {formatWithCommas(gitHubData.totalStars)} stars on public
              GitHub repositories.
            </List.Item>
          )}
          {stackOverflowData && (
            <List.Item>
              I earned {formatWithCommas(stackOverflowData.badges.gold)} gold
              badges, {formatWithCommas(stackOverflowData.badges.silver)} silver
              badges and {formatWithCommas(stackOverflowData.badges.bronze)}{" "}
              bronze badges on Stack Overflow, with a total reputation of{" "}
              {formatWithCommas(stackOverflowData.reputation)}.
            </List.Item>
          )}
          {lichessData && (
            <List.Item>
              {`My rapid chess rating on `}
              <ExternalLink href="https://lichess.org">Lichess</ExternalLink>
              {` is ${lichessData.rapidRating}. Invite me for a game!`}
            </List.Item>
          )}
        </List>
        <p>You can find me online on:</p>
        <List>
          <List.Item>
            <ExternalLink href="https://twitter.com/moroshko">
              Twitter
            </ExternalLink>
          </List.Item>
          <List.Item>
            <ExternalLink href="https://github.com/moroshko">
              GitHub
            </ExternalLink>
          </List.Item>
          <List.Item>
            <ExternalLink href="https://stackoverflow.com/users/247243/misha-moroshko">
              Stack Overflow
            </ExternalLink>
          </List.Item>
          <List.Item>
            <ExternalLink href="https://au.linkedin.com/in/moroshko">
              LinkedIn
            </ExternalLink>
          </List.Item>
        </List>
      </main>
    </div>
  );
}

async function getStackOverflowData(): Promise<StackOverflowData | null> {
  try {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/users/247243?site=stackoverflow"
    );
    const data = await response.json();

    return {
      reputation: data.items[0].reputation,
      badges: {
        gold: data.items[0].badge_counts.gold,
        silver: data.items[0].badge_counts.silver,
        bronze: data.items[0].badge_counts.bronze,
      },
    };
  } catch (e) {
    return null;
  }
}

async function getGitHubData(): Promise<GitHubData | null> {
  try {
    let totalStars = 0;
    let nextUrl: string =
      "https://api.github.com/users/moroshko/repos?type=public&per_page=100&page=1";

    while (true) {
      const response = await fetch(nextUrl);
      const data = await response.json();

      for (const repo of data) {
        totalStars += repo.stargazers_count;
      }

      const linkHeader = response.headers.get("link");

      if (!linkHeader) {
        break;
      }

      const links = parseLinkHeader(linkHeader);

      if (!links || !links.next) {
        break;
      }

      nextUrl = links.next.url;
    }

    return {
      totalStars,
    };
  } catch (e) {
    return null;
  }
}

async function getLichessData(): Promise<LichessData | null> {
  try {
    const response = await fetch(
      "https://lichess.org/api/user/moroshko/perf/rapid"
    );
    const data = await response.json();

    return {
      rapidRating: Math.floor(data.perf.glicko.rating),
    };
  } catch (e) {
    return null;
  }
}

export async function getServerSideProps() {
  const [stackOverflowData, gitHubData, lichessData] = await Promise.all([
    getStackOverflowData(),
    getGitHubData(),
    getLichessData(),
  ]);

  return {
    props: {
      stackOverflowData,
      gitHubData,
      lichessData,
    },
  };
}
