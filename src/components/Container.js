import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    container: {
        maxWidth: "1020px",
        padding: "0 12px 0 12px",
        margin: "0 auto",
        height: '100%',
    },
    containerMobile: {
        padding: "0 15px 0 22px",
        margin: "0 auto",
        height: '100%',
    }
});
const Container = ({ children }) => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div className={desktop ? classes.container : classes.containerMobile}>
            {children}
        </div>
    )
}

export default Container