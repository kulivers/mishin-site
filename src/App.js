import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Licenses from "./pages/Licenses/Licenses";
// import MenuBar from "./nav";
import { MenuBar } from "./nav/MenuBar";
import styled from "styled-components";
import { Divider } from "@material-ui/core";

const App = () => {
  const [homeHeight, setHomeHeight] = useState(0);
  useEffect(() => {
    const height = document.getElementById("home").clientHeight;
    setHomeHeight(height);
  }, [homeHeight]);
  return (
    <React.Fragment>
      <MenuBar homeHeight={homeHeight} />
      <div>
        <Home />
        <Services />
        <About />
        <Licenses />
        <Contacts />
      </div>
    </React.Fragment>
  );
};
export default App;
