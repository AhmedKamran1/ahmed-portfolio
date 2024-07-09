import React from "react";
import { Inter } from "next/font/google";

// Components
import Hero from "@/components/hero/hero";
import Portfolio from "@/components/portfolio/portfolio";
import TechStack from "@/components/tech-stack/tech-stack";
import Contact from "@/components/contact/contact";
import Loader from "@/components/loader/loader";
import About from "@/components/about/about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <Loader />
      <Hero />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
    </React.Fragment>
  );
}
