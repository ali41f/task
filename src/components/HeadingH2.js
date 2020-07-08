import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NormalBlack, White } from '../data/colors';

const useStyles = makeStyles({
    text: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '36px',
        lineHeight: '42px',
        alignItems: 'center',
        color: NormalBlack
    },
    textMobile: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '28px',
        lineHeight: '42px',
        alignItems: 'center',
        color: NormalBlack
    },
    lightText: {
        color: White
    }
});

const HeadingH2 = ({ darkBack, children }) => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div className={
            desktop ?
                darkBack ? `${classes.lightText} ${classes.text}` : classes.text
                :
                darkBack ? `${classes.lightText} ${classes.textMobile}` : classes.textMobile
        }
        >
            {children}
        </div>
    )
}

export default HeadingH2