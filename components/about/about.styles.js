import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "55vh",
  position: "relative",
  overflow: "hidden",
  minHeight: "220px",
  perspective: "1000px",

  [theme.breakpoints.down("md")]: {
    height: "35vh",
  },
}));
