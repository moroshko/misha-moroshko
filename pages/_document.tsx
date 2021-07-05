import Document, { Html, Head, Main, NextScript } from "next/document";
import Splitbee from "../components/Splitbee";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          />
        </Head>
        <Splitbee />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
