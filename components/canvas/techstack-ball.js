import React, { Suspense } from "react";
import { useMediaQuery } from "@mui/material";

// ThreeJS
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// Loader
import CanvasLoader from "./canvas-loader";

const Ball = (props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={isMobile ? 2 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="purple"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const TechStackBallCanvas = ({ techImage }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={techImage} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TechStackBallCanvas;
