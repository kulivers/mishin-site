import styled from "styled-components";
import React from "react";

const BurgerDiv = styled.div`
  display: ${(props) => (props.show ? "inline-block" : "none")};
  //background-color: red;
  padding: 15px;

  cursor: pointer;
  z-index: 9999;

  div {
    background-color: white;
    height: 3px;
    width: 25px;
    margin: 5px;
  }

  @media (max-width: 780px) {
    //screen and
    display: block;
  }

  .line1 {
    transform: ${(props) =>
      props.isOpen ? "rotate(45deg) translateY(11px)" : "none"};
    transition: 0.2s ease-in-out;
  }

  .line2 {
    transform: ${(props) => (props.isOpen ? "translateX(-50px)" : "none")};
    background-color: ${(props) => (props.isOpen ? "transparent" : "white")};
    transition: 0.1s ease-in-out;
  }

  .line3 {
    transform: ${(props) =>
      props.isOpen ? "rotate(-45deg) translateY(-11px)" : "none"};
    transition: 0.2s ease-in-out;
  }
`;

const Burger = ({ show, ...props }) => {
  return (
    <BurgerDiv show={show} {...props}>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </BurgerDiv>
  );
};
export default Burger;
