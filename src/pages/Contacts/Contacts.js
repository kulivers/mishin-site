import {
  Container,
  Box,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import pic from "./img.png";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(13, 20, 65)",
    color: "white",
    paddingBlock: theme.spacing(5),
  },
  title: {},
  textContainer: {
    border: "1px solid green",
    maxWidth: 1280,
    margin: "auto",
  },
  letsTalkContainer: {
    border: "1px solid rgba(255,255,255,0.3)",
    padding: theme.spacing(4),
  },
  contactsContainer: { border: "1px solid blue", padding: theme.spacing(4) },
  contacts: { border: "1px solid rgba(255,255,255,0.3)" },
  mapContainer: {
    border: "1px solid red",
    padding: theme.spacing(2),
    height: "400px",
  },
}));

const Contacts = (props) => {
  const classes = useStyles();
  return (
    <YMaps>
      <Container className={classes.root} maxWidth={"xl"}>
        <Typography component={"header"} variant="h4" align={"center"}>
          Контакты
        </Typography>
        <Grid container id="contacts" className={classes.textContainer}>
          <Grid item className={classes.letsTalkContainer} lg={5}>
            <Typography variant="h5">Свяжитесь с нами</Typography>
            <Typography variant="h7">
              Свяжись с нами ежжи мы можем много чего тебе продаааать, купи что
              нибудь, котел там, в аду например, если денег не дашь Можем
              сотрудничать, будем твоим тело хранителям 100000р в месяц не
              пожалеешь будем суету наводить ежжи! мать береги, вертуху крути,
              врагов хорони, мухамед али!
            </Typography>
          </Grid>
          <Grid item className={classes.contactsContainer} lg={7}>
            <Box className={classes.contacts}>
              <Typography variant="h5">Контактная информация</Typography>
              <Typography variant="h7">
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  АДРЕС ОФИСА:
                </span>{" "}
                Балашиха, Московская обл., ул. Белякова, д.2, 2 этаж, 9 кабинет,
                143903
                <br />
                Время работы: Monday – Sunday 9:00AM – 5:00PM <br />
                Телефоны: 8(777)777-77-77 - Барсуков Михаил Михайлович <br />
                8(777)777-77-72 - Барсуков2.0 Михаил Михайлович <br />
                Почта: kulivers@mail.ru
              </Typography>
            </Box>{" "}
          </Grid>
        </Grid>
        <Container className={classes.mapContainer} maxWidth={"lg"}>
          <Typography variant={"h4"} align={"center"}>
            Как нас найти?
          </Typography>
          <Map
            defaultState={{
              center: [55.801501, 37.974006],
              zoom: 14,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={"100%"}
            height={"100%"}
          >
            <Placemark defaultGeometry={[55.801501, 37.974006]} />
          </Map>
        </Container>
      </Container>
    </YMaps>
  );
};
export default Contacts;
