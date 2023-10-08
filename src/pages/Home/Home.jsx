
import NavBar from '../../navbar/NavBar';
import Banner from '../../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../../card/Card';
import Footer from '../../footer/Footer';

const Home = () => {

    const yogaCard = useLoaderData()



    return (
        <div>
            
            <Banner></Banner>
            <Card yogaCard={yogaCard}></Card>
            <Footer></Footer>

        </div>
    );
};

export default Home;