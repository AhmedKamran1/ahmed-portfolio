import { Box, styled } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(255,0,255,0.03)",
  backdropFilter: "blur(5px)",
  borderRadius: "5px",
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2.5),
  },
}));
