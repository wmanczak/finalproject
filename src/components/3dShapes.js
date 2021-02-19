import React from "react"
import {Canvas, useFrame} from "react-three-fiber";
import {softShadows, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";
import InfoContainer from "./info";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {motion} from "framer-motion";

softShadows()

const newStyles = makeStyles({
    root: {
        maxHeight: "100%",
        height: 740,
        textAlign: "center",
    }
});
const Shape3d = () => {
    const classes=newStyles()
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'sans-serif',

        },


    });

    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.root}>
            <section style={{
            height: 700,
                padding:"120px 40px",
            textAlign:"center",

            }}>

            <Typography style={{
            }} variant="h3"> Shape and control your all data</Typography>

                >
         <Canvas

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
                    <InfoContainer position={[-2, 1, -5]} color='#b22c5a' speed={6}/>
                    <InfoContainer position={[5, 1, -2]} color='#b22c5a' speed={6}/>
                </group>
                <OrbitControls/>
            </Canvas>
        </section>
            </Paper>
        </ThemeProvider>
    )
}
//komponenty z wielkiej litery

export default Shape3d;