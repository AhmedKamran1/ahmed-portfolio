import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters.")
    .max(20, "Must be at most 20 characters.")
    .matches(/^[a-zA-Z\s]+$/, "name should only contain letters.")
    .required("Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is a required."),
  message: yup
    .string()
    .trim()
    .min(10, "Must be at least 10 characters.")
    .max(1000, "Must be at most 1000 characters.")
    .required("Message is required."),
});
