import styled from "styled-components";
import "./StickyPos.css";

const Header = styled.header`
  height: 50px;
  background: #aaa;
  border-color: red;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border: solid 10px green;
  padding: 10px;
  min-height: 2000px;
  margin-top: 40px;
`;

const MainContent = styled.div`
  background-color: #ffa63d;
  position: relative;
  height: 100px;
  width: 100px;
  * {
    padding: 10px;
    background: #aaa;
    border: dashed 5px #000;
  }
  * + * {
    margin-top: 20px;
  }
`;

const Footer = styled.footer``;

const StickyP = () => {
  return (
    <Container>
      <Header>Header</Header>
      <MainContent>MAIN CONTENT</MainContent>
      <Footer>FOOTER</Footer>
    </Container>
  );
};

const StickyComponentWithCss = () => {
  return (
    <div>
      <main className="main-container">
        <header className="main-header">HEADER</header>
        <div className="main-content">MAIN CONTENT</div>
        <footer className="main-footer">FOOTER</footer>
      </main>
      <div
        style={{ backgroundColor: "aqua", height: "1500px", width: "100%" }}
      />
    </div>
  );
};
export default StickyComponentWithCss;
