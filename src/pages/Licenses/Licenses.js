import styled from "styled-components";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import ImgViewer from "./ImgViewer";
import { makeStyles, Container, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: "rgb(13, 20, 65)", color: "white", padding: 38 },
  container: {
    fontFamily: "Poppins sans-serif",
    //min-height: calc(100vh - 80px);
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardsContainer: {
    bottom: 0,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50%",
    width: "100%",
    padding: "20px 10px 20px 10px",
    border: "rgb(17, 19, 42) 1px solid",
    borderRadius: 5,
    boxShadow:
      "-1px -1px 2px rgba(255, 255, 255, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const Licenses = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="licenses">
      <Box className={classes.container}>
        <Typography component={"header"} variant="h4" align={"center"}>
          Лицензии
        </Typography>
        <br />
        <Box className={classes.cardsContainer}>
          <ImgViewer picture={pic1} styles={{ marginBlock: "10px" }} />
          <ImgViewer picture={pic2} styles={{ marginBlock: "10px" }} />
        </Box>
      </Box>
    </div>
  );
};

export default Licenses;
