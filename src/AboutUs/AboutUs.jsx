import HOCcomp from '../HOC/HOCcomp'
import AboutZeeva from './AboutZeeva'
import '../AboutUs/About.css'
import AboutMissionVision from './AboutMissionVision'
import AboutExpertise from './AboutExpertise'
import AboutWhyUs from './AboutWhyUs'
function AboutUs() {
  return (
    <>
      <AboutZeeva />
      <AboutMissionVision />
      <AboutExpertise />
      <AboutWhyUs />
    </>
  )
}

export default HOCcomp(AboutUs)