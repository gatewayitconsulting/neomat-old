import {
    main,
    container,
    containerFluid
} from "./neomat/core.js";

const guidesPageStyles = {
    main,
    container,
    containerFluid,
    guideHeader: {
        backgroundImage: "linear-gradient(to right bottom, #ffffff, #f8f8f8, #f1f1f1, #ebebeb, #e4e4e4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    accordionPrimaryHeader: {
        fontSize: "1rem",
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    accordionDetailsHeader: {
        marginTop: "0"
    },
    accordionList: {
        marginLeft: "0",
        paddingLeft: "0",
        textAlign: "left",
        listStyle: "none"
    },
    media: {
        height: 400,
    },
    buttonPrimary: {
        borderWidth: "1px",
        padding: "11px 23px !important",
        backgroundColor: "#222 !important",
        borderRadius: "5px !important",
        marginTop: "1em !important",
        marginBottom: "1em !important",
        marginLeft: "1em !important",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px !important",
        "&:hover": {
            backgroundColor: "#222 !important",
            opacity: ".8 !important"
        }
    },
    buttonLink: {
        color: "white !important",
        textDecoration: "none !important"
    }
};

export default guidesPageStyles;
