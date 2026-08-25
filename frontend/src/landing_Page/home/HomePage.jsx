import React from 'react';
import Award from './Award';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Eduuction';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
function HomePage() {
    return (
        <>

              
               <Hero/>
               <Award />
               <Stats />
               <Pricing/>
               <Education />
               <OpenAccount />
              

        </>
    );
}

export default HomePage;