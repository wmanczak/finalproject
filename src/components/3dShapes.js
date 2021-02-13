import React from "react"
import {Canvas, useFrame} from "react-three-fiber";
import {softShadows, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";
import InfoContainer from "./info";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

softShadows()
const Shape3d = () => {
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'sans-serif',


        },


    });

    return (
        <ThemeProvider theme={theme}>
        <section style={{
            height: 600,
            fontSize: "2rem",
            color:"grey",
            textAlign:"center"
        }}>

            <Typography style={{
                marginTop:30
            }} variant="h4"> Our app will help you to customize, shape and control your all data</Typography>
         <Canvas
                style={{
                    marginTop:40
                }}
                colorManagement
                shadowMap
                camera={{position: [-5, 2, 10], fov: 60}}>
                <ambientLight intensity={0.3}/>
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                <pointLight position={[0, -10, 0]} intensity={1.5}/>
                <group>
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}
                        receiveShadow>
                        <planeBufferGeometry attach='geometry' args={[100, 100]}/>
                        <shadowMaterial attach='material' opacity={0.3}/>
                    </mesh>
                    <InfoContainer
                        position={[0, 1, 0]}
                        color='lightblue'
                        args={[3, 2, 1]}
                        speed={1}
                    />
                    <InfoContainer position={[-2, 1, -5]} color='#c71c49' speed={6}/>
                    <InfoContainer position={[5, 1, -2]} color='#c71c49' speed={6}/>
                </group>
                <OrbitControls/>
            </Canvas>
        </section>
        </ThemeProvider>
    )
}
//komponenty z wielkiej litery

export default Shape3d;