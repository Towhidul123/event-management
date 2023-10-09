import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://i.ibb.co/vv3F900/eneko-urunuela-I2-YSm-EUAg-DY-unsplash.jpg" />
                <div data-src="https://i.ibb.co/fkqhYr4/anupam-mahapatra-Vz0-Rbclz-G-w-unsplash.jpg" />
                <div data-src="https://i.ibb.co/tcRssHQ/kike-vega-F2qh3yjz6-Jk-unsplash.jpg" />
            </AutoplaySlider>
        </div>
    );
};

export default Banner;