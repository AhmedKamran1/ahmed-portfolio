import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { FlexContainer, Text } from "../UI";

export const LoaderContainer = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(90deg, rgba(14,15,37,1) 10%, rgba(3,8,22,1) 90%)",
  top: 0,
  left: 0,
  zIndex: 2000,
}));

export const LoaderText = styled(Text)(({ theme }) => ({
  display: "inline-flex",
  fontWeight: 900,
  "&:nth-of-type(2) ": {
    letterSpacing: "-1em",
    overflow: "hidden",
    animation:
      "reveal 1500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate",
    "@keyframes reveal": {
      "0%": { opacity: 0 },
      "50%": {
        opacity: 1,
        letterSpacing: "0em",
      },
      "100%": {
        opacity: 0.5,
        letterSpacing: "-1em",
      },
    },
  },
}));

export const BarContainer = styled(FlexContainer)(({ theme }) => ({
  marginTop: theme.spacing(1),
  gap: 10,
  "& > *": {
    backgroundColor: theme.palette.secondary.main,
    width: "15px",
    height: "20px",
    borderRadius: "4px",
  },
}));
