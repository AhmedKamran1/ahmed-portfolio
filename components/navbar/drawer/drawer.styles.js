import { IconButton, styled } from "@mui/material";
import { motion } from "framer-motion";

export const DrawerWrapper = styled(motion.div)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const HamburgerIcon = styled(IconButton)(({ theme }) => ({
  zIndex: 1000,
  position: "fixed",
  top: 29,
  right: 29,
}));

export const LinksContainer = styled(motion.div)(({ theme }) => ({
  zIndex: 1000,
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  width: "100vw",
  background: theme.palette.secondary.main,
  opacity: 0.95,
}));

export const Link = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
}));
