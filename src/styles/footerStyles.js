import {
    main,
    container,
    containerFluid
} from "./neomat/core.js";

const footerStyles = {
    main,
    container,
    containerFluid,
    footer: {
        backgroundColor: "#222",
        color: "#FFF",
        borderTop: "1px solid #000"
    },
    buttonPrimary: {
        boxShadow: "none",
        "&:hover": {
            backgroundColor: "#222 !important"
        }
    }
};

export default footerStyles;
