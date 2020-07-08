import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Container from '../Container';
import Logo from '../Menu/Logo';
import SocialLinks from './SocialLinks';
import { useStyles } from './styles'


const Footer = () => {

    const classes = useStyles()
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <div className={desktop ? classes.desktopRoot : classes.mobileRoot}>
                <Container>
                    <Grid container spacing={smUp ? 8 : 4}>
                        <Grid item xs={12} md={4}>
                            <Logo />
                            <p className={classes.aboutText}>This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua.</p>
                            <SocialLinks />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <h3 className={desktop ? `${classes.h3} ${classes.h3center}` : classes.h3}>EXPLORE LINKS</h3>
                            <div className={desktop ? classes.linksContainer : ""}>
                                <div className={smUp ? classes.linksContainerItem : ""}>
                                    <div className={classes.linkItem}>About</div>
                                    <div className={classes.linkItem}>Services</div>
                                    <div className={classes.linkItem}>Specials</div>
                                    <div className={classes.linkItem}>Estimates</div>
                                </div>
                                <div className={smUp ? classes.linksContainerItem : ""}>
                                    <div className={classes.linkItem}>Reviews</div>
                                    <div className={classes.linkItem}>Shop</div>
                                    <div className={classes.linkItem}>Careers</div>
                                    <div className={classes.linkItem}>FAQs</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h3 className={classes.h3}>CONTACT</h3>
                            <div className={classes.contactItem}>
                                <div>
                                    <svg className={classes.contactSVG} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00004 1.33334C5.42004 1.33334 3.33337 3.42001 3.33337 6.00001C3.33337 9.50001 8.00004 14.6667 8.00004 14.6667C8.00004 14.6667 12.6667 9.50001 12.6667 6.00001C12.6667 3.42001 10.58 1.33334 8.00004 1.33334ZM4.66671 6.00001C4.66671 4.16001 6.16004 2.66668 8.00004 2.66668C9.84004 2.66668 11.3334 4.16001 11.3334 6.00001C11.3334 7.92001 9.41337 10.7933 8.00004 12.5867C6.61337 10.8067 4.66671 7.90001 4.66671 6.00001ZM6.33337 6.00001C6.33337 5.07954 7.07957 4.33334 8.00004 4.33334C8.59548 4.33334 9.1457 4.65101 9.44342 5.16668C9.74114 5.68235 9.74114 6.31768 9.44342 6.83334C9.1457 7.34901 8.59548 7.66668 8.00004 7.66668C7.07957 7.66668 6.33337 6.92048 6.33337 6.00001Z" fill="#C40B0B" />
                                    </svg>
                                </div>
                                <div className={classes.contactText}>31 Pikes Place Parkway Seattle, WA 54321</div>
                            </div>
                            <div className={classes.contactItem}>
                                <div>
                                    <svg className={classes.contactSVG} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66671 0.666656L11.3334 0.673323C12.0667 0.673323 12.6667 1.26666 12.6667 1.99999V14C12.6667 14.7333 12.0667 15.3333 11.3334 15.3333H4.66671C3.93337 15.3333 3.33337 14.7333 3.33337 14V1.99999C3.33337 1.26666 3.93337 0.666656 4.66671 0.666656ZM4.66671 12.6667H11.3334V3.33332H4.66671V12.6667Z" fill="#C40B0B" />
                                    </svg>

                                </div>
                                <div className={classes.contactText}>(555) 765-4321</div>
                            </div>
                            <div className={classes.contactItem}>
                                <div>
                                    <svg className={classes.contactSVG} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.6667 3.99999C14.6667 3.26666 14.0667 2.66666 13.3334 2.66666H2.66671C1.93337 2.66666 1.33337 3.26666 1.33337 3.99999V12C1.33337 12.7333 1.93337 13.3333 2.66671 13.3333H13.3334C14.0667 13.3333 14.6667 12.7333 14.6667 12V3.99999ZM13.3334 3.99999L8.00004 7.33332L2.66671 3.99999H13.3334ZM8.00004 8.66666L2.66671 5.33332V12H13.3334V5.33332L8.00004 8.66666Z" fill="#C40B0B" />
                                    </svg>

                                </div>
                                <div className={classes.contactText}>info@company.com</div>
                            </div>
                            <div className={classes.contactItem}>
                                <div>
                                    <svg className={classes.contactSVG} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.66774 1H9.33441C9.70108 1 10.0011 1.3 10.0011 1.66667C10.0011 2.03333 9.70108 2.33333 9.33441 2.33333H6.66774C6.30108 2.33333 6.00108 2.03333 6.00108 1.66667C6.00108 1.3 6.30108 1 6.66774 1ZM8.66774 9C8.66774 9.36667 8.36774 9.66667 8.00108 9.66667C7.63441 9.66667 7.33441 9.36667 7.33441 9V6.33333C7.33441 5.96667 7.63441 5.66667 8.00108 5.66667C8.36774 5.66667 8.66774 5.96667 8.66774 6.33333V9ZM12.6877 5.26L13.1877 4.76C13.441 4.50667 13.4477 4.08667 13.1877 3.82667L13.181 3.82C12.921 3.56 12.5077 3.56667 12.2477 3.82L11.7477 4.32C10.7144 3.49333 9.41438 3 8.00104 3C4.80104 3 2.08104 5.64 2.00104 8.84C1.91438 12.2267 4.62771 15 8.00104 15C11.321 15 14.001 12.3133 14.001 9C14.001 7.58667 13.5077 6.28667 12.6877 5.26ZM3.33441 9C3.33441 11.58 5.42108 13.6667 8.00108 13.6667C10.5811 13.6667 12.6677 11.58 12.6677 9C12.6677 6.42 10.5811 4.33333 8.00108 4.33333C5.42108 4.33333 3.33441 6.42 3.33441 9Z" fill="#C40B0B" />
                                    </svg>
                                </div>
                                <div className={classes.contactText}>Mon - Sat: 7:00am - 6:00pm </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.absoluteFooter}>
                <Container>
                    <p className={smUp ? classes.absoluteFooterText : classes.absoluteFooterTextMobile}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                </Container>
            </div>
        </>
    )
}

export default Footer