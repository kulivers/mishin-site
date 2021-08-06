import styled from "styled-components";
import handleViewport from "react-in-viewport";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import picture1 from "./Option_0000_1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightcoral",
  },
  contentContainer: {
    display: "flex",
  },
  img: { width: "100%" },
  imgWrapper: { padding: 20, backgroundColor: "yellow" },
  title: { backgroundColor: "red" },
  contentTextWrapper: { backgroundColor: "lightblue" },
  contentText: {},
}));

const About = ({ inViewport, forwardedRef, enterCount }) => {
  const isFirstTimeInViewPort = () => {
    return inViewport && enterCount === 1;
  };
  const styles = useStyles();
  return (
    <Container id={"about"} className={styles.root}>
      <Typography className={styles.title}>О компании</Typography>
      <Container className={styles.contentContainer}>
        <Container
          maxWidth={"md"}
          disableGutters
          m={0}
          className={styles.imgWrapper}
        >
          <img
            src={picture1}
            alt={"ООО СК ИЛГаз-Сервис"}
            className={styles.img}
          />
        </Container>
        <Box className={styles.contentTextWrapper}>
          <BluringText
            ref={forwardedRef}
            inViewport={inViewport}
            isFirstTimeInViewPort={isFirstTimeInViewPort()}
            className={styles.contentText}
          >
            I'm Riccardo Zanutta, a 22-year-old Italian Freelance Front-end
            developer. I'm a weird guy who likes making weird things with web
            technologies. I like to resolve design problems, create smart user
            interface and imagine useful interaction, developing rich web
            experiences & web applications. When not working or futzing around
            with code, I study how to escape from University. Actually for hire.
          </BluringText>
        </Box>
      </Container>
    </Container>
  );
};

const AboutWithHandleViewPort = handleViewport(About, {
  rootMargin: "-80px 0px 0px 0px",
});
const BluringText = styled(Typography)`
  text-align: center;
  opacity: ${({ inViewport }) => (inViewport ? 1 : 0)};
  transition: ${({ isFirstTimeInViewPort }) =>
    isFirstTimeInViewPort ? "opacity 1s ease-in-out" : "none"};
`;

export default AboutWithHandleViewPort;
