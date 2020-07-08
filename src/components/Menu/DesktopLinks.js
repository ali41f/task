import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DownArrowSVG from './DownArrowSVG';
import UpArrowSVG from './UpArrowSVG';
import SimpleButton from '../SimpleButton';

const useStyles = makeStyles({
    desktopNavLinks: {
        display: 'inline-block',
        float: 'right',
    }
});

const DesktopLinks = ({ handleRegisterOpen, handleLoginOpen }) => {

    const classes = useStyles();

    return (
        <div className={classes.desktopNavLinks}>
            <div className="dropdown navLink">
                <span>Services</span>
                <DownArrowSVG />
                <div className="dropdown-content">
                    <div className="upArrowContainer">
                        <UpArrowSVG />
                    </div>
                    <p>Car Repair Service</p>
                    <p>Auto Maintenance</p>
                    <p>Tires</p>
                    <p>Service Warranty</p>
                </div>
            </div>
            <div className="navLink">
                <span>Special</span>
            </div>
            <div className="navLink">
                <span>About</span>
            </div>
            <span onClick={handleRegisterOpen}>
                <SimpleButton filled={true}>Register</SimpleButton>
            </span>
            <span onClick={handleLoginOpen}>
                <SimpleButton filled={false}>Login</SimpleButton>
            </span>
        </div>
    )
}

export default DesktopLinks