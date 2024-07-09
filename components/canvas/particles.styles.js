import { Box, styled } from "@mui/material";
import Particles from "@tsparticles/react";

export const ParticlesContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: -1,
}));

export const StyledParticles = styled(Particles)(({ theme }) => ({
  height: "100%",
}));
