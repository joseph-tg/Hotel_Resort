import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
    return(
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starrting at $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}


// rafc using the es7 react syntax extension 

