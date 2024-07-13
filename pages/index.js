import React from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

// Components
import Hero from "@/components/hero/hero";
const Portfolio = dynamic(() => import("@/components/portfolio/portfolio"), {
  loading: () => <p>Loading...</p>,
});
const Contact = dynamic(() => import("@/components/contact/contact"), {
  loading: () => <p>Loading...</p>,
});
const TechStack = dynamic(() => import("@/components/tech-stack/tech-stack"), {
  loading: () => <p>Loading...</p>,
});
import Loader from "@/components/loader/loader";
import About from "@/components/about/about";
import GradientCursor from "@/components/gradient-cursor/gradient-cursor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <Loader />
      <GradientCursor />
      <Hero />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
    </React.Fragment>
  );
}
