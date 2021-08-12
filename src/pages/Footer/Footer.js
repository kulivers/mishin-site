import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(13, 20, 65)",
    height: "20vh",
    overflowY: "hidden",
    "&>:first-child": {
      background: "rgb(13, 20, 65)",
      height: "50%",
    },
    "&>:nth-child(2)": {
      background: "#273c52",
      color: "white",
      height: "100%",
      borderRadius: "90%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",

      "& span": {
        fontSize: "0.7rem",
        fontFamily: "cursive",
        alignSelf: "center",
        marginBottom: "25px",
      },
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
      <div>
        <span>
          {" "}
          made by{" "}
          <a href={"https://github.com/kulivers"} style={{ color: "#1173d9" }}>
            kulivers
          </a>
        </span>
      </div>
      {/*<div className={classes.circle}></div>*/}
      {/*<div className={classes.circle}></div>*/}
    </div>
  );
};
export default Footer;
