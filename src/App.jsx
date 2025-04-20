// src/App.js
import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router";
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis(({ scroll }) => {
  })
  return (
    <>
      <ReactLenis
        root
        options={{
          smooth: true,
          smoothTouch: true,
          lerp: 0.2,
        }}
        >
      <Header />
      <Outlet/>
        </ReactLenis>
    </>
  );
}

export default App;
