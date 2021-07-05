import Head from "next/head";
import Image from "next/image";
import parseLinkHeader from "parse-link-header";
import ExternalLink from "../components/ExternalLink";
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
  stackOverflowData: StackOverflowData;
  gitHubData: GitHubData;
  lichessData: LichessData;
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
        <p>Here are some fun facts about me:</p>
        <ul>
          <li>
            I have {formatWithCommas(gitHubData.totalStars)} stars on public
            GitHub repositories.
          </li>
          <li>
            I earned {formatWithCommas(stackOverflowData.badges.gold)} gold
            badges, {formatWithCommas(stackOverflowData.badges.silver)} silver
            badges and {formatWithCommas(stackOverflowData.badges.bronze)}{" "}
            bronze badges on Stack Overflow, with a total reputation of{" "}
            {formatWithCommas(stackOverflowData.reputation)}.
          </li>
          <li>
            My rapid chess rating on Lichess is {lichessData.rapidRating}.
            Invite me for a game!
          </li>
        </ul>
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

async function getStackOverflowData(): Promise<StackOverflowData> {
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
}

async function getGitHubData(): Promise<GitHubData> {
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
}

async function getLichessData(): Promise<LichessData> {
  const response = await fetch(
    "https://lichess.org/api/user/moroshko/perf/rapid"
  );
  const data = await response.json();

  return {
    rapidRating: Math.floor(data.perf.glicko.rating),
  };
}

export async function getServerSideProps() {
  const stackOverflowData = await getStackOverflowData();
  const gitHubData = await getGitHubData();
  const lichessData = await getLichessData();

  return {
    props: {
      stackOverflowData,
      gitHubData,
      lichessData,
    },
  };
}
