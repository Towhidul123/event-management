import React from 'react';
import NavBar from '../../navbar/NavBar';
import Banner from '../../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <h2 className=''>This is me</h2>
        </div>
    );
};

export default Home;