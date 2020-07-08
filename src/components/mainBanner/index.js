import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '../Container';
import { White } from '../../data/colors'
import ArrowButton from '../ArrowButton';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(./images/bg.jpg)`,
        backgroundPosition: 'top right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 712,
        marginTop: 88,
    },
    heightMedium: {
        height: 612,
    },
    bannerMobile: {
        backgroundImage: `url(./images/bgMobile.png)`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 275,
        marginTop: 88,
    },
    content: {
        marginLeft: '10px',
        top: '192px',
        position: "relative"
    },
    contentMobile: {
        top: '82px',
        position: "relative"
    },
    heading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '56px',
        lineHeight: '56px',
        marginBottom: "48px",
        color: White,
    },
    mediumHeading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '40px',
        lineHeight: '50px',
        marginBottom: "30px",
        color: White
    },
    smallHeading: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '28px',
        lineHeight: '30px',
        marginBottom: "15px",
        color: White
    }
});

const MainBanner = () => {

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
                <div className={smUp ? classes.content : classes.contentMobile}>
                    <h1 className={headingClass()}>Top notch service is<br /> our main auto motive</h1>
                    <ArrowButton keepBig={false}>Make an appointment</ArrowButton>
                </div>
            </Container>
        </div>
    )
}

export default MainBanner