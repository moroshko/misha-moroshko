import "../styles/globals.css";
import type { AppProps } from "next/app";
import Splitbee from "../components/Splitbee";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Splitbee />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
