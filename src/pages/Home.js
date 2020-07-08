import React, { useEffect, useState } from 'react';
import MainBanner from '../components/mainBanner'
import OurPromise from '../components/ourPromise'
import VideoBanner from '../components/videoBanner'
import Services from '../components/services';
import Impact from '../components/impact';
import AppointmentBox from '../components/appointmentBox';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className="contentWrapper">
            <MainBanner />
            <OurPromise />
            <VideoBanner />
            <Services />
            <Impact />
            <AppointmentBox />
            <Footer />
        </div>
    )
}

export default Home