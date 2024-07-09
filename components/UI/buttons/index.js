import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
  border: `1px solid transparent`,
  textTransform: "capitalize",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0px 0px 30px ${theme.palette.primary.main}`,
  },
}));
