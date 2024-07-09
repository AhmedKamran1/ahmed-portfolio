import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

// Styles
import * as Styles from "./portfolio-section.styles";
import { Chip, Grid, useMediaQuery } from "@mui/material";
import {
  FlexContainer,
  GradientText,
  PrimaryButton,
  Text,
} from "@/components/UI";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// Utils
import { activitySettings } from "@/utils/carousal-setttings";

// Animations
import { motion, useInView } from "framer-motion";
import { slideIn } from "@/utils/motion";

const PortfolioSection = ({ item }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const ref = useRef();
  const isOnScreen = useInView(ref, { margin: "-100px" });

  return (
    <Styles.PortfolioSection
      container
      columnSpacing={!isMobile ? 8 : 0}
      ref={ref}
    >
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={slideIn("left", "tween", 0.1, 0.5)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <Slider {...activitySettings}>
          {item.img.map((image, index) => (
            <Styles.ImageContainer key={index}>
              <Image
                src={image}
                alt={`portfolio-${item.title}`}
                fill
                sizes="100%"
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </Styles.ImageContainer>
          ))}
        </Slider>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={slideIn("right", "tween", 0.1, 0.5)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <FlexContainer
          sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          <GradientText variant="bigHeader" sx={{ mb: 2, fontWeight: 900 }}>
            {item.title}
          </GradientText>
          <FlexContainer gap={3}>
            {item.techStack.map((tech, index) => (
              <React.Fragment key={index}>{tech.icon}</React.Fragment>
            ))}
          </FlexContainer>
        </FlexContainer>
        <Text variant="main" sx={{ display: "block", mb: 3, mt: 2 }}>
          {item.description}
        </Text>
        <FlexContainer sx={{ justifyContent: "flex-start", gap: 0.5, mb: 3 }}>
          {item.techStack.map((tech, index) => (
            <Chip
              key={index}
              color="secondary"
              variant="outlined"
              label={tech.name}
            />
          ))}
        </FlexContainer>
        <FlexContainer sx={{ justifyContent: "flex-start", gap: 2 }}>
          <PrimaryButton
            variant="contained"
            color="primary"
            startIcon={<OpenInNewIcon color="secondary" />}
          >
            <Text variant="body">View Project</Text>
          </PrimaryButton>
          <PrimaryButton
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon color="secondary" />}
          >
            <Text variant="body">Github Link</Text>
          </PrimaryButton>
        </FlexContainer>
      </Grid>
    </Styles.PortfolioSection>
  );
};

export default PortfolioSection;
