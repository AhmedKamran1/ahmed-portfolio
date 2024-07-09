import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

export const SectionHeader = styled(Box)(({ theme }) => ({
  position: "sticky",
  textAlign: "center",
  top: 120,
  left: 0,
  [theme.breakpoints.down("md")]: {
    top: 20,
  },
}));

export const ProgressBar = styled(motion.div)(({ theme }) => ({
  height: "10px",
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));
