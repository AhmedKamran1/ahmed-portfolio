import { Box, styled } from "@mui/material";

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "550px",
  position: "relative",
  perspective: "1000px",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    height: "200px",
  },
}));
