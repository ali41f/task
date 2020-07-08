import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Container from '../Container';
import { White } from '../../data/colors'

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(./images/video-bg.png)`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 500,
    },
    heightMedium: {
        height: 400,
    },
    bannerMobile: {
        backgroundImage: `url(./images/video-bg-mobile.png)`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 240,
    },
    heading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '36px',
        lineHeight: '42px',
        marginBottom: "0px",
        marginTop: '105px',
        color: White,
    },
    mediumHeading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '30px',
        lineHeight: '42px',
        marginBottom: "10px",
        color: White
    },
    smallHeading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '28px',
        lineHeight: '42px',
        color: White,
        marginBottom: 10
    },
    SVG: {
        cursor: 'pointer'
    }
});

const VideoBanner = () => {

    const classes = useStyles()
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    const headingClass = () => {
        if (mdUp) {
            return classes.heading
        } else if (smUp && !mdUp) {
            return classes.mediumHeading
        } else {
            return classes.smallHeading
        }
    }

    return (
        <div className={
            smUp ?
                mdUp ? classes.banner : `${classes.banner} ${classes.heightMedium}`
                :
                classes.bannerMobile}>
            <Container>
                <Grid container spacing={3}>
                    {
                        smUp && (
                            <Grid item sm={12} md={7}>
                            </Grid>
                        )
                    }
                    <Grid item sm={12} md={5}>
                        <h1 className={headingClass()}>Nemo enim ipsam voluptatem quia voluptas in proident</h1>
                        {
                            smUp ? (
                                <svg className={classes.SVG} width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.12" width="140" height="140" rx="70" fill="white" />
                                    <rect opacity="0.2" x="14.2593" y="14.2593" width="112.778" height="112.778" rx="56.3889" fill="white" />
                                    <rect x="27.2222" y="27.2219" width="85.5556" height="85.5556" rx="42.7778" fill="white" />
                                    <path d="M62 56V84L84 70L62 56Z" fill="#C40B0B" />
                                </svg>
                            ) : (
                                    <svg className={classes.SVG} width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.12" width="62" height="62" rx="31" fill="white" />
                                        <rect opacity="0.2" x="6.31494" y="6.31494" width="49.9444" height="49.9444" rx="24.9722" fill="white" />
                                        <rect x="12.0557" y="12.0554" width="37.8889" height="37.8889" rx="18.9444" fill="white" />
                                        <path d="M27.4575 24.7998V37.1998L37.2004 30.9998L27.4575 24.7998Z" fill="#C40B0B" />
                                    </svg>

                                )
                        }


                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default VideoBanner