// src/App.js
import React from "react";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Section2 from "./components/extraSection";
import CityInput from "./components/cityInput";
import Results from "./components/results";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
