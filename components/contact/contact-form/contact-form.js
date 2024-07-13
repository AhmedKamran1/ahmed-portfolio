import React, { useState } from "react";
import { useFormik } from "formik";

// Styles
import * as Styles from "./contact-form.styles";
import {
  FlexContainer,
  InputField,
  PrimaryButton,
  Text,
} from "@/components/UI";
import { CircularProgress, FormLabel, Snackbar } from "@mui/material";

// Icons
import SendIcon from "@mui/icons-material/Send";

// Utils
import { contactSchema } from "@/utils/validation-schema/contact";

const ContactForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setOpenSnackbar(true);
      const data = await response.json();
      setMessage(data.message);
    } catch (e) {
      console.log(e);
    } finally {
      formik.setSubmitting(false);
      formik.resetForm();
    }
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: submitHandler,
  });

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={4000}
        message={message}
        onClose={handleClose}
      />
      <Styles.FormContainer component="form" onSubmit={formik.handleSubmit}>
        <Text variant="main" fontWeight={500} color="text.primary">
          Get in touch
        </Text>
        <Text
          variant="bigHeader"
          color="text.primary"
          sx={{ display: "block", mb: 5, fontWeight: 900 }}
        >
          Contact Me
        </Text>
        <FormLabel htmlFor="name" sx={{ color: "text.primary" }}>
          Your Name
        </FormLabel>
        <InputField
          name="name"
          id="name"
          label="Name"
          variant="outlined"
          placeholder="Enter Your Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name && Boolean(formik.touched.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <FormLabel htmlFor="email" sx={{ color: "text.primary" }}>
          Your Email Address
        </FormLabel>
        <InputField
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          placeholder="Enter Email Address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && Boolean(formik.touched.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <FormLabel htmlFor="message" sx={{ color: "text.primary" }}>
          Your Message
        </FormLabel>
        <InputField
          name="message"
          id="message"
          label="Message"
          variant="outlined"
          placeholder="Write Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.message && Boolean(formik.touched.message)}
          helperText={formik.touched.message && formik.errors.message}
          multiline
          rows={6}
        />
        <FlexContainer>
          <PrimaryButton
            variant="contained"
            color="primary"
            sx={{ width: "50%", mt: 1 }}
            startIcon={
              !formik.isSubmitting ? (
                <SendIcon color="secondary" />
              ) : (
                <CircularProgress color="primary" />
              )
            }
            type="submit"
            disabled={formik.isSubmitting}
          >
            {!formik.isSubmitting && <Text variant="sub">Send</Text>}
          </PrimaryButton>
        </FlexContainer>
      </Styles.FormContainer>
    </React.Fragment>
  );
};

export default ContactForm;
