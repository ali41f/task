import React, { useState, useEffect, isValidElement } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NormalBlack, DarkestWhite, LightWhite, Red } from '../../data/colors';
import SimpleButton from '../SimpleButton';

const useStyles = makeStyles({
    root: {
        padding: '40px 11px',
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
const Register = ({ open, handleClose }) => {

    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');


    const submitRegister = () => {

        if (isFormValid()) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "email": email, "password": password, "name": name, "surname": surname });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://recruitment.dev.radity.com/api/signup", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (!result.success) {
                        setHelperText(result.data[0].msg)
                    } else {
                        setHelperText(result.message)
                    }

                    console.log(result)
                })
                .catch(error => console.log(error));
        }

    }

    const isFormValid = () => {
        if (name.length && surname.length && email.length && password.length > 6) {
            return true
        } else {
            password.length > 6 ?
                setHelperText('All Fields are required.') :
                setHelperText('All Fields are required and password has to be > 6 characters.')
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
                <div className={classes.root}>
                    <h1 className={classes.title}>Register</h1>
                    <form>
                        <div className={desktop ? classes.row : ""}>
                            <input placeholder="Name" className={classes.input} type="text"
                                onChange={(e) => setName(e.target.value)} value={name}
                            />
                            <input placeholder="Surname" className={classes.input} type="text"
                                onChange={(e) => setSurname(e.target.value)} value={surname}
                            />
                        </div>
                        <div className={desktop ? classes.row : ""}>
                            <input placeholder="Email" className={classes.input} type="email"
                                onChange={(e) => setEmail(e.target.value)} value={email}
                            />
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
                            onClick={submitRegister}>
                            <SimpleButton filled={true}>Register</SimpleButton>
                        </div>
                    </form>
                </div>
            </Dialog>
        </>
    )
}

export default Register