import React, { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

// Styles
import { Box } from "@mui/material";
import { ProgressBar, SectionHeader, Text } from "../UI";

// Component
import PortfolioSection from "./portfolio-section/portfolio-section";
import Particles from "../canvas/particles";

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
        <Text variant="bigHeader" color="text.primary" fontWeight={900}>
          My Projects
        </Text>
        <ProgressBar style={{ scaleX }} />
      </SectionHeader>
      {projects.map((item) => (
        <PortfolioSection item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Portfolio;
