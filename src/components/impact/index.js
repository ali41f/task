import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Container from '../Container';
import { Blue, LightWhite, Red } from '../../data/colors'
import SubHeading from '../SubHeading';
import HeadingH2 from '../HeadingH2';
import { impact } from '../../data/impact'

const useStyles = makeStyles({
    desktopRoot: {
        backgroundColor: Blue,
        padding: "111px 0 200px 0",
        backgroundImage: "url(./images/impactgear.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    mobileRoot: {
        backgroundColor: Blue,
        padding: "55px 0 24px 0",
        backgroundImage: "url(./images/impactgear.png)",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
    },
    h2: {
        margin: "33px 0 75px 0",
        maxWidth: 450
    },
    h2Mobile: {
        margin: "32px 0 46px 0"
    },
    contentHeading: {
        color: Red,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '36px',
        lineHeight: '42px',
        margin: "0 0 3px 0"
    },
    contentText: {
        color: LightWhite,
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
    smallGrid: {
        paddingLeft: 40,
        paddingRight: 35,
        marginBottom: 16
    }
});

const Impact = () => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={desktop ? classes.desktopRoot : classes.mobileRoot}>
            <Container>
                <SubHeading darkBack={true}>Our Impact</SubHeading>
                <div className={smUp ? classes.h2 : classes.h2Mobile}>
                    <HeadingH2 darkBack={true}>Nemo enim ipsam voluptatem quia voluptas</HeadingH2>
                </div>
                <Grid container spacing={3}>
                    {impact.map((p, i) => (
                        <Grid key={i} item sm={12} md={6} lg={3}>
                            <Grid container className={!smUp ? classes.smallGrid : ""} wrap="nowrap" spacing={3}>
                                <Grid item>
                                    {p.svg}
                                </Grid>
                                <Grid item sm>
                                    <h2 className={classes.contentHeading}>{p.heading}</h2>
                                    <p className={desktop ? classes.contentText : `${classes.contentText} ${classes.contentTextMobile}`}>{p.text}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Impact