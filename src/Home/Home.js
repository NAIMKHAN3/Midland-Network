import React from 'react';
import Header from './Header';
import Services from './Services/Services';
import Help from './Help/Help';
import MidlandDefferance from './MidlandDefferance/MidlandDefferance';
import Supporting from './Supporting/Supporting';
import Belive from './Belive/Belive';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services />
            <Help />
            <MidlandDefferance />
            <Supporting></Supporting>
            <Belive></Belive>
        </div>
    );
};

export default Home;