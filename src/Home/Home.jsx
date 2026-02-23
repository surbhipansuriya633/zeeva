import HOCcomp from '../HOC/HOCcomp';
import '../Home/Home.css';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import HomeProduct from './HomeProduct';
import HomeStrength from './HomeStrength';
import HomeWeServe from './HomeWeServe';
import HomeWhyUs from './HomeWhyUs';

function Home() {
    return (
        <div>
            <HomeAbout />
            <HomeStrength />
            <HomeWeServe />
            <HomeProduct />
            <HomeWhyUs />
            <HomeContact/>
        </div>
    )
}

export default HOCcomp(Home);