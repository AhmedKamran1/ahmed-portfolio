import React from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import * as Styles from "./hero.styles";
import { Box, Grid, Tooltip, useMediaQuery } from "@mui/material";
import {
  FlexContainer,
  GradientText,
  PrimaryButton,
  SectionContainer,
  Text,
} from "../UI";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";

// Animations
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

// Components
import ComputersCanvas from "../canvas/computer";

const Hero = () => {
  const socialLinks = [
    {
      id: "Github",
      icon: <GitHubIcon fontSize="large" />,
      redirectLink: "https://github.com/AhmedKamran1",
    },
    {
      id: "LinkedIn",
      icon: <LinkedInIcon fontSize="large" />,
      redirectLink: "https://www.linkedin.com/in/ahmed-kamran-1742b4239/",
    },
    {
      id: "Email",
      icon: <EmailIcon fontSize="large" />,
      redirectLink: "mailto:ahmed.kamran11122@gmail.com",
    },
  ];

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <SectionContainer container columnSpacing={!isMobile ? 2 : 0} id="Home">
      <Grid item xs={12} md={6} zIndex={1}>
        <FlexContainer gap={3}>
          <FlexContainer sx={{ flexDirection: "column" }}>
            <Styles.RoundCircle />
            <Styles.FadingLine />
          </FlexContainer>
          <FlexContainer
            component={motion.div}
            variants={textVariant(3.5)}
            initial="hidden"
            animate="show"
            sx={{ gap: 2, flexDirection: "column", alignItems: "flex-start" }}
          >
            <Text variant="bigHeader" color="text.primary" fontWeight={600}>
              Hi, I'm{" "}
              <Text variant="bigHeader" color="text.primary" fontWeight={600}>
                Ahmed Kamran.
              </Text>
            </Text>
            <Box>
              <GradientText variant="header" sx={{ fontWeight: 900, mr: 1 }}>
                Frontend Web Developer;
              </GradientText>
              <Text
                component={motion.span}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                variant="header"
                fontWeight={900}
              >
                |
              </Text>
            </Box>
            <Text variant="main" sx={{ display: "block", mt: 1 }}>
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsum
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
                    target={social.id !== "Email" && "_blank"}
                  >
                    <Styles.SocialIconButton color="secondary">
                      {social.icon}
                    </Styles.SocialIconButton>
                  </Link>
                </Tooltip>
              ))}
            </FlexContainer>
            <PrimaryButton
              variant="contained"
              color="primary"
              href={
                "https://drive.google.com/uc?id=1-y1Z4zl-7vDjLLA999ROEP_k9FO21LWi&export=download"
              }
              startIcon={<DescriptionIcon color="secondary" />}
            >
              <Text variant="body">Download Resume</Text>
            </PrimaryButton>
          </FlexContainer>
        </FlexContainer>
      </Grid>
      <Grid item xs={12} md={6} zIndex={1} height="50%" mt={-35}>
        <ComputersCanvas />
      </Grid>
      <Image
        src={"/assets/herobg.png"}
        alt="hero-image"
        fill
        sizes="100%"
        style={{ opacity: 0.25 }}
      />
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
