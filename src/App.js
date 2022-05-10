import "./style.css";
import React, { Suspense}  from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stage } from "@react-three/drei";
import { Jodan } from "./Pages/PageList";

export default function App() {
  return (
    <>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }} dpr={[1, 1.5]} camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.25} />
        <Suspense fallback={null}>
          <Stage 
            contactShadow={{blur:8, opacity:1}} 
            shadows  
            adjustCamera={null}  
            intensity = { 1 }  
            environment = "city"  
            preset = "rembrandt">
            <Jodan />
          </Stage>
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} enableZoom={false} enablePan={false}/>
      </Canvas>
    </>
  )
}