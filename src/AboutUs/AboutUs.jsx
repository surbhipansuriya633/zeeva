import HOCcomp from '../HOC/HOCcomp'
import AboutZeeva from './AboutZeeva'
import '../AboutUs/About.css'
import AboutMissionVision from './AboutMissionVision'
function AboutUs() {
  return (
    <>
      <AboutZeeva />
      <AboutMissionVision />
    </>
  )
}

export default HOCcomp(AboutUs)