import React from "react";
import Head from "next/head";

// Styles
import "@/styles/globals.css";

// Component
import Layout from "@/components/layout/layout";
import { ThemeContextProvider } from "@/context/theme-provider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Head>
          <title>{"<Ahmed Kamran/>"}</title>
          <link
            rel="icon"
            type="image/png"
            href="/assets/portfolio-logo.svg"
            id="title-logo"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
