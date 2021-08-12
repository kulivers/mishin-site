import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Licenses from "./pages/Licenses/Licenses";
import { MenuBar } from "./nav/MenuBar";
import { FabButtonWithScrollLink } from "./other/FabButtonWithScrollLink";
import Footer from "./pages/Footer/Footer";

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
        <Footer />
        <FabButtonWithScrollLink />
      </div>
    </React.Fragment>
  );
};
export default App;
