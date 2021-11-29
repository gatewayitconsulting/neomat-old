import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProjectsPage from "./pages/projects";
import MontanyeWeddingProject from "./pages/mockProjects/montanyeWeddingProject";
import GuidesPage from "./pages/guidesPage";
import BecomeDeveloperGuide from "./pages/mockGuides/becomeDeveloperGuide";
import ResumePage from "./pages/resumePage";

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
    backgroundColor: "#222 !important",
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
    },
    backgroundColor: "#222"
  },
  justifyContentBetween: {
    justifyContent: 'space-between'
  },
  drawerBrand: {
    textAlign: "center"
  },
  neoOpenMenu: {
    borderRadius: "50px",
    background: "linear-gradient(225deg, #1f1f1f, #242424)",
    boxShadow: "-7px 7px 13px #1d1d1d, 7px -7px 13px #272727"
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
  const [open, setOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const followLink = () => {
    setOpen(false);
    scrollToTop();
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
        {["Home", "Projects", "Resume", "Guides"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={"/" + text.toLocaleLowerCase()}
            className={classes.neoNavLink}
            onClick={followLink}
            aria-label={"Navigate to the " + text.toLocaleLowerCase() + " page"}
          >
            <ListItemIcon>
              {index === 0 ? <HomeIcon /> : <span></span>}
              {index === 1 ? <DesktopMacIcon /> : <span></span>}
              {index === 2 ? <AssignmentIndIcon /> : <span></span>}
              {index === 3 ? <LibraryBooks /> : <span></span>}
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
          <a
            href="/Home"
            style={{ textDecoration: "none", color: "#FFF", fontSize: "1.25rem", lineHeight: "1.6" }}
          >
            <Typography variant="h6" noWrap className={classes.typography} aria-label="Navigate to home page">
              JMDesigns
            </Typography>
          </a>
          <IconButton
            color="inherit"
            aria-label="Open menu"
            edge="end"
            onClick={handleDrawerOpen}
            className={[clsx(open && classes.hide), classes.neoOpenMenu]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="Navigation menu">
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
              <IconButton onClick={handleDrawerClose} className={classes.neoCloseMenu} aria-label="Close menu">
                <ChevronRightIcon />
              </IconButton>
            </div>
            {drawer}
          </Drawer>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/projects/montanye-wedding" component={MontanyeWeddingProject} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/guides/become-a-developer" component={BecomeDeveloperGuide} />
            <Route path="/guides" component={GuidesPage} />
            <Route path="/resume" component={ResumePage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
