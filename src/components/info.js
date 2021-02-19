import React, {useRef, useState} from "react"
import {useFrame} from "react-three-fiber"
import {MeshWobbleMaterial, OrbitControls} from "@react-three/drei";
import {useSpring, animated} from "react-spring-three";

const InfoContainer = ({position, color, speed, args}) => {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false);
    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
    });
    return (
        <animated.mesh
            position={position}
            ref={mesh}
            onClick={() => setExpand(!expand)}
            scale={props.scale}
            castShadow>
            <boxBufferGeometry attach='geometry' args={args}/>
            <MeshWobbleMaterial
                color={color}
                speed={speed}
                attach='material'
                factor={0.6}
            />
        </animated.mesh>


    );
};


export default InfoContainer

