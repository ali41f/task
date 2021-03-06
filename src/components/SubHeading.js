import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { LightBlack, MediumGrey } from '../data/colors';

const useStyles = makeStyles({
    text: {
        marginLeft: "16px",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '24px',
        alignItems: 'center',
        letterSpacing: "2.5px",
        textTransform: 'uppercase',
        color: LightBlack
    },
    textLight: {
        color: MediumGrey
    },
    SVG: {
        verticalAlign: "middle"
    }
});

const SubHeading = ({ darkBack, children }) => {

    const classes = useStyles()

    return (
        <div>
            <svg className={classes.SVG} width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.272 6.61768L9.71362 8.17282L14.7757 13.2353L9.71362 18.2978L11.272 19.853L17.9036 13.2353L11.272 6.61768Z" fill="#959595" />
                <path d="M10.5908 10.4228L9.72498 9.55884L6.04077 13.2353L9.72498 16.9118L10.5908 16.0478L7.77849 13.2353L10.5908 10.4228Z" fill="#C40B0B" />
            </svg>
            <span className={
                darkBack ?
                    `${classes.text} ${classes.textLight}` :
                    classes.text
            }>
                {children}
            </span>
        </div>
    )
}

export default SubHeading