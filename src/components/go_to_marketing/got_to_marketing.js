import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import Footer from '../footer/footer';
import Navbar from '../navigation/navbar';
import Delevering from './Delevering/delevering';
import Proven from './provenProcesses/proven';
import Marketfinding from './market_finding/marketfinding';
import Market_Banner from './maketing_banner/banner';
import Prd_Strategy from './prd_Strategy/delevering';
import What_Takes from './what_takes/what_takes';
import Winning from './winning/winning';
import Strategy from './Building_winning_str/winning_strategy';
import Awareness from './awareness/awareness';


function Go_to_marketing() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Navbar />
            <Market_Banner />
            <Marketfinding />
            <Delevering />
            <Proven /> 
            <Strategy />
            <What_Takes />
            <Prd_Strategy />
            <Winning/>
            <Awareness />
            <Footer /> 
        </div>
    )
}

export default Go_to_marketing;
