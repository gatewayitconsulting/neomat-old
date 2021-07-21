import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import BannerSection from "./pages/homePageSections/banner";
import MockCopySection from "./pages/homePageSections/mockCopy";
import ProjectsSection from "./pages/homePageSections/projects";
import HomePage from "./pages/homePage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: "#42186d !important",
    minHeight: "70px !important",
    height: "70px !important",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRadius: "3px",
    overflowX: "hidden"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: -drawerWidth
    }
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  },
  drawerBrand: {
    textAlign: "center"
  },
  neoOpenMenu: {
    borderRadius: "50px",
    background: "linear-gradient(225deg, #3b1662, #471a75)",
    boxShadow: "-7px 7px 13px #38145d, 7px -7px 13px #4c1c7d"
  },
  neoCloseMenu: {
    borderRadius: "50px",
    background: "linear-gradient(225deg, #e6e6e6, #ffffff)",
    boxShadow: "-7px 7px 14px #d9d9d9, 7px -7px 14px #ffffff"
  },
  neoNavLink: {
    margin: "0.3em",
    marginBottom: "1em",
    borderRadius: "8px",
    background: "ffffff",
    boxShadow: "-6px 6px 12px #e6e6e6, 6px -6px 12px #ffffff",
    color: "#222"
  }
}));
function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.drawerBrand}>
          JMDesigns
        </Typography>
      </div>
      <Divider />
      <List>
        {["Home", "Projects", "Guides"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text} className={classes.neoNavLink}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.justifyContentBetween}>
          <Typography variant="h6" noWrap className={classes.typography}>
            JMDesigns
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={[clsx(open && classes.hide), classes.neoOpenMenu]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
              container={container}
              variant="persistent"
              anchor="right"
              open={open}
              onClose={handleDrawerClose}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose} className={classes.neoCloseMenu}>
                  <ChevronRightIcon/>
                </IconButton>
              </div>
              {drawer}
            </Drawer>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/projects" component={HomePage} />
            <Route path="/Starred" render={() => <div>Page starred</div>} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default App;
