import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createTheme();

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDivider-root": {
      background: "rgba(255,255,255,0.63)",
    },
    "& .MuiSvgIcon-root": {
      color: "green", // or black
    },
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    background: "rgb(13,20,65)",
    color: theme.palette.info.contrastText,
  },
  container: {
    // background: "rgba(154,51,51,0.65)"
  },
  headerText: {},
  contentBox: {},
  checkMarksBlock: {},
}));

export const Advantages = (props) => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.root}>
        <Container maxWidth={"md"} className={styles.container}>
          <Typography
            className={styles.headerText}
            component={"header"}
            variant="h4"
            align={"center"}
          >
            Почему ГазУкрали?
          </Typography>
          <Box className={styles.contentBox}>
            <List component="ul" aria-label="mailbox folders">
              <ListItem component={"li"}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Украли незаметно, никто не видел" />
              </ListItem>
              <Divider light />

              <ListItem component={"li"}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Украли много, жить будем долго" />
              </ListItem>
              <Divider light />

              <ListItem component={"li"}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Никого не кокнули,все живы" />
              </ListItem>
              <Divider light />

              <ListItem component={"li"}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Заплатили ментам, они не будут искать" />
              </ListItem>
              <Divider light />

              <ListItem component={"li"}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary="Хозяину просто спасибо пожелать остается" />
              </ListItem>
            </List>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};
