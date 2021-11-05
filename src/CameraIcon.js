import React, { useRef } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import Camera from "./assets/3d/camera.glb"

const Model = (props) => {
  const group = useRef()
  const { nodes } = useGLTF(Camera)
  useFrame(() => (group.current.rotation.y += 0.01));
  return (
        <group ref={group} {...props} dispose={null}>
            <mesh scale={[1.1, 1.1, 0.55]} geometry={nodes.Cube.geometry} >
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