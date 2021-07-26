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
    }
};

export default guidesPageStyles;
