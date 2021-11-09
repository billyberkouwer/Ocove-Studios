import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import Rock from './assets/3d/3D_icon.glb';

const Model = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(Rock)
    useFrame(() => (group.current.rotation.y += 0.01));
    return (
        <group ref={group} {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere.geometry}
            material={materials['Material.001']}
          />
        </group>
      )
    }
    
    useGLTF.preload(Rock)

function ModelCanvas () {
    return (
        <>
        <Canvas>
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