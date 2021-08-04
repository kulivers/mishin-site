import styled from "styled-components";
import handleViewport from "react-in-viewport";

const Container = styled.section`
  position: relative;
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  //background-color: rgba(255, 119, 0, 0.41);
`;

const TextInformatonBlock = styled.div`
  background-color: #3cf0c5;
  width: 50%;
  height: 100%;
`;

const SomeOtherBlock = styled.div`
  width: 30%;
  height: 400px;
  background-color: red;
`;

const P = styled.p`
  text-align: center;
  opacity: ${({ inViewport }) => (inViewport ? 1 : 0)};
  transition: ${({ isFirstTimeInViewPort }) =>
    isFirstTimeInViewPort ? "opacity 1s ease-in-out" : "none"};
`;

const H3 = styled.h3`
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
`;

const About = ({ inViewport, forwardedRef, enterCount }) => {
  const isFirstTimeInViewPort = () => {
    return inViewport && enterCount === 1;
  };

  return (
    <Container id="about" style={{ backgroundColor: "lightblue" }}>
      О компании
      {/*<TextInformatonBlock>*/}
      {/*  <H1>About me</H1>*/}
      {/*  <H3>Interactive Front-end developer.</H3>*/}
      {/*  <P*/}
      {/*    ref={forwardedRef}*/}
      {/*    inViewport={inViewport}*/}
      {/*    isFirstTimeInViewPort={isFirstTimeInViewPort()}*/}
      {/*  >*/}
      {/*    I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end*/}
      {/*    developer. I'm a weird guy who likes making weird things with web*/}
      {/*    technologies. I like to resolve design problems, create smart user*/}
      {/*    interface and imagine useful interaction, developing rich web*/}
      {/*    experiences & web applications. When not working or futzing around*/}
      {/*    with code, I study how to escape from University. Actually for hire.*/}
      {/*  </P>*/}
      {/*</TextInformatonBlock>*/}
      {/*<SomeOtherBlock>some other Block</SomeOtherBlock>*/}
    </Container>
  );
};

const AboutWithHandleViewPort = handleViewport(About, {
  rootMargin: "-80px 0px 0px 0px",
});
export default AboutWithHandleViewPort;
