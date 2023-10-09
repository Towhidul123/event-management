

import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../../card/Card';
import Footer from '../../footer/Footer';
import Aos from '../../aos/Aos';
import Member from './member/Member';


const Home = () => {
  

    const yogaCard = useLoaderData()

    return (
        <div>
           
            <Banner></Banner>
            <Card yogaCard={yogaCard}></Card>

            <Aos></Aos>
            <Member></Member>
            <Footer></Footer>

        </div>
    );
};

export default Home;