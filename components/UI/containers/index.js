import { Grid, Box, styled } from "@mui/material";

export const FlexContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PageContainer = styled(Box)({
  height: "100dvh",
});

export const SecondaryContainer = styled(Grid)({
  height: "100dvh",
  minHeight: "650px",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
});

export const SectionContainer = styled(SecondaryContainer)(({ theme }) => ({
  marginTop: theme.spacing(16),
  marginBottom: theme.spacing(16),
  scrollSnapAlign: "start",
  width: "100%",
  position: "relative",
  margin: 0,
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  scrollBehavior: "smooth",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  },
}));
