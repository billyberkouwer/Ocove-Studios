import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Web from "./assets/3d/web_icon.glb"

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(Web)
    useFrame(() => (group.current.rotation.y += 0.01));
    return (
      <group scale={[1.5,1.5,1.5]}ref={group} {...props} dispose={null}>
        <group
          position={[-0.61, 0.01, 0.87]}
          rotation={[1.91, -1.21, -Math.PI / 2]}
          scale={[0.04, 0.04, 0.04]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_1.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload(Web)

function ModelCanvas () {
    return (
        <>
        <Canvas>
            <Suspense fallback={null}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[-20, -20, 10]} />
                <Model />
            </Suspense>
        </Canvas>
        </>
    )
}

export default ModelCanvas;