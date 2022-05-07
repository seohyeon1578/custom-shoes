import "./style.css";
import React, { Suspense}  from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls} from "@react-three/drei";
import { Jodan } from "./Pages/PageList";

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} position={[5, 25, 20]} angle={0.1} penumbra={1} />
        <Suspense fallback={null}>
          <Jodan />
        </Suspense>
      </Canvas>
    </>
  )
}