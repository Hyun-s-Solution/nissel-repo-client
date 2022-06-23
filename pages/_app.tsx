import "../styles/globals.css";
import NavBar from "../components/navbar";
import NavTitle from "../components/navTitle";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar>
        <NavTitle></NavTitle>
      </NavBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
