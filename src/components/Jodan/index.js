import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { proxy, useSnapshot  } from "valtio";
import { state } from "../../store/State";

export default function Model({value, setValue}) {
  const ref = useRef();
  const snap = useSnapshot(value);
  const { nodes, materials } = useGLTF("/jodan.gltf");
  const [ hoverd, set ] = useState(null);

  useFrame(() => {
    ref.current.rotation.z = 6.1;
    ref.current.position.y = 1.5;
  })
  
  const onChangeState = (e) => {
    e.stopPropagation();
    state.current = e.object.material.name;
    setValue((prev)=>proxy({...prev, current : e.object.material.name}));
  }

  return (
    <group 
    ref={ref} 
    {...value} 
    dispose={null}
    onPointerOver = {(e) => (e.stopPropagation(), set(e.object.material.name))}
    onPointerOut = {(e) => e.intersections.length === 0 && set(null)}
    onPointerDown = {onChangeState}
    >
      <mesh
        geometry={nodes.nike_tick.geometry}
        material-color={snap.items.tick}
        material={materials.tick}
        position={[0.57810479, 1.75937605, 1.19329643]}
        rotation={[1.58301678, 0.00335331, 0.01198562]}
        scale={0.18727297}
      />
      <mesh
        geometry={nodes.tonguelogo.geometry}
        material-color = {snap.items.logo}
        material={materials.logo}
        position={[0.74533522, 3.95656729, 3.09476018]}
        rotation={[0.034768, -0.09191545, -1.29901319]}
        scale={[0.84075218, 0.84075207, 0.84075212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.collar.geometry}
        material-color = {snap.items.collar}
        material={nodes.collar.material}
        position={[-1.35377502, 3.15472078, 0.27142686]}
      />
      <mesh
        geometry={nodes.실린더001.geometry}
        material={nodes.실린더001.material}
        position={[0.62686628, 3.10165715, -1.08658826]}
        rotation={[0.04428643, 0.1101401, 0.00765312]}
        scale={[0.02937857, 0.29353932, 0.02927684]}
      />
      <mesh
        geometry={nodes.heel.geometry}
        material-color = {snap.items.heel}
        material={nodes.heel.material}
        position={[-1.35377502, 3.15472078, 0.27142686]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OUTSOLE.geometry}
        material-color = {snap.items.OUTSOLE}
        material={materials.OUTSOLE}
        position={[8.21380997, 0.13839588, 0.488157]}
        scale={[0.34985599, -0.34985587, 0.34985587]}
      />
      <mesh
        geometry={nodes.quarter_bet.geometry}
        material-color = {snap.items.quarter_bet}
        material={materials["quarter_bet"]}
        position={[-0.13337603, 2.23271489, 0.92367584]}
        rotation={[1.2887357, 0, 0]}
        scale={0.44894356}
      />
      <mesh
        geometry={nodes.collar001.geometry}
        material-color = {snap.items.collar}
        material={nodes.collar001.material}
        position={[-0.13337603, 2.23271489, 0.92367584]}
        rotation={[1.2887357, 0, 0]}
        scale={[0.43037066, 0.43037063, 0.43037063]}
      />
      <mesh
        geometry={nodes.laces.geometry}
        material-color = {snap.items.laces}
        material={nodes.laces.material}
        position={[3.83585668, 0.83171475, -7.28530502]}
        rotation={[-1.48398914, 1.28919308, 1.4993031]}
      />
      <mesh
        geometry={nodes.linear.geometry}
        material-color = {snap.items.linear}
        material={nodes.linear.material}
        position={[-1.32875407, 3.15472078, 0.26427802]}
      />
      <mesh
        geometry={nodes.eyelets.geometry}
        material-color = {snap.items.eyelets}
        material={materials.eyelets}
        position={[1.26249838, 2.80616236, 1.26725948]}
        rotation={[1.58817075, -0.47086134, 0.00788252]}
        scale={[0.14667551, 0.14667548, 0.14667551]}
      />
      <mesh
        geometry={nodes.평면003.geometry}
        material={nodes.평면003.material}
        position={[-2.20885372, 2.8000257, 0.33662516]}
        rotation={[0, 0, -1.58311523]}
        scale={0.278759}
      />
      <mesh
        geometry={nodes.Spitze.geometry}
        material-color = {snap.items.Spitze}
        material={nodes.Spitze.material}
        position={[2.28795815, 1.08225334, 0.48036084]}
        rotation={[1.42933368, -0.31195366, -0.07300155]}
      />
      <mesh
        geometry={nodes.tongue.geometry}
        material-color = {snap.items.tongue}
        material={nodes.tongue.material}
        position={[0.7561512, 3.90146351, 3.09476018]}
        rotation={[0.04770834, -0.09349711, -1.25641231]}
        scale={[0.84075218, 0.84075207, 0.84075212]}
      />
      <mesh
        geometry={nodes.평면005.geometry}
        material={nodes.평면005.material}
        position={[1.73748112, 3.10098433, -0.02533371]}
        rotation={[0.02531584, 0.00068119, -0.50318098]}
        scale={[0.26412687, 0.26412684, 0.20528042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Midsole.geometry}
        material-color = {snap.items.midsole}
        material={nodes.Midsole.material}
        position={[-2.02282715, 0.68628597, 0.61215419]}
        scale={0.36012027}
      />
      <mesh
        geometry={nodes.toe_box.geometry}
        material-color = {snap.items.toe_box}
        material={nodes.toe_box.material}
        position={[4.13329029, 1.09204996, 1.26709437]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.30121139}
      />
      <mesh
        geometry={nodes.toe.geometry}
        material-color = {snap.items.toe}
        material={materials.toe}
        position={[4.10060596, 1.89628661, -0.06964727]}
        scale={2.40254807}
      />
      <mesh
        geometry={nodes.stitchmidsole.geometry}
        material-color = {snap.items.stitchmidsole}
        material={nodes.stitchmidsole.material}
        position={[5.40707684, 0.69331604, 0.70034975]}
        rotation={[-0.00153481, -0.00401475, -0.00245209]}
        scale={[-0.07827395, -0.07827395, -0.07827394]}
      />
    </group>
  );
}

useGLTF.preload("/jodan.gltf");
