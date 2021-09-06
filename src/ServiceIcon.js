import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ServiceIcon = () => {
    const icon = useRef(null);
    useFrame(()=> (icon.current.rotation.y += 0.01));
    return (
            <mesh ref={icon}>
                <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
                <meshStandardMaterial attach="material" />
            </mesh>
        );             
    }

function IconCanvas () {
    return (
        <>
        <Canvas>
            <ServiceIcon />
        </Canvas>
        </>
        )
    }

export default IconCanvas;