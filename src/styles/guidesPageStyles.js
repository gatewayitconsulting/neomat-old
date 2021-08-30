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
        backgroundImage: "linear-gradient(to right bottom, #f67a54, #dd4f5f, #b62c6a, #831970, #42186e)",
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
        backgroundColor: "#000 !important",
        borderRadius: "5px !important",
        marginTop: "1em !important",
        marginBottom: "1em !important",
        marginLeft: "1em !important",
        "&:hover": {
            backgroundColor: "#222 !important"
        }
    },
    buttonLink: {
        color: "white !important",
        textDecoration: "none !important"
    }
};

export default guidesPageStyles;
