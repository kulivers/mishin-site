import styled from "styled-components";
import Video from "./1063233085-preview.mp4";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

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
        rgba(255, 255, 255, 0.17) 0%,
        rgba(17, 115, 217, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(128, 117, 44, 0.2) 0%, transparent 100%);
  }
`;
//rgba(0, 248, 227, 0.2) 100%
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
  filter: blur(8px);
  object-fit: cover;
  background: #232a34;
`;
//a
//https://material-ui.com/ru/customization/theming/#responsivefontsizes-theme-options-theme
//https://material-ui.com/ru/customization/typography/
//https://codesandbox.io/s/op1vo?file=/demo.js
//https://material-ui.com/ru/customization/theming/#createtheme-options-args-theme
// https://codesandbox.io/s/elastic-gareth-7ro57?file=/src/theme.js:249-255
// https://material-ui.com/customization/color/#official-color-tool
//https://material-ui.com/ru/customization/breakpoints/#theme-breakpoints-down-key-media-query
//
// const breakpointValues = {
//   xs: 0,
//   sm: 200,
//   md: 700,
//   lg: 992,
//   xl: 1200,
// };

// const customTheme = createMuiTheme({
//   breakpoints: { values: breakpointValues },
//   typography: { fontFamily: "fantasy" },
// });

const useStyles = makeStyles((theme) => {
  return {
    textContainer: { color: "white", fontSize: theme },
    header: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    subText: {
      marginTop: "5%",
      [theme.breakpoints.only("xs")]: {
        fontSize: "1rem",
      },
    },
  };
});

const Home = () => {
  const styles = useStyles();

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg
          preload="auto"
          autoPlay
          loop
          muted
          volume="0"
          src={Video}
          type="MVI_0746.mov/"
        />
      </HomeBg>
      <Container maxWidth={"md"} className={styles.textContainer}>
        <Typography className={styles.header} variant={"h2"}>
          Мособлгаз — крупнейшее газораспреде­лительное предприятие России
        </Typography>
        <Box>
          <Typography className={styles.subText} variant={"h6"}>
            Подключаем газ жителям Московской области, ремонтируем и
            устанавливаем оборудование, строим котельные, обслуживаем крупные
            производства, вообще мы молодцы красавцы, тут еще подпишем нормально
            так и по кайфу будет, смотря сколько текста, шрифты и размещение
            смотря как будет текста
          </Typography>
        </Box>
      </Container>
    </HomeContainer>
  );
};
export default Home;
