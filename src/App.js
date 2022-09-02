import "./assets/styles/style.css";
import React, { Suspense, useState}  from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stage } from "@react-three/drei";
import { Jodan } from "./Pages/PageList";
import Menu from "./components/menu/Menu";
import { state } from "./store/State";

export default function App() {
  const [value, setValue] = useState(state)

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
            <Jodan value={value} setValue={setValue}/>
          </Stage>
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} enableZoom={false} enablePan={false}/>
      </Canvas>
      {/* <Menu /> */}
    </>
  )
}