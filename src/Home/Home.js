import React from 'react';
import Header from './Header';
import Services from './Services/Services';
import Help from './Help/Help';
import MidlandDefferance from './MidlandDefferance/MidlandDefferance';
import Supporting from './Supporting/Supporting';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services />
            <Help />
            <MidlandDefferance />
            <Supporting></Supporting>
        </div>
    );
};

export default Home;