import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useScroll, useSpring } from "framer-motion";

// Styles
import { Box } from "@mui/material";
import { ProgressBar, SectionHeader, SignatureText } from "../UI";

// Component
import PortfolioSection from "./portfolio-section/portfolio-section";
const Particles = dynamic(() => import("../canvas/particles"), {
  loading: () => <p>Loading...</p>,
});

// Utils
import { projects } from "@/utils/constants";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Box position="relative" ref={ref} id="Portfolio">
      <Particles />
      <SectionHeader>
        <SignatureText variant="bigHeader" color="text.primary">
          My Projects
        </SignatureText>
        <ProgressBar style={{ scaleX }} />
      </SectionHeader>
      {projects.map((item) => (
        <PortfolioSection item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Portfolio;
