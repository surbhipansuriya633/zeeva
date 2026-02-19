import HOCcomp from '../HOC/HOCcomp';
import '../Home/Home.css';
import HomeAbout from './HomeAbout';
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