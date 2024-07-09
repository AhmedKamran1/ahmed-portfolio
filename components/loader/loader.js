import React from "react";

// Styles
import * as Styles from "./loader.styles";
import { Box } from "@mui/material";

// Animation
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Styles.LoaderContainer
      animate={{ x: ["0", "-100%"] }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
    >
      <Box>
        <Styles.LoaderText variant="bigHeader">&lt;</Styles.LoaderText>
        <Styles.LoaderText variant="bigHeader">LOADING</Styles.LoaderText>
        <Styles.LoaderText variant="bigHeader">/&gt;</Styles.LoaderText>
      </Box>
      <Box mt={3}>
        <Styles.BarContainer>
          {Array.from({ length: 8 }).map((bar, index) => (
            <Box
              key={index}
              component={motion.div}
              animate={{ scaleY: [1, 2.5, 1] }}
              transition={{
                duration: 1.25,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </Styles.BarContainer>
      </Box>
    </Styles.LoaderContainer>
  );
};

export default Loader;
