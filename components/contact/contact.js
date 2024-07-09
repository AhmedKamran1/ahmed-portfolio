import React, { useRef } from "react";

// Styles
import { Grid } from "@mui/material";
import { SectionContainer } from "../UI";

// Animations
import { motion, useInView } from "framer-motion";
import { slideIn } from "@/utils/motion";

// Components
import ContactForm from "./contact-form/contact-form";
import EarthCanvas from "../canvas/earth";
import StarsCanvas from "../canvas/stars";

const Contact = () => {
  const ref = useRef();
  const isOnScreen = useInView(ref, { margin: "-100px" });

  return (
    <SectionContainer container id="Contact" ref={ref}>
      <Grid
        item
        xs={12}
        md={6}
        component={motion.div}
        variants={slideIn("up", "tween", 0.1, 0.75)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <ContactForm />
      </Grid>
      <Grid
        item
        xs={0}
        md={6}
        height="50%"
        sx={{ display: { xs: "none", lg: "block" }, cursor: "grab" }}
        component={motion.div}
        variants={slideIn("up", "tween", 0.1, 0.75)}
        initial="hidden"
        animate={isOnScreen && "show"}
      >
        <EarthCanvas />
      </Grid>
      <StarsCanvas />
    </SectionContainer>
  );
};

export default Contact;
