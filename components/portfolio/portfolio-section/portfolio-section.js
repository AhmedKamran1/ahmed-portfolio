import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

// Styles
import * as Styles from "./portfolio-section.styles";
import { Box, Chip, Grid } from "@mui/material";
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
  const ref = useRef();
  const isOnScreen = useInView(ref, { margin: "-100px" });

  return (
    <Styles.PortfolioSection container columnGap={8} ref={ref}>
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
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Styles.ImageContainer>
          ))}
        </Slider>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        component={motion.div}
        variants={slideIn("right", "tween", 0.1, 0.5)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <FlexContainer
          sx={{ justifyContent: "space-between", flexWrap: "wrap-reverse" }}
        >
          <GradientText variant="bigHeader" sx={{ fontWeight: 900 }}>
            {item.title}
          </GradientText>
          <Styles.TechIconsContainer>
            {item.techStack.map((tech, index) => (
              <React.Fragment key={index}>{tech.icon}</React.Fragment>
            ))}
          </Styles.TechIconsContainer>
        </FlexContainer>
        <Text variant="main" sx={{ display: "block", mb: 2, mt: 2 }}>
          {item.description}
        </Text>
        <Styles.BulletContainer component="ul">
          {item.bullets.map((bulletPoint, index) => (
            <Box component="li" key={index}>
              <Text variant="body">{bulletPoint}</Text>
            </Box>
          ))}
        </Styles.BulletContainer>
        <Styles.TechChipsContainer>
          {item.techStack.map((tech, index) => (
            <Chip
              key={index}
              color="secondary"
              variant="outlined"
              label={tech.name}
            />
          ))}
        </Styles.TechChipsContainer>
        <FlexContainer sx={{ justifyContent: "flex-start", gap: 2 }}>
          <Link href={item.url.viewLink} target="_blank">
            <PrimaryButton
              variant="contained"
              color="primary"
              startIcon={<OpenInNewIcon color="secondary" />}
            >
              <Text variant="sub">View Project</Text>
            </PrimaryButton>
          </Link>
          <Link href={item.url.githubLink} target="_blank">
            <PrimaryButton
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon color="secondary" />}
            >
              <Text variant="sub">Github Link</Text>
            </PrimaryButton>
          </Link>
        </FlexContainer>
      </Grid>
    </Styles.PortfolioSection>
  );
};

export default PortfolioSection;
