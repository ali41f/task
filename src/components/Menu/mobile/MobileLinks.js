import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Red, DarkRed, Grey, DarkGrey } from '../../../data/colors'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 250,
    },
    nested: {
        paddingLeft: 25,
    },
    mobileOpenerIcon: {
        display: 'inline-block',
        float: 'left',
        marginTop: "36px",
        cursor: "pointer"
    },
    list: {
        width: 250,

    },
    listItem: {
        "&:hover, &:focus": {
            color: Red
        },
    },
    register: {
        backgroundColor: Red,
        color: "#fff",
        "&:hover, &:focus": {
            backgroundColor: DarkRed
        },
    },
    login: {
        backgroundColor: Grey,
        "&:hover, &:focus": {
            backgroundColor: DarkGrey
        },
    },
    fullList: {
        width: 'auto',
    },
    forwardIcon: {
        fontSize: 14,
        marginRight: 5
    }
});

const MobileLinks = ({ handleRegisterOpen, handleLoginOpen }) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
    });

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer = (open) => (event) => {
        console.log(open)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
        //onClick={toggleDrawer(false)}
        //onKeyDown={toggleDrawer(false)}
        >
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem className={classes.listItem} button onClick={handleClick}>
                    <ListItemText primary="Services" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ListItem className={`${classes.listItem} ${classes.nested}`} button>
                        <ArrowForwardIosIcon className={classes.forwardIcon} />
                        <ListItemText primary="Car Repair Service" />
                    </ListItem>
                    <ListItem className={`${classes.listItem} ${classes.nested}`} button>
                        <ArrowForwardIosIcon className={classes.forwardIcon} />
                        <ListItemText primary="Auto Maintenance" />
                    </ListItem>
                    <ListItem className={`${classes.listItem} ${classes.nested}`} button>
                        <ArrowForwardIosIcon className={classes.forwardIcon} />
                        <ListItemText primary="Tires" />
                    </ListItem>
                    <ListItem className={`${classes.listItem} ${classes.nested}`} button>
                        <ArrowForwardIosIcon className={classes.forwardIcon} />
                        <ListItemText primary="Service Warranty" />
                    </ListItem>
                </Collapse>
                <ListItem className={classes.listItem} button>
                    <ListItemText primary="Special" />
                </ListItem>
                <ListItem className={classes.listItem} button>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem onClick={
                    () => {
                        setState({ left: false }); handleRegisterOpen();
                    }}
                    className={classes.register} button>
                    <ListItemText primary="Register" />
                </ListItem>
                <ListItem onClick={
                    () => {
                        setState({ left: false }); handleLoginOpen();
                    }}
                    className={classes.login} button>
                    <ListItemText primary="Login" />
                </ListItem>
            </List>
        </div>
    );


    return (
        <>
            <div className={classes.mobileOpenerIcon} onClick={toggleDrawer(true)}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="15" height="2" rx="1" fill="black" />
                    <rect y="5" width="10" height="2" rx="1" fill="black" />
                    <rect y="10" width="5" height="2" rx="1" fill="black" />
                </svg>
            </div>
            <div>
                <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
                    {list('left')}
                </Drawer>
            </div>
        </>
    )
}

export default MobileLinks