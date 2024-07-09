import { AppBar, Button, styled } from "@mui/material";
import { FlexContainer } from "@/components/UI";

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  height: "85px",
  backgroundColor: "transparent",
  backdropFilter: "blur(5px)",
  zIndex: 999,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LinkContainer = styled(Button)(({ theme }) => ({
  backgroundColor: "none",
  color: theme.palette.text.primary,
  borderRadius: "5px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  fontWeight: 500,

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.static.primary,
  },
}));

export const NavContainer = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
