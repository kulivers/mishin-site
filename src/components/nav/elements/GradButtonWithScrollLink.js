import GradButton from "./GrandientButton";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { useState } from "react";

const StyledLinkS = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const ScrollButton = (props) => {
  const { onClick, to, children, ...rest } = props;
  const [isActive, setActive] = useState(false);
  return (
    <StyledLinkS
      to={to}
      smooth
      duration={500}
      spy={true}
      offset={-80}
      exact="true"
      onSetActive={() => {
        setActive(true);
      }}
      onSetInactive={() => {
        setActive(false);
      }}
    >
      <GradButton
        {...rest}
        underline={isActive}
        onClick={(event) => {
          onClick && onClick(event);
        }}
      >
        {children}
      </GradButton>
    </StyledLinkS>
  );
};

export default ScrollButton;
