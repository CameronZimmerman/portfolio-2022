import "../globals.css";
import Layout from "../components/layouts";
import type { AppProps } from "next/app";

function Portfolio({ Component, pageProps }: AppProps) {
  return Component.name !== "Resume" ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default Portfolio;
