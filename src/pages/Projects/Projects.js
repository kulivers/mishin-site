import styled from "styled-components";
import Card from "./Card";

const Container = styled.section`
  min-height: calc(100vh - 80px);
  background-color: #5b5b87;
  display: grid;
  grid-template-columns: repeat(5, 19.9vw);
  grid-template-rows: repeat(2, 45vh);
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Projects;
