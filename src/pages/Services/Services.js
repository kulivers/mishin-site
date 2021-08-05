import {
  Grid,
  Container,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { MediaCard } from "./Card";
import { services } from "./servicesInfo";
import backgroundImg from "./7717816.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBlock: theme.spacing(5),
    background:
      `linear-gradient(rgba(0,12,103,0.5),rgba(0, 0, 0, 0.5))` +
      `,` +
      `url(${backgroundImg})`,
    // backgroundColor: theme.palette.info.main,
  },
  headerContainer: {
    marginBottom: theme.spacing(4),
  },
  textContainer: {
    paddingBlock: theme.spacing(1),
  },

  headerText: {
    color: theme.palette.info.contrastText,

    "&:after": {
      position: "absolute",
      content: '""',
      bottom: -3,
      left: 0,
      right: 0,
      width: "100%",
      height: 2,
      background: theme.palette.info.contrastText,
    },
  },
  grid: {
    marginTop: 0,
    marginBottom: 0,
  },
  gridItem: { margin: "auto" },
}));

const OurServicesText = () => {
  const styles = useStyles();

  return (
    <Box
      container
      display={"flex"}
      justifyContent={"center"}
      className={styles.headerContainer}
    >
      <Box px={2} className={styles.textContainer}>
        {/*<Box bgcolor={"white"} p={1} />*/}
        <Typography className={styles.headerText} variant={"h3"}>
          {" "}
          Наши услуги
        </Typography>
        {/*<Box bgcolor={"white"} p={1} />*/}
      </Box>
    </Box>
  );
};

const Services = () => {
  const styles = useStyles();
  return (
    <Container
      id="services"
      maxWidth={"xl"}
      component={"section"}
      className={styles.root}
    >
      <OurServicesText />
      <Grid spacing={3} className={styles.grid} container>
        {services.map(({ header, image, title, subText }) => (
          <Grid item key={header} className={styles.gridItem}>
            <MediaCard
              header={header}
              image={image}
              title={title}
              subText={subText}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
