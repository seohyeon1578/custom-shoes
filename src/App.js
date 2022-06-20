import "./styles/style.css";
import React, { Suspense, useState}  from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stage } from "@react-three/drei";
import { proxy } from "valtio";
import { Jodan,Menu } from "./Pages/PageList";

const state = proxy({
  current: "Tongue",
  items: {
    tick: "#ffffff",
    logo: "#ffffff",
    collar: "#ffffff",
    heel: "#ffffff",
    quarter_bet: "#ffffff",
    OUTSOLE: "#ffffff",
    Midsole: "#ffffff",
    laces: "#ffffff",
    linear: "#ffffff",
    eyelets: "#ffffff",
    Spitze: "#ffffff",
    tongue: "#ffffff",
    toe_box: "#ffffff",
    toe: "#ffffff",
    stitchmidsole: "#ffffff",
  }
})

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
            <Jodan state={value} setValue={setValue}/>
          </Stage>
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 3} enableZoom={false} enablePan={false}/>
      </Canvas>
      <Menu state={value.current}/>
    </>
  )
}