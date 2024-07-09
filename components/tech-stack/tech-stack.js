import React, { useRef } from "react";

// Styles
import { Box, Grid } from "@mui/material";
import { ProgressBar, SectionContainer, SectionHeader, Text } from "../UI";

// Animations
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { fadeIn } from "@/utils/motion";

// Component
import TechStackBallCanvas from "../canvas/techstack-ball";

// Utils
import { technologies } from "@/utils/constants";

const TechStack = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const isOnScreen = useInView(ref, { margin: "-100px" });

  return (
    <Box ref={ref}>
      <SectionHeader>
        <Text variant="bigHeader" color="text.primary" fontWeight={900}>
          Technologies
        </Text>
        <ProgressBar style={{ scaleX }} />
      </SectionHeader>
      <SectionContainer
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container columnSpacing={2} rowSpacing={4}>
          {technologies.map((technology, index) => (
            <Grid
              item
              xs={4}
              key={index}
              component={motion.div}
              variants={fadeIn("up", "spring", 0.1, 3)}
              initial="hidden"
              animate={isOnScreen && "show"}
            >
              <Box key={technology.name} sx={{ cursor: "grabbing" }}>
                <TechStackBallCanvas techImage={technology.image} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </Box>
  );
};

export default TechStack;
