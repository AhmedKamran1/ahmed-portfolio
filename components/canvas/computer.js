import React, { Suspense } from "react";
import { useMediaQuery } from "@mui/material";

// ThreeJS
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Loader
import CanvasLoader from "./canvas-loader";

const Computers = () => {
  const computer = useGLTF("/assets/desktop_pc/scene.gltf");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={[0, -3.25, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[2, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;