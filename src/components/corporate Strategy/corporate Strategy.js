import React, { useEffect } from 'react';
import Aos from 'aos';
import Banner from './Banner/banner';
import Navbar from '../navigation/navbar';
import Footer from '../footer/footer';
import ClientApproach from './Client_Aproach/ClientApproach'
import Customber_Experience from './Customber_Experience/Customber_Experience';
import Delevering from './Intended/Intended';
import Objective from './Objective/objective'
export default function Corporate_Strategy() {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div>
            <Navbar />
            <Banner />
            <Delevering />
            <ClientApproach />
            <Customber_Experience />
            <Objective />
            <Footer />
        </div>
    )
}
