import { ReactComponent as PipeLogo } from "./pressure-gauge-with-arrow.svg";
import { animateScroll } from "react-scroll";
import "./Logo.css";
import React from "react";
import "./PipeLogo.css";

const Logo = ({ children }) => {
  return (
    <div
      className="logo-container"
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    >
      <PipeLogo className="pipe-logo" />
      {/*<BikeLogo className="bike-logo" />*/}
      <span className="name">{children}</span>

      {/*{name.split("").map((char, index) => {*/}
      {/*  return (*/}
      {/*    <span className="logo-header" key={index}>*/}
      {/*      {char}*/}
      {/*    </span>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};
export default Logo;
