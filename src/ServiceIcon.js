import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ServiceIcon () {
    return(
        <Canvas>
            <mesh>
                <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
                <meshStandardMaterial attach="material" />
            </mesh>
        </Canvas>
    )             
}

export default ServiceIcon;
                    

