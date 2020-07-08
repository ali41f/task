import React, { useState, useEffect, isValidElement } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NormalBlack, DarkestWhite, LightWhite, Red } from '../../data/colors';
import SimpleButton from '../SimpleButton';

const useStyles = makeStyles({
    root: {
        padding: '40px 50px',
    },
    rootMobile: {
        padding: '40px 10px'
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '36px',
        lineHeight: '42px',
        textAlign: 'center',
        color: NormalBlack,
        margin: 0,
        paddingBottom: 19
    },
    row: {
        display: "flex"
    },
    input: {
        padding: "17px 23px",
        fontSize: '16px',
        lineHeight: '24px',
        display: "block",
        color: DarkestWhite,
        backgroundColor: LightWhite,
        border: 'none',
        margin: 11,
        "&:focus": {
            outline: 'none'
        }
    },
    submitContainer: {
        float: "right",
        margin: "9px 5px 0 0"
    },
    submitContainerMobile: {
        textAlign: "center",
        marginTop: 9
    },
    helperText: {
        color: Red,
        textAlign: "center"
    }
});
const Login = ({ open, handleClose }) => {

    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');

    const submitLogin = () => {

        if (isFormValid()) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "email": email, "password": password });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://recruitment.dev.radity.com/api/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.userId != undefined) {
                        setHelperText("Logged in successfully")
                    } else {
                        setHelperText(result.message)
                    }
                    console.log(result)
                })
                .catch(error => console.log("error" + error));
        }

    }

    const isFormValid = () => {
        if (email.length && password.length > 6) {
            return true
        } else {
            setHelperText('All Fields are required.')
            return false
        }
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className={desktop ? classes.root : classes.rootMobile}>
                    <h1 className={classes.title}>Login</h1>
                    <form>
                        <div className={desktop ? classes.row : ""}>
                            <input placeholder="Email" className={classes.input} type="email"
                                onChange={(e) => setEmail(e.target.value)} value={email}
                            />
                        </div>
                        <div className={desktop ? classes.row : ""}>
                            <input placeholder="Password" className={classes.input} type="password"
                                onChange={(e) => setPassword(e.target.value)} value={password}
                            />
                        </div>
                        {
                            helperText.length ? (
                                <div className={classes.helperText}>{helperText}</div>
                            ) : ''
                        }
                        <div className={desktop ? classes.submitContainer : classes.submitContainerMobile}
                            onClick={submitLogin}>
                            <SimpleButton filled={true}>Login</SimpleButton>
                        </div>
                    </form>
                </div>
            </Dialog>
        </>
    )
}

export default Login