import React from 'react';
import Header from './Header';
import Services from './Services/Services';
import Help from './Help/Help';
import MidlandDefferance from './MidlandDefferance/MidlandDefferance';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services />
            <Help />
            <MidlandDefferance />
        </div>
    );
};

export default Home;