"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { Item3 } from "./Coins";

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [2, 0, 10],
        fov: 35,
      }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
      style={{
        pointerEvents: "auto",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    >
      <Suspense fallback={null}>
        <Float
          rotationIntensity={0.5}
          floatIntensity={2}
          speed={2}
        >
          <Item3 />
        </Float>

        <Environment preset="sunset" />

        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableRotate
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  );
}