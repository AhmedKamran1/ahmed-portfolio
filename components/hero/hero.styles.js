import { Box, IconButton, styled } from "@mui/material";
import { motion } from "framer-motion";
import { FlexContainer } from "../UI";

export const HeroContent = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(2),
  flexDirection: "column",
  alignItems: "flex-start",
}));

export const FadingLine = styled(Box)(({ theme }) => ({
  height: "400px",
  width: "5px",
  marginRight: theme.spacing(0.25),
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  transition: "all 0.25s",
  padding: theme.spacing(1.5),
  border: `1px solid transparent`,
  "&:hover": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    boxShadow: `0px 0px 25px ${theme.palette.primary.main}`,
  },
}));

export const RoundCircle = styled(Box)(({ theme }) => ({
  height: "25px",
  width: "25px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
}));

export const MouseShape = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "30px",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "15px",
  position: "absolute",
  bottom: 50,
  zIndex: 999,
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MouseScroll = styled(Box)(({ theme }) => ({
  height: "18px",
  width: "10px",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "15px",
  margin: "auto",
  marginTop: theme.spacing(0.75),
}));

export const MouseBall = styled(motion.div)(({ theme }) => ({
  height: "5px",
  width: "5px",
  borderRadius: "50%",
  margin: "auto",
  marginTop: theme.spacing(0.4),
  backgroundColor: theme.palette.primary.main,
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "55vh",
  position: "relative",
  overflow: "hidden",
  minHeight: "220px",

  [theme.breakpoints.down("md")]: {
    height: "35vh",
  },
}));
