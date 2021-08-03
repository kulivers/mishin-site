import styled, { keyframes } from "styled-components";

const Container = styled.div`
  color: whitesmoke;
`;
const Li = styled.li`
  list-style: none;
`;

const Bar = styled.span`
  background-color: transparent;
  display: block;
  height: 6px;
  border: 1px solid
    ${(props) => {
      return props.children.props.color;
    }};
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 5px
    ${(props) => {
      return props.children.props.color;
    }};
`;

const load = (percent) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${percent}%;
  }
`;

const SkillBar = styled.span`
  height: 100%;
  border-radius: 2px;
  float: left;
  background: ${(p) => p.color};
  width: ${({ procents }) => procents}%;
  animation: ${({ percent }) => load(percent)} 1.4s
    cubic-bezier(0.38, 1.27, 1, 0.91);
  animation-fill-mode: both;
  animation-delay: ${(p) => p.delay};
`;

const ProgressBar = ({
  inViewport,
  forwardedRef,
  enterCount,
  percent,
  color,
  trigger,
  delay,
  ...props
}) => {
  return (
    <Container>
      <Li>
        <Bar>
          <SkillBar
            ref={forwardedRef}
            inViewport={inViewport}
            percent={enterCount >= 1 ? percent : 0}
            color={color}
            delay={delay}
            {...props}
          />
        </Bar>
      </Li>
    </Container>
  );
};

export default ProgressBar;
