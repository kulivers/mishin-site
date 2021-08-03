import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills/Skills";
import MenuBar from "./components/nav";
import styled from "styled-components";

const ComponentsContainer = styled.div`
  //position: static;
  //margin-top: 77px;
`;

const App = () => {
  const [homeHeight, setHomeHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementById("home").clientHeight;
    setHomeHeight(height);
  }, []);

  return (
    <React.Fragment>
      <MenuBar homeHeight={homeHeight} />
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
