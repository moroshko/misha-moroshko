import Head from "next/head";
import Image from "next/image";
import parseLinkHeader from "parse-link-header";
import ExternalLink from "../components/ExternalLink";
import Highlight from "../components/Highlight";
import List from "../components/List";
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
      <svg
        className={styles.background}
        viewBox="0 0 675 900"
        role="presentation"
      >
        <path
          d="M110 0L104.7 21.5C99.3 43 88.7 86 89.3 128.8C90 171.7 102 214.3 103.5 257.2C105 300 96 343 94.3 385.8C92.7 428.7 98.3 471.3 97.2 514.2C96 557 88 600 86.5 642.8C85 685.7 90 728.3 95 771.2C100 814 105 857 107.5 878.5L110 900L0 900L0 878.5C0 857 0 814 0 771.2C0 728.3 0 685.7 0 642.8C0 600 0 557 0 514.2C0 471.3 0 428.7 0 385.8C0 343 0 300 0 257.2C0 214.3 0 171.7 0 128.8C0 86 0 43 0 21.5L0 0Z"
          fill="#fa7268"
        />
        <path
          d="M87 0L83.7 21.5C80.3 43 73.7 86 70.8 128.8C68 171.7 69 214.3 68.3 257.2C67.7 300 65.3 343 66.7 385.8C68 428.7 73 471.3 77.3 514.2C81.7 557 85.3 600 83.7 642.8C82 685.7 75 728.3 73.8 771.2C72.7 814 77.3 857 79.7 878.5L82 900L0 900L0 878.5C0 857 0 814 0 771.2C0 728.3 0 685.7 0 642.8C0 600 0 557 0 514.2C0 471.3 0 428.7 0 385.8C0 343 0 300 0 257.2C0 214.3 0 171.7 0 128.8C0 86 0 43 0 21.5L0 0Z"
          fill="#eb5967"
        />
        <path
          d="M37 0L39 21.5C41 43 45 86 48.5 128.8C52 171.7 55 214.3 57.3 257.2C59.7 300 61.3 343 61.8 385.8C62.3 428.7 61.7 471.3 61.5 514.2C61.3 557 61.7 600 59.2 642.8C56.7 685.7 51.3 728.3 47 771.2C42.7 814 39.3 857 37.7 878.5L36 900L0 900L0 878.5C0 857 0 814 0 771.2C0 728.3 0 685.7 0 642.8C0 600 0 557 0 514.2C0 471.3 0 428.7 0 385.8C0 343 0 300 0 257.2C0 214.3 0 171.7 0 128.8C0 86 0 43 0 21.5L0 0Z"
          fill="#da3f67"
        />
        <path
          d="M41 0L39.5 21.5C38 43 35 86 30.8 128.8C26.7 171.7 21.3 214.3 21.7 257.2C22 300 28 343 28.8 385.8C29.7 428.7 25.3 471.3 24.3 514.2C23.3 557 25.7 600 27.7 642.8C29.7 685.7 31.3 728.3 30 771.2C28.7 814 24.3 857 22.2 878.5L20 900L0 900L0 878.5C0 857 0 814 0 771.2C0 728.3 0 685.7 0 642.8C0 600 0 557 0 514.2C0 471.3 0 428.7 0 385.8C0 343 0 300 0 257.2C0 214.3 0 171.7 0 128.8C0 86 0 43 0 21.5L0 0Z"
          fill="#c62368"
        />
      </svg>
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
        <p>Here are some fun facts about me:</p>
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
