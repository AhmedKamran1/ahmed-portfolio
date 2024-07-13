import React, { useState, useEffect } from "react";

// Styles
import * as Styles from "./gradient-cursor.styles";

const GradientCursor = () => {
  const [gradient, setGradient] = useState(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const xPercent = (clientX / width) * 100;
    const yPercent = (clientY / height) * 100;

    const newGradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #804dee, transparent 100px)`;
    setGradient(newGradient);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Styles.StyledCursor
      sx={{ background: gradient }}
      animate={{ opacity: [0.25, 0.5, 0.25] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  );
};

export default GradientCursor;
