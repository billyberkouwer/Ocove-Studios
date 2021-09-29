import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import ThreeDIcon from "./assets/3d/3d_3d-icon.glb"

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(ThreeDIcon)
    useFrame(() => (group.current.rotation.y += 0.01));
    return (
        <group ref={group} {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Material}
            scale={[1.25,1.25,1.25]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.001']}
            scale={[1.25,1.25,1.25]}
        />
        </group>
    )
}

useGLTF.preload(ThreeDIcon)

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