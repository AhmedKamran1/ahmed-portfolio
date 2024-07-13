import { TextField, styled } from "@mui/material";
import { baseFontSizes } from "../typography/font-sizes";

export const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(1.5),

  "& .MuiOutlinedInput-root": {
    color: theme.palette.text.primary,
    backgroundColor: "#804dee0f",
  },

  "& .MuiFormHelperText-root": {
    fontSize: baseFontSizes.sub.default,
    margin: 0,
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },

  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.primary,
  },

  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
    opacity: 0.75,
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1.5),
  },
}));
