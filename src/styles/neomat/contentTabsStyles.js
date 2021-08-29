import {
    primaryColor,
    infoColor,
    successColor,
    blackColor,
    whiteColor,
    hexToRgb
  } from "./core.js";
  
  const contentTabsStyles = theme => ({
    root: {
      marginTop: "20px !important",
      paddingLeft: "0 !important",
      marginBottom: "0 !important",
      overflow: "visible !important"
    },
    flexContainer: {
      [theme.breakpoints.down("xs")]: {
        display: "flex !important",
        flexWrap: "wrap !important"
      }
    },
    displayNone: {
      display: "none !important"
    },
    fixed: {
      overflow: "visible !important"
    },
    horizontalDisplay: {
      display: "block !important"
    },
    tabs: {
      float: "left !important",
      position: "relative !important",
      display: "block !important",
      borderRadius: "30px !important",
      minWidth: "100px !important",
      textAlign: "center !important",
      transition: "all .3s !important",
      padding: "10px 15px !important",
      color: "#222 !important",
      height: "auto !important",
      opacity: "1 !important",
      maxWidth: "100% !important",
      margin: "0 5px !important",
      minHeight: "unset !important",
      lineHeight: "24px !important",
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontWeight: "500 !important"
    },
    tabIcon: {
      width: "30px !important",
      height: "30px !important",
      display: "block !important",
      margin: "15px 0 !important"
    },
    horizontalPills: {
      width: "100% !important",
      float: "none !important",
      "& + button": {
        margin: "10px 0 !important"
      }
    },
    contentWrapper: {
      marginTop: "20px !important",
      "& .react-swipeable-view-container > div > div": {
        paddingLeft: "15px !important",
        paddingRight: "15px !important"
      }
    },
    primary: {
      "&,&:hover": {
        color: whiteColor + " !important",
        backgroundColor: primaryColor[0] + " !important",
        boxShadow:
          "0 4px 20px 0px rgba(" +
          hexToRgb(blackColor) +
          ", 0.14), 0 7px 10px -5px rgba(" +
          hexToRgb(primaryColor[0]) +
          ", 0.4) !important"
      }
    },
    info: {
      "&,&:hover": {
        color: whiteColor + " !important",
        backgroundColor: infoColor[0] + " !important",
        boxShadow:
          "0 4px 20px 0px rgba(" +
          hexToRgb(blackColor) +
          ", 0.14), 0 7px 10px -5px rgba(" +
          hexToRgb(successColor[0]) +
          ", 0.4) !important"
      }
    },
    dark: {
      color: whiteColor + " !important",
      backgroundColor: blackColor + " !important",
      background:
        "radial-gradient(ellipse at center," +
        blackColor +
        " 0," +
        blackColor +
        " 100%) !important"
    },
    alignCenter: {
      alignItems: "center !important",
      justifyContent: "center !important"
    },
    tabLabelContainer: {
      padding: "unset !important"
    }
  });
  
  export default contentTabsStyles;
  