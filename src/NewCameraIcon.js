import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Camera from "./assets/3d/camera.glb"

const Model = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(Camera)
  useFrame(() => (group.current.rotation.y += 0.005));
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[3,3,3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_3.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_4.geometry}
          material={nodes.Cylinder019_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_5.geometry}
          material={nodes.Cylinder019_5.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload(Camera)

function ModelCanvas () {
    return (
        <>
        <Canvas>
          <Suspense fallback={null}>
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, 10]} />
              <Model />
          </Suspense>
        </Canvas>
        </>
    )
}

export default ModelCanvas;