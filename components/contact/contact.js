import React, { useRef } from "react";
import dynamic from "next/dynamic";

// Styles
import { Grid } from "@mui/material";
import { SectionContainer } from "../UI";

// Animations
import { motion, useInView } from "framer-motion";
import { slideIn } from "@/utils/motion";

// Components
const EarthCanvas = dynamic(() => import("../canvas/earth"), {
  loading: () => <p>Loading...</p>,
});
const StarsCanvas = dynamic(() => import("../canvas/stars"), {
  loading: () => <p>Loading...</p>,
});

import ContactForm from "./contact-form/contact-form";

const Contact = () => {
  const ref = useRef();
  const isOnScreen = useInView(ref, { margin: "-100px" });

  return (
    <SectionContainer container id="Contact" ref={ref} columnGap={8}>
      <Grid
        item
        xs={12}
        md={5}
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
        md={5}
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
