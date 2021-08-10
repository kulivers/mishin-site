import { KeyboardArrowUpRounded } from "@material-ui/icons";
import { Fab, makeStyles, useTheme, Zoom } from "@material-ui/core";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import useScrollPosition from "use-scroll-position";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
}));

export const FabButtonWithScrollLink = ({
  to = "home",
  heightApperance = 190,
  ...props
}) => {
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const scrollPos = useScrollPosition();
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
      <Zoom
        in={scrollPos > heightApperance}
        timeout={transitionDuration}
        unmountOnExit
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
      </Zoom>
    </ScrollLink>
  );
};
