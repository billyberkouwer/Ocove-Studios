import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Logo from "./assets/3d/3d-logo-2.glb"

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(Logo)
    useFrame(() => (group.current.rotation.y += 0.005));
    return (
        <group ref={group} {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Retopo-material'].geometry}
            material={materials['Material.002']}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      )
    }
    
useGLTF.preload(Logo)

function ModelCanvas () {
    return (
        <>
        <Canvas camera={{ fov: 25, near: 0.1, far: 1000, position: [5, 2, 5.5] }}>
            <Suspense fallback={null}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[10, 10, 5]} />
                <pointLight position={[-20, -20, 10]} />
                <pointLight position={[-20, -20, 30]} />
                <pointLight position={[-20, -20, -30]} />
                <Model />
            </Suspense>
        </Canvas>
        </>
    )
};

export default ModelCanvas;