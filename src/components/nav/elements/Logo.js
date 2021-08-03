import { ReactComponent as BikeLogo } from "../undraw_Ride_a_bicycle_2yok 12.svg";
import { animateScroll } from "react-scroll";
import "./Logo.css";

const Logo = ({ name }) => {
  return (
    <div
      className="logo-container"
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    >
      <BikeLogo className="bike-logo" />
      <span className="name">{name}</span>

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
