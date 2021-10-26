import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Web from "./assets/3d/custom-3d-web-icon.glb"

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(Web)
    useFrame(() => (group.current.rotation.y += 0.01));
    return (
        <group ref={group} {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials['Material.001']}
            scale={[1.8,1.8,1.8]}
        />
        </group>
    )
}

useGLTF.preload(Web)

function ModelCanvas () {
    return (
        <>
        <Canvas>
            <Suspense fallback={<p>Loading...</p>}>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[-20, -20, 10]} />
                <Model />
            </Suspense>
        </Canvas>
        </>
    )
}

export default ModelCanvas;