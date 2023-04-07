import React from 'react';
import Header from './Header';
import Services from './Services/Services';
import Help from './Help/Help';
import MidlandDefferance from './MidlandDefferance/MidlandDefferance';
import Supporting from './Supporting/Supporting';
import Belive from './Belive/Belive';
import Award from './Award/Award';
import StayUpdate from './StayUpdate/StayUpdate';
import Footer from './Footer/Footer';
import ClientTestomonial from './ClientTestomonial/ClientTestomonial';
import Connect from './Connect/Connect';


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Services />
            <Help />
            <MidlandDefferance />
            <Supporting></Supporting>
            <ClientTestomonial />
            <Award />
            <Belive></Belive>
            <Connect />
            <StayUpdate />
            <Footer />
        </div>
    );
};

export default Home;