import HOCcomp from '../HOC/HOCcomp';
import '../Home/Home.css';
import HomeAbout from './HomeAbout';
import HomeProduct from './HomeProduct';
import HomeStrength from './HomeStrength';
import HomeWeServe from './HomeWeServe';

function Home() {
    return (
        <div>
            <HomeAbout />
            <HomeStrength />
            <HomeWeServe />
            <HomeProduct />
        </div>
    )
}

export default HOCcomp(Home);