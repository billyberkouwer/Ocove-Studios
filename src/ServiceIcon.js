import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ServiceIcon = () => {
    const icon = useRef(null);
    useFrame(() => (icon.current.rotation.y += 0.01));
    return (
            <mesh ref={icon}>
                <boxBufferGeometry attach="geometry" args={[3,3,3]} />
                <meshStandardMaterial attach="material" color="#dee2ff" />
            </mesh>
        );             
    }

    function IconCanvas () {
        return (
            <>
            <Canvas>
                <pointLight position={[20, 20, 10]} />
                <pointLight position={[-20, -20, 10]} />
                <ServiceIcon />
            </Canvas>
            </>
            )
    }

export default IconCanvas;