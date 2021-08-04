import {
  Grid,
  Container,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { MediaCard } from "./Card";
import { services } from "./servicesInfo";

const useStyles = makeStyles((theme) => ({
  headerContainer: { backgroundColor: "lightcoral" },
  header: { color: "red" },
  grid: {
    backgroundColor: "rgba(132, 123, 121,0.50)",
    marginTop: 0,
    marginBottom: 0,
  },
  gridItem: { margin: "auto" },
  gridContainer: {},
}));

const Services = () => {
  const styles = useStyles();
  return (
    <Container
      id="services"
      style={{ backgroundColor: "khaki" }}
      maxWidth={"xl"}
    >
      <Box className={styles.headerContainer}>
        <Typography className={styles.header}> Услуги</Typography>
      </Box>
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
