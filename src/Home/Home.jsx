import { Link } from 'react-router-dom';
import HOCcomp from '../HOC/HOCcomp'
import { Carousel } from 'react-bootstrap';
import '../Home/Home.css'
import Button from '../HOC/Button';
import HomeAbout from './HomeAbout';
import Headings from '../HOC/Headings';
import HomeStrength from './HomeStrength';

function Home() {
    return (
        <div>
            <HomeAbout />
            <HomeStrength />
        </div>
    )
}

export default HOCcomp(Home);