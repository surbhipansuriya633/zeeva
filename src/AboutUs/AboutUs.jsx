import HOCcomp from '../HOC/HOCcomp'
import AboutZeeva from './AboutZeeva'
import '../AboutUs/About.css'
import AboutMissionVision from './AboutMissionVision'
import AboutExpertise from './AboutExpertise'
function AboutUs() {
  return (
    <>
      <AboutZeeva />
      <AboutMissionVision />
      <AboutExpertise />
    </>
  )
}

export default HOCcomp(AboutUs)