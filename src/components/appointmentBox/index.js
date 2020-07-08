import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Container from '../Container';
import { White } from '../../data/colors'
import ArrowButton from '../ArrowButton';

const useStyles = makeStyles({
    desktopRoot: {
        position: "relative",
        top: "-75px",
        height: 0
    },
    mobileRoot: {
    },
    box: {
        padding: "43px 76px 48px 70px",
        backgroundColor: White,
        display: 'flex',
        alignItems: "center"
    },
    boxMobile: {
        padding: "35px 0 40px 0",
        backgroundColor: White,
        display: 'flex',
        alignItems: "center",
        flexDirection: "column"
    },
    h2: {
        flex: 2,
        margin: 0
    },
    h2Mobile: {
        marginBottom: 35
    },
    appointmentBtn: {
        flex: 1,
        textAlign: "end"
    }
});

const AppointmentBox = () => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    //const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={desktop ? classes.desktopRoot : classes.mobileRoot}>
            <Container>
                <div className={desktop ? classes.box : classes.boxMobile}>
                    <h2 className={desktop ? classes.h2 : classes.h2Mobile}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                    <div className={classes.appointmentBtn}>
                        <ArrowButton keepBig={true}>make an appointment</ArrowButton>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AppointmentBox