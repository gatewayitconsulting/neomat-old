import {
  customTitle
} from "../styles/neomat/core.js";
  
const bannerStyles = {
  customTitle,
  bannerStyle: {
    transform: "translate3d(0px, 0px, 0px)",
    backgroundSize: 'cover',
    backgroundPosition: "50%",
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px",
    alignItems: "center"
  },
  bannerCopyContainer: {
    width: "100%",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "15rem",
    paddingLeft: "15px",
    paddingRight: "15px",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  bannerCopyInnerContainer: {
    marginLeft: "-15px",
    marginRight: "-15px",
    justifyContent: "center",
    width: "auto",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box"
  },
  bannerCopyInnerContainerWrapper: {
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px"
  }
};

export default bannerStyles;
  