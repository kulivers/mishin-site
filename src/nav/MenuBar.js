import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./elements/Logo";
import GradButtonWithScrollLink from "./elements/GradButtonWithScrollLink";
import BurgerB from "./elements/Burger";
import useScrollPosition from "use-scroll-position";
import { EnterForButton } from "./elements/GrandientButton";

const Links = ({ isOpen, toggleOpen, ...props }) => {
  return (
    <React.Fragment>
      <NavLinks isOpen={isOpen}>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="services"
        >
          Услуги
        </GradButtonWithScrollLink>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="about"
        >
          о компании
        </GradButtonWithScrollLink>{" "}
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="licenses"
        >
          Лицензии
        </GradButtonWithScrollLink>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="contacts"
        >
          контакты
        </GradButtonWithScrollLink>
        {/*<GradButtonWithScrollLink*/}
        {/*  onClick={() => {*/}
        {/*    toggleOpen();*/}
        {/*  }}*/}
        {/*  to="contacts"*/}
        {/*  style={{*/}
        {/*    border: "1px white solid",*/}
        {/*    flexGrow: 1,*/}
        {/*    alignSelf: "flexEnd",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Записаться*/}
        {/*</GradButtonWithScrollLink>*/}
      </NavLinks>
    </React.Fragment>
  );
};

export const MenuBar = ({ homeHeight }) => {
  const [isOpen, toggleOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [isTransparent, setTransparent] = useState(true);
  useEffect(() => {
    if (scrollPosition < homeHeight - 80) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }, [scrollPosition, homeHeight]);

  return (
    <Container isOpen={isOpen} isTransparent={isTransparent} id="navbar">
      <Logo>ГазУкрали</Logo>
      <Links isOpen={isOpen} toggleOpen={toggleOpen} />
      <BurgerWrapper>
        <BurgerB
          onClick={() => {
            toggleOpen(!isOpen);
          }}
          isOpen={isOpen}
        />
      </BurgerWrapper>
    </Container>
  );
};
export default MenuBar;

const Container = styled.nav`
  background: ${(props) => (props.isTransparent ? "transparent" : "#1173d9")};
  transition: 0.3s;
  z-index: 9999;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;
  font-family: "Poppins", sans-serif;
  // position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  @media (max-width: 880px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavLinks = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 780px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: #007fff;
    margin-top: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in;
    ${GradButtonWithScrollLink}: {
      color: red;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 16px;
  max-width: 265px;
`;

const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
