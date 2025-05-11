import React from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import * as Styles from "./hero.styles";
import { Box, Grid, Tooltip } from "@mui/material";
import {
  FlexContainer,
  GradientText,
  PrimaryButton,
  SectionContainer,
  Text,
} from "../UI";

// Icons
import DescriptionIcon from "@mui/icons-material/Description";

// Animations
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

// Components
import Lottie from "lottie-react";
import heroAnimation from "../../public/assets/section-animations/hero.json";

// Utils
import { socialLinks } from "@/utils/constants";

const Hero = () => {
  return (
    <SectionContainer container id="Home">
      <Image
        src={"/assets/background.png"}
        alt="hero-image"
        fill
        sizes="100%"
        style={{ opacity: 0.25, zIndex: -1 }}
      />
      <Grid item xs={12} md={6} zIndex={1}>
        <FlexContainer gap={3}>
          <FlexContainer sx={{ flexDirection: "column" }}>
            <Styles.RoundCircle />
            <Styles.FadingLine />
          </FlexContainer>
          <Styles.HeroContent
            component={motion.div}
            variants={textVariant(3.5)}
            initial="hidden"
            animate="show"
          >
            <Text variant="bigHeader" color="text.primary" fontWeight={900}>
              Hi, I'm{" "}
              <Text variant="bigHeader" color="text.primary" fontWeight={900}>
                Ahmed Kamran.
              </Text>
            </Text>
            <Box>
              <GradientText variant="header" sx={{ fontWeight: 900 }}>
                Fullstack Web Developer ;
              </GradientText>
              <Text
                component={motion.span}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                variant="header"
                fontWeight={500}
              >
                |
              </Text>
            </Box>
            <Text variant="main" sx={{ display: "block", mt: 1 }}>
              An enthusiastic Fullstack Developer with a knack for creating
              beautiful and robust web applications.
            </Text>
            <FlexContainer sx={{ justifyContent: "flex-start" }}>
              {socialLinks.map((social) => (
                <Tooltip
                  key={social.id}
                  title={`View My ${social.id}`}
                  placement="bottom"
                >
                  <Link
                    href={social.redirectLink}
                    target={social.id !== "Email" ? "_blank" : "_self"}
                  >
                    <Styles.SocialIconButton color="secondary">
                      {social.icon}
                    </Styles.SocialIconButton>
                  </Link>
                </Tooltip>
              ))}
            </FlexContainer>
            <Link
              href={
                "https://drive.google.com/file/d/1hk3THDz1X6X0fJxiZx3sJMCISof4UXHM/view?usp=sharing"
              }
              target="_blank"
            >
              <PrimaryButton
                variant="contained"
                color="primary"
                startIcon={<DescriptionIcon color="secondary" />}
              >
                <Text variant="sub">View Resume</Text>
              </PrimaryButton>
            </Link>
          </Styles.HeroContent>
        </FlexContainer>
      </Grid>
      <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
        <Styles.ImageContainer>
          <Lottie
            style={{ height: "100%", width: "100%" }}
            animationData={heroAnimation}
          />
        </Styles.ImageContainer>
      </Grid>
      <Tooltip title="Scroll Down">
        <Styles.MouseShape>
          <Styles.MouseScroll>
            <Styles.MouseBall
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </Styles.MouseScroll>
        </Styles.MouseShape>
      </Tooltip>
    </SectionContainer>
  );
};

export default Hero;
