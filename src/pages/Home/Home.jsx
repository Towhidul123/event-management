

import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../../card/Card';
import Footer from '../../footer/Footer';
import Aos from '../../aos/Aos';

const Home = () => {
  

    const yogaCard = useLoaderData()

    return (
        <div>
           
            <Banner></Banner>
            <Card yogaCard={yogaCard}></Card>

            <Aos></Aos>

            <Footer></Footer>

        </div>
    );
};

export default Home;