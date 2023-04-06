import React from 'react';
import Header from './Header';
import Services from './Services/Services';
import Help from './Help/Help';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services />
            <Help />
        </div>
    );
};

export default Home;