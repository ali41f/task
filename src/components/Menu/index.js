import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Container from '../Container'
import Logo from './Logo'
import DesktopLinks from './DesktopLinks'
import MobileLinks from './mobile/MobileLinks';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const useStyles = makeStyles({
    MenuRoot: {
        height: '88px',
        position: 'fixed',
        width: '100%',
        backgroundColor: 'white',
        top: 0,
        zIndex: "1000",
        //display: 'inline-table'
    },
    logoContainer: {
        marginTop: '24px',
        paddingBottom: '0',
        display: 'inline-block',
    },
    desktopNavLinks: {
        display: 'inline-block',
        float: 'right',
    },
    mobileLayout: {
        textAlign: 'center',
    }
});

const Menu = () => {

    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const [open, setOpen] = React.useState(false);

    const handleRegisterOpen = () => {
        setOpen(true);
    };

    const handleRegisterClose = () => {
        setOpen(false);
    };

    const [openLogin, setOpenLogin] = React.useState(false);

    const handleLoginOpen = () => {
        setOpenLogin(true);
    };

    const handleLoginClose = () => {
        setOpenLogin(false);
    };

    return (
        <>
            <div className={classes.MenuRoot}>
                <Container>
                    <div className={!desktop ? classes.mobileLayout : ""}>
                        <div className={classes.logoContainer}>
                            <Logo />
                        </div>
                        {
                            desktop ?
                                <DesktopLinks
                                    handleRegisterOpen={handleRegisterOpen}
                                    handleLoginOpen={handleLoginOpen}
                                /> :
                                <MobileLinks
                                    handleRegisterOpen={handleRegisterOpen}
                                    handleLoginOpen={handleLoginOpen}
                                />
                        }
                    </div>
                </Container>
            </div>
            <div>
                <Register open={open} handleClose={handleRegisterClose} />
                <Login open={openLogin} handleClose={handleLoginClose} />
            </div>
        </>
    )
}

export default Menu