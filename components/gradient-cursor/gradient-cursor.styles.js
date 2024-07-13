import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const StyledCursor = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -10,
  opacity: 0.5,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
