// import {
//   customTitle
// } from "../styles/neomat/core.js";
  
const bannerStyles = {
  customTitle: {
    flex: "0 0 100%",
    textAlign: "center"
  },
  bannerStyle: {
    transform: "translate3d(0px, 0px, 0px)",
    backgroundSize: 'cover',
    backgroundPosition: "50%",
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  bannerCopyContainer: {
    width: "100%",
    zIndex: "1",
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
  }
};

export default bannerStyles;
  