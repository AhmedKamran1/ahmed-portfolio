import React from "react";

// Styles
import * as Styles from "./drawer.styles";
import { FlexContainer, SignatureText, Text } from "@/components/UI";
import { Box } from "@mui/material";

// Animations
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const DrawerLinks = ({ navLinks, handleScroll, handleNavDrawer }) => {
  return (
    <Styles.Link variants={staggerContainer(0.1, 0)}>
      <Box component={motion.div} variants={itemVariants} mb={8} mt={-10}>
        <SignatureText
          variant="bigHeader"
          color="primary"
          onClick={() => {
            handleScroll("Home");
            handleNavDrawer();
          }}
        >
          {"< Ahmed />"}
        </SignatureText>
      </Box>
      {navLinks.map((item) => (
        <FlexContainer
          component={motion.div}
          key={item.id}
          gap={2.5}
          variants={itemVariants}
          onClick={() => {
            handleScroll(item.id);
            handleNavDrawer();
          }}
        >
          {item.icon}
          <Text variant="subHeader" color="primary" fontWeight={600}>
            {item.id}
          </Text>
        </FlexContainer>
      ))}
    </Styles.Link>
  );
};

export default DrawerLinks;
