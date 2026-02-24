import HOCcomp from '../HOC/HOCcomp';
import '../Home/Home.css';
import HomeAbout from './HomeAbout';
import HomeCarousel from './HomeCarousel';
import HomeContact from './HomeContact';
import HomeProduct from './HomeProduct';
import HomeStrength from './HomeStrength';
import HomeWeServe from './HomeWeServe';
import HomeWhyUs from './HomeWhyUs';

function Home() {
    return (
        <div>
            <HomeCarousel />
            <HomeAbout />
            <HomeStrength />
            <HomeWeServe />
            <HomeProduct />
            <HomeWhyUs />
            <HomeContact />
        </div>
    )
}

export default HOCcomp(Home);