import styled from "styled-components";
import Video from "./MVI_0746.mov";

const HomeContainer = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  background: #0c0c0c;
  justify-content: center;
  align-items: center;
  //padding: 0 30px;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: red;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgb(47, 43, 43) 0%,
        rgba(248, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(128, 117, 44, 0.2) 0%, transparent 100%);
  }
`;

const HomeBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="MVI_0746.mov/" />
      </HomeBg>
      <HomeContent>
        <h1 style={{ color: "wheat" }}>шото написано</h1>
      </HomeContent>
    </HomeContainer>
  );
};
export default Home;
