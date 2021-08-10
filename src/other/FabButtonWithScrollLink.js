import { KeyboardArrowUpRounded } from "@material-ui/icons";
import { Fab, makeStyles } from "@material-ui/core";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import useScrollPosition from "use-scroll-position";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
}));

export const FabButtonWithScrollLink = ({
  to = "home",
  heightApperance = 190,
  ...props
}) => {
  const scrollPos = useScrollPosition();
  console.log(scrollPos);
  const classes = useStyles();
  return (
    <ScrollLink
      to={to}
      smooth
      duration={500}
      spy={true}
      offset={-79}
      exact="true"
    >
      <Fab
        size="large"
        color="secondary"
        aria-label="up"
        className={classes.fab}
        {...props}
      >
        <KeyboardArrowUpRounded fontSize={"large"} />
      </Fab>
    </ScrollLink>
  );
};
