import React from "react";
import Charts from "./components/Charts";
import MainHeader from "./components/Header";
import MainContainer from "./components/Container";
import InfoContainer from "./components/info";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import Shape3d from "./components/3dShapes";
import AppRouter from "./router/router";
const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
