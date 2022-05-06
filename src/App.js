import "./style.css";
import React from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls} from "@react-three/drei";
import { Physics } from '@react-three/cannon';
import { Jodan } from "./Pages/PageList";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Jodan />
      </Physics>
    </Canvas>
  )
}