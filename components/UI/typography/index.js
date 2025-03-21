import { Typography, styled } from "@mui/material";
import { baseFontSizes } from "./font-sizes";

export const Text = styled(Typography)(({ theme, variant }) => ({
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));

export const SignatureText = styled(Text)(({ theme, variant }) => ({
  fontFamily: '"Satisfy", cursive',
  fontWeight: 900,
  cursor: "pointer",
  letterSpacing: theme.spacing(0.25),
}));

export const GradientText = styled(SignatureText)(({ theme, variant }) => ({
  background: `linear-gradient(to right, ${theme.palette.text.secondary}, ${theme.palette.text.primary})`,
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));
