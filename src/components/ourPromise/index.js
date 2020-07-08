import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Container from '../Container';
import { OffWhite, NormalBlack, LightBlack } from '../../data/colors'
import SubHeading from '../SubHeading';
import HeadingH2 from '../HeadingH2';
import { promise } from '../../data/promise'

const useStyles = makeStyles({
    desktopRoot: {
        backgroundColor: OffWhite,
        padding: "93px 0 93px 0"
    },
    mobileRoot: {
        backgroundColor: OffWhite,
        padding: "34px 0 34px 0"
    },
    h2: {
        margin: "33px 0 68px 0"
    },
    h2Mobile: {
        margin: "25px 0 25px 0"
    },
    contentHeading: {
        color: NormalBlack,
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '19px',
        lineHeight: '26px',
        margin: "0 0 20px 0"
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
        marginBottom: 20
    }
});

const OurPromise = () => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={desktop ? classes.desktopRoot : classes.mobileRoot}>
            <Container>
                <SubHeading darkBack={false}>Our promise to you</SubHeading>
                <div className={smUp ? classes.h2 : classes.h2Mobile}>
                    <HeadingH2 darkBack={false}>Sed perspiciatis omnis iste natus</HeadingH2>
                </div>
                <Grid container spacing={3}>
                    {
                        promise.map((p, i) => (
                            <Grid key={i} item sm={12} md={4}>
                                <Grid container wrap={smUp ? "nowrap" : "wrap"} spacing={3}>
                                    <Grid item>
                                        {p.svg}
                                    </Grid>
                                    <Grid item sm>
                                        <h2 className={classes.contentHeading}>{p.heading}</h2>
                                        <p className={desktop ? classes.contentText : `${classes.contentText} ${classes.contentTextMobile}`}>{p.text}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default OurPromise