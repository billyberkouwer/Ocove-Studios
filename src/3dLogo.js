import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Logo from "./assets/3d/3d-logo-1.glb"

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(Logo)
    useFrame(() => (group.current.rotation.y += 0.01));
    return (
        <group scale={[1.5,1.5,1.5]} ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve001.geometry}
                material={materials['Material.001']}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    )
}
    
useGLTF.preload(Logo)

function ModelCanvas () {
    return (
        <>
        <Canvas camera={{ fov: 25, near: 0.1, far: 1000, position: [0, 2, 6.5] }}>
            <Suspense fallback={null}>
                <pointLight position={[20, 20, 10]} />
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