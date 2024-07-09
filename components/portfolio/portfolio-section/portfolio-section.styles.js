import { SectionContainer } from "@/components/UI";
import { Box, styled } from "@mui/material";

export const PortfolioSection = styled(SectionContainer)(({ theme }) => ({
  "& .slick-dots": {
    bottom: "-50px",
  },

  "& .slick-dots li button::before": {
    transition: "all 0.2s ease 0s",
    content: `""`,
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    background: theme.palette.primary.main,
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "500px",
  position: "relative",
  opacity: 0.95,
  borderRadius: "10px",

  [theme.breakpoints.down("md")]: {
    height: "200px",
    marginTop: theme.spacing(10),
  },
}));
