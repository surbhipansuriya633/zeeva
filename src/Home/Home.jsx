import { Link } from 'react-router-dom';
import HOCcomp from '../HOC/HOCcomp'
import { Carousel } from 'react-bootstrap';
import '../Home/Home.css'
import Button from '../HOC/Button';

function Home() {
    return (
        <div>
            <Button btnname="props.btnname" />
            <br />
        </div>
    )
}

export default HOCcomp(Home);