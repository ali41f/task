import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { White, Red, DarkRed } from "../data/colors";

const useStyles = makeStyles({
    root: {
        display: "inline-flex",
        cursor: 'pointer',
        backgroundColor: Red,
        "&:hover": {
            backgroundColor: DarkRed,
        }
    },
    ArrowBtn: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '24px',
        display: "inline-block",
        alignItems: 'center',
        letterSpacing: '0.15px',
        textTransform: 'uppercase',
        color: White,
        padding: "12px 7px 12px 18px",
    },
    ArrowBtnMobile: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '10px',
        lineHeight: '24px',
        display: "inline-block",
        alignItems: 'center',
        letterSpacing: '0.15px',
        textTransform: 'uppercase',
        color: White,
        padding: "6px 0px 5px 6px",
    },
    SVG: {
        verticalAlign: "bottom",
    }
});
const ArrowButton = ({ keepBig, children }) => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className={classes.root}>
            <div className={desktop || keepBig ? classes.ArrowBtn : classes.ArrowBtnMobile}>
                {children}
            </div>
            {
                desktop || keepBig ? (
                    <svg className={classes.SVG} width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 48H0L16.7 0H43V48Z" fill="#E30B0B" />
                        <path d="M27.0001 29.9333L26.0601 28.9933L29.7801 25.2667H21.6667V23.9334H29.7801L26.0601 20.2067L27.0001 19.2667L32.3334 24.6L27.0001 29.9333Z" fill="white" />
                    </svg>
                ) : (
                        <svg className={classes.SVG} width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 35H1.90735e-06L11.6512 0H30V35Z" fill="#E30B0B" />
                            <path d="M20.093 22.4502L19.3935 21.7452L22.1619 18.9502H16.124V17.9502H22.1619L19.3935 15.1552L20.093 14.4502L24.062 18.4502L20.093 22.4502Z" fill="white" />

                        </svg>

                    )
            }

        </div>
    )
}

export default ArrowButton