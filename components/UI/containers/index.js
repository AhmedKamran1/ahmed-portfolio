import { Grid, Box, styled } from "@mui/material";

export const FlexContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PageContainer = styled(Box)({
  minHeight: "100vh",
});

export const SecondaryContainer = styled(Grid)({
  height: "100vh",
  minHeight: "650px",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
});

export const SectionContainer = styled(SecondaryContainer)(({ theme }) => ({
  marginTop: theme.spacing(16),
  marginBottom: theme.spacing(16),
  scrollSnapAlign: "center",
  width: "100%",
  position: "relative",
  margin: 0,
  padding: `0 ${theme.spacing(8)}`,
  scrollBehavior: "smooth",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: `0 ${theme.spacing(2)}`,
  },
}));
