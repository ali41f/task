import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Container from '../Container';
import { OffWhite, NormalBlack, LightBlack, White } from '../../data/colors'
import SubHeading from '../SubHeading';
import HeadingH2 from '../HeadingH2';
import { services } from '../../data/services'
import ArrowButton from '../ArrowButton';

const useStyles = makeStyles({
    desktopRoot: {
        backgroundColor: OffWhite,
        padding: "108px 0 124px 0",
        backgroundImage: "url(./images/Gears1.png), url(./images/Gears2.png)",
        backgroundPosition: "left top, right bottom",
        backgroundRepeat: "no-repeat"
    },
    mobileRoot: {
        backgroundColor: OffWhite,
        padding: "50px 0 50px 0",
        backgroundImage: "url(./images/Gearsmobile.png), url(./images/Gears1.png)",
        backgroundSize: '100%, auto',
        backgroundPosition: "0px 10px, -54px 95px",
        backgroundRepeat: "no-repeat",
    },
    h2: {
        margin: "33px 0 78px 0"
    },
    h2Mobile: {
        margin: "35px 0 47px 0"
    },
    serviceContainer: {
        textAlign: "center",
        margin: 12,
        padding: "50px 46px 49px 43px",
        backgroundColor: White,
        cursor: "pointer",
        transition: ".5s",
        "&:hover": {
            boxShadow: "0px 10px 18px 0px rgba(153,153,153,1)",
        }
    },
    serviceContainerMobile: {
        textAlign: "left",
        paddingBottom: "24px",
        cursor: "pointer",
        padding: 12,
        transition: ".5s",
        "&:hover": {
            boxShadow: "0px 10px 18px 0px rgba(153,153,153,1)",
        }
    },
    contentHeading: {
        color: NormalBlack,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '19px',
        lineHeight: '26px',
        margin: "33px 0 20px 0"
    },
    contentText: {
        color: LightBlack,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        margin: "0",
        letterSpacing: "0.15px"
    },
    contentTextMobile: {
        //marginBottom: 12
    },
    learnMore: {
        textAlign: "center",
        marginTop: "66px"
    },
    learnMoreMobile: {
        textAlign: "center",
        marginTop: "34px"
    },
});

const Services = () => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={desktop ? classes.desktopRoot : classes.mobileRoot}>
            <Container>
                <SubHeading darkBack={false}>Our Services</SubHeading>
                <div className={smUp ? classes.h2 : classes.h2Mobile}>
                    <HeadingH2 darkBack={false}>Sed perspiciatis omnis iste natus</HeadingH2>
                </div>
                <Grid container spacing={3}>
                    {
                        services.map((s, i) => (
                            <Grid key={i} item sm={12} md={4}>
                                <Grid container wrap={smUp ? "nowrap" : "wrap"} spacing={3}>
                                    <div className={desktop ? classes.serviceContainer : classes.serviceContainerMobile}>
                                        <div>{s.svg}</div>
                                        <h2 className={classes.contentHeading}>{s.heading}</h2>
                                        <p className={desktop ? classes.contentText : `${classes.contentText} ${classes.contentTextMobile}`}>{s.text}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
                <div className={desktop ? classes.learnMore : classes.learnMoreMobile}>
                    <ArrowButton keepBig={true}>Learn More</ArrowButton>
                </div>
            </Container>
        </div>
    )
}

export default Services