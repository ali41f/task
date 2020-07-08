

import { Blue, LightWhite, Red, LightBlack, DarkestWhite } from '../../data/colors'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    desktopRoot: {
        backgroundColor: LightWhite,
        padding: "173px 0 56px 0",
    },
    mobileRoot: {
        backgroundColor: LightWhite,
        padding: "35px 0 35px 0",
    },
    aboutText: {
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "0.15px",
        margin: "20px 0 22px 0",
        color: LightBlack
    },
    secondColumn: {

    },
    linksContainer: {
        display: 'flex',
        marginLeft: 24
    },
    h3: {
        margin: "0 0 22px 0",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "0.15px",
        color: LightBlack,
        display: "block"
    },
    h3center: {
        marginLeft: 24
    },
    linksContainerItem: {
        flex: 1
    },
    linkItem: {
        padding: "6px 0 6px 0",
        cursor: "pointer",
        fontWeight: 'bold',
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "0.15px",
        color: LightBlack,
        transition: ".3s",
        "&:hover": {
            color: Red
        }
    },
    contactItem: {
        display: 'flex',
        paddingTop: 6,
        paddingBottom: 10
    },
    contactSVG: {
        marginRight: 15,
        marginTop: 3
    },
    contactText: {
        fontWeight: 'normal',
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.15px",
        color: LightBlack,
    },
    absoluteFooter: {
        backgroundColor: Blue,
    },
    absoluteFooterText: {
        padding: "22px 0",
        color: DarkestWhite,
        margin: 0
    },
    absoluteFooterTextMobile: {
        padding: "15px 0",
        color: DarkestWhite,
        margin: 0
    },
});