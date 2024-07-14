import { FlexContainer, SectionContainer } from "@/components/UI";
import { Box, styled } from "@mui/material";

export const PortfolioSection = styled(SectionContainer)(({ theme }) => ({
  "& .slick-dots": {
    bottom: "-40px",
  },

  "& .slick-dots li button::before": {
    transition: "all 0.2s ease 0s",
    content: `""`,
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    background: theme.palette.primary.main,
  },
  [theme.breakpoints.between("md", "lg")]: {
    minHeight: "1200px",
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "550px",
  position: "relative",
  opacity: 0.95,
  borderRadius: "10px",

  [theme.breakpoints.between("md", "xl")]: {
    height: "50vh",
  },

  [theme.breakpoints.down("md")]: {
    height: "30vh",
    minHeight: "200px",
    marginTop: theme.spacing(10),
  },
}));

export const TechIconsContainer = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(3),

  [theme.breakpoints.down("xl")]: {
    marginBottom: theme.spacing(2),
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BulletContainer = styled(Box)(({ theme }) => ({
  lineHeight: theme.spacing(4),
  marginBottom: theme.spacing(3),
  listStyleType: "circle",
  marginLeft: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    lineHeight: theme.spacing(3),
  },
}));

export const TechChipsContainer = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "flex-start",
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(4),
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
