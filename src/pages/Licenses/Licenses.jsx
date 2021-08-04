import styled from "styled-components";
import ProgressBarWithViewport from "./ProgressBarWithViewport";

const Container = styled.section`
  font-family: "Poppins", sans-serif;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(17, 19, 42);
  padding: 9rem 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 100%;
  min-height: 100%;
  padding-top: 10px;
  //background-color: rgba(255, 0, 0, 0.29);
  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const LoadingBlock = styled.div`
  //background-color: rgba(99, 255, 0, 0.29);
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

const CardsContainer = styled.div`
  bottom: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  width: 100%;
  padding: 20px 10px 20px 10px;
  border: rgb(17, 19, 42) 1px solid;
  border-radius: 20px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.2);
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: ${(p) => p.color};
  width: 90%;
  height: 80%;
  padding: 5px;
  color: white;
  text-align: center;
  overflow: hidden;
  margin: 5px;
  border: rgb(17, 19, 42) 1px solid;
  border-radius: 5px;
  box-shadow: inset 0 0 60px 155px ${(p) => p.color};
`;
const InfoBlock = styled.div`
  background-color: #3cf0c5;
  height: 100%;
  border-radius: 20px;
  padding: 15px;
`;

const BarContainer = styled.div`
  width: 100%;
`;

const SkillsText = styled.span`
  font-family: "Padauk";
`;

const P = styled.p`
  color: white;
  padding: 0 0 0 15px;
`;

const H1 = styled.h1`
  color: whitesmoke;
`;

const Licenses = () => {
  return (
    <Container id="licenses">
      Licenses
    </Container>
  );
};

export default Licenses;
