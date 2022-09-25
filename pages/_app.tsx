import "../globals.css";
import Layout from "../components/layouts";
import type { AppProps } from "next/app";

function Portfolio({ Component, pageProps }: AppProps) {
  console.log(Component.name);
  return Component.name !== "Resume" ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default Portfolio;
