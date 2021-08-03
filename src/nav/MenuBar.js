import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./elements/Logo";
import GradButtonWithScrollLink from "./elements/GradButtonWithScrollLink";
import BurgerB from "./elements/Burger";
import useScrollPosition from "use-scroll-position";

const Links = ({ isOpen, toggleOpen, ...props }) => {
  return (
    <React.Fragment>
      <NavLinks isOpen={isOpen}>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="projects"
        >
          о компании
        </GradButtonWithScrollLink>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="skills"
        >
          услуги
        </GradButtonWithScrollLink>

        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="about"
        >
          лицензии
        </GradButtonWithScrollLink>

        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="contacts"
        >
          контакты
        </GradButtonWithScrollLink>
      </NavLinks>
    </React.Fragment>
  );
};

export const MenuBar = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [isTransparent, setTransparent] = useState(true);
  const [homeHeight, setHomeHeight] = useState(0);

  useEffect(() => {
    const height = document.getElementById("home").clientHeight;
    setHomeHeight(height);
    if (scrollPosition < homeHeight - 80) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }, [homeHeight, scrollPosition]);

  return (
    <Container isOpen={isOpen} isTransparent={isTransparent} id="navbar">
      <LogoWrapper>
        <Logo>ГазИзЖопы</Logo>
      </LogoWrapper>
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
  min-height: 8vh;
  font-family: "Poppins", sans-serif;
  // position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  @media (max-width: 880px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavLinks = styled.ul`
  width: 50%;
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
