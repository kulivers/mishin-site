import React, { useState } from "react";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { ChevronLeft, Mail, Menu } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const myStyles = makeStyles((theme) => ({
  drawer: { width: drawerWidth, flexShrink: 0 },
  root: { display: "flex" },
}));

const MaterialUIDrawer = (props) => {
  const [open, setOpen] = useState(true);
  const classes = myStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <AppBar position={"fixed"} className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </AppBar>
      <Drawer defaultChecked={true} open={open} className={classes.drawer}>
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ChevronLeft />
        </IconButton>
        <Divider />
        <List>
          <ListItem button key={"text"}>
            <ListItemText>Mail</ListItemText>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MaterialUIDrawer;
