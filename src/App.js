import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Skills from "./pages/Skills/Skills";
// import MenuBar from "./nav";
import { MenuBar } from "./nav/MenuBar";
import styled from "styled-components";

const ComponentsContainer = styled.div`
  //position: static;
  //margin-top: 77px;
`;

const App = () => {
  return (
    <React.Fragment>
      <MenuBar />
      <ComponentsContainer>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </ComponentsContainer>
    </React.Fragment>
  );
};
export default App;
