import { Advantages } from "./Advantages";
import styled from "styled-components";
import handleViewport from "react-in-viewport";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import picture1 from "./Option_0000_1.jpg";
import backgroundImg from "../../sources/7717816.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    background:
      `linear-gradient(rgba(0, 0, 0, 0.3) , rgba(13,20,65,1) ) ` +
      `,` +
      `url(${backgroundImg})` +
      `0px -78px`,
  },
  contentContainer: {
    marginTop: 0,
    marginBottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: { width: "100%", height: "100%" },
  imgWrapper: {
    padding: 20,
    // backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
  },
  title: { textAlign: "left" },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  contentText: {
    textAlign: "left",
    color: "white",
    fontSize: "1.2rem",
    marginTop: "1rem",
  },
}));

const About = ({ inViewport, forwardedRef, enterCount }) => {
  const isFirstTimeInViewPort = () => {
    return inViewport && enterCount === 1;
  };
  const styles = useStyles();
  return (
    <div>
      <Container id={"about"} className={styles.root} maxWidth={"xl"}>
        <Grid container className={styles.contentContainer} spacing={5}>
          <Grid item md={4} className={styles.imgWrapper}>
            <Box maxWidth={500}>
              <img
                src={picture1}
                alt={"ООО СК ИЛГаз-Сервис"}
                className={styles.img}
              />
            </Box>
          </Grid>
          <Grid item md={5} lg={6} xl={6} className={styles.textWrapper}>
            <Typography
              className={styles.title}
              component={"h2"}
              variant={"h3"}
            >
              О компании
            </Typography>
            <BluringText
              ref={forwardedRef}
              inViewport={inViewport}
              isFirstTimeInViewPort={isFirstTimeInViewPort()}
              className={styles.contentText}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                {" "}
                ГазУкрали{" "}
              </span>
              - Мы любим груши, бананы, киви и даже папайя. Учим фрукты и поем
              про них веселую песню. А какой твой фрукт самый любимый? Мы любим
              есть, есть, есть Груши и бананы.. Мы любим есть, есть, есть Дыни и
              арбузы. Мы любим есть, есть, есть Киви и грейпфруты Мы любим есть,
              есть, есть Манго и папайю Мы любим есть, есть, есть Ананасы и
              кокосы Груши, бананы, киви и даже папайя. Учим фрукты и поем про
              них веселую песню. А какой твой фрукт самый любимый? Мы любим
              есть, есть, есть Груши и бананы.. Мы любим есть, есть, есть Дыни и
              арбузы. Мы любим есть, есть, есть Киви и грейпфруты Мы любим есть,
              есть, есть Манго и папайю Мы любим есть, есть, есть Ананасы и
              кокосы
            </BluringText>
          </Grid>
        </Grid>
      </Container>
      <Advantages />
    </div>
  );
};

const AboutWithHandleViewPort = handleViewport(About, {
  rootMargin: "-80px 0px 0px 0px",
});
const BluringText = styled(Typography)`
  text-align: center;
  opacity: $ {( {
    inViewport
  })= >(inViewport ? 1: 0)};
  transition: $ {( {
    isFirstTimeInViewPort
  })= > isFirstTimeInViewPort ? "opacity 1s ease-in-out": "none"
  };
`;

export default AboutWithHandleViewPort;
