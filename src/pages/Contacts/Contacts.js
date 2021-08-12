import {
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px white solid",

    background: "rgb(13, 20, 65)",
    color: "white",
    paddingBlock: theme.spacing(5),
  },

  container: {
    // border: "1px black solid",
    maxWidth: 1280,
    margin: "auto",
    height: "70%",
    marginTop: theme.spacing(4),
  },

  contactsContainer: {
    // border: "2px solid blue",
    padding: theme.spacing(2, 2, 2, 3),
    flexGrow: 1,
    margin: "auto 0",
    boxSizing: "border-box",
  },
  mapContainer: {
    // border: "2px solid red",
    boxSizing: "border-box",

    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
  map: {
    width: "100%",
    height: "100%",
  },

  ul: {
    fontSize: "1.5rem",
    // fontFamily: "Roboto Helvetica Arial sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",

    // paddingTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  insideUl: {
    listStyleType: "none",
    "& li": {
      marginTop: 10,
    },
  },
  callLink: {
    marginTop: 10,
    "& div": {
      border: "1px solid #ccc",
      borderRadius: 5,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(0.7, 2),
    },
    "& a": {
      whiteSpace: "nowrap",
      color: "white",
      fontStyle: "normal",
      textDecoration: "underline",
      textDecorationSkipInk: "none",
      marginLeft: 7,
    },
    "& .MuiSvgIcon-root": {
      backgroundColor: "green",
      borderRadius: 3,
    },
  },
}));

const CallLink = ({ label, phone }) => {
  const classes = useStyles();
  return (
    <div className={classes.callLink}>
      <div>
        <SvgIcon>
          <PhoneIcon fontSize={"medium"} />
        </SvgIcon>
        <a href={`tel:${phone}`}>
          <span>{phone}</span>
        </a>
      </div>
      <span> - {label}</span>
    </div>
  );
};

const MapComponent = () => {
  const classes = useStyles();
  return (
    <Map
      defaultState={{
        center: [55.801501, 37.974006],
        zoom: 14,
        controls: ["zoomControl", "fullscreenControl"],
      }}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
      className={classes.map}
    >
      <Placemark defaultGeometry={[55.801501, 37.974006]} />
    </Map>
  );
};
const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Container>
      <ul className={classes.ul}>
        <Typography variant="h7" component={"li"}>
          <span
            style={{
              color: "#6892fd",
              fontWeight: "bold",
            }}
          >
            АДРЕС ОФИСА:{" "}
          </span>
          Балашиха, Московская обл., ул. Белякова, д.2, 2 этаж, 9 кабинет,
          143903
        </Typography>
        <Typography variant="h7" component={"li"}>
          <span
            style={{
              color: "#6892fd",
              fontWeight: "bold",
            }}
          >
            Время работы:{" "}
          </span>
          Monday – Sunday 9:00AM – 5:00PM
        </Typography>
        <Typography variant="h7" component={"li"}>
          <span
            style={{
              color: "#6892fd",
              fontWeight: "bold",
            }}
          >
            Телефоны:{" "}
          </span>
          <ul className={classes.insideUl}>
            <li>
              <CallLink
                label={"Барсуков Михаил Михайлович"}
                phone={"8 (777) 222-22-22"}
              />
            </li>
            <li>
              <CallLink
                label={"Барсуков Михаил Михайлович 2.0"}
                phone={"8 (777) 222-22-22"}
              />
            </li>
          </ul>
        </Typography>
        <Typography variant="h7" component={"li"}>
          <span
            style={{
              color: "#6892fd",
              fontWeight: "bold",
            }}
          >
            Почта:{" "}
          </span>
          <a
            href={"mailto:kulivers@mail.ru"}
            style={{
              whiteSpace: "nowrap",
              color: "white",
              fontStyle: "normal",
              textDecoration: "underline",
              textDecorationSkipInk: "none",
            }}
          >
            kulivers@mail.ru
          </a>
        </Typography>
      </ul>
    </Container>
  );
};
const Contacts = (props) => {
  const classes = useStyles();
  return (
    <YMaps>
      <Container className={classes.root} maxWidth={"xl"} id={"contacts"}>
        <Typography component={"header"} variant="h4" align={"center"}>
          Контакты
        </Typography>
        <Grid container id="contacts" className={classes.container}>
          <Grid item className={classes.mapContainer} sm={6} md={6} lg={6}>
            <MapComponent />
          </Grid>
          <Grid item className={classes.contactsContainer} sm={6} md={6} lg={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </YMaps>
  );
};
export default Contacts;
