import { Link } from 'react-router-dom';
import HOCcomp from '../HOC/HOCcomp'
import { Carousel } from 'react-bootstrap';
import '../Home/Home.css'
import Button from '../HOC/Button';
import HomeAbout from './HomeAbout';
import Headings from '../HOC/Headings';

function Home() {
    return (
        <div>
            <HomeAbout />
        </div>
    )
}

export default HOCcomp(Home);