import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Camera from "./assets/3d/camera.glb"

const Model = (props) => {
  const group = useRef()
  const { nodes } = useGLTF(Camera)
  useFrame(() => (group.current.rotation.y += 0.01));
  return (
        <group ref={group} {...props} dispose={null}>
            <mesh scale={[1.2, 1.2, 0.6]} geometry={nodes.Cube.geometry} >
                <meshStandardMaterial roughness="0.3" metalness="0.5" attach="material" color="#DEE7FF" emissiveIntensity="2"/>
            </mesh>
        </group>
  )
}

useGLTF.preload(Camera);

function ModelCanvas () {
    return (
        <>
        <Canvas>
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, 10]} />
            <Model />
        </Canvas>
        </>
    )
}

export default ModelCanvas;