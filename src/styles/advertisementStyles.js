import {
    main,
    container,
    containerFluid
} from "./neomat/core.js";

const homePageStyles = {
    main,
    container,
    containerFluid,
    buttonPrimary: {
        borderWidth: "1px",
        padding: "11px 23px !important",
        backgroundColor: "#000 !important",
        borderRadius: "50px !important",
        margin: "1em",
        "&:hover": {
            backgroundColor: "#222 !important"
        }
    },
    buttonLink: {
        color: "white !important",
        textDecoration: "none !important"
    }
};

export default homePageStyles;
