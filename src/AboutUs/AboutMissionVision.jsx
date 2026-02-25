import { BsAward, BsCheckCircle, BsGearWideConnected, BsShieldCheck } from "react-icons/bs";
import { HeadingsDark } from "../HOC/Headings";
import { FaRegHandshake } from "react-icons/fa";

function AboutMissionVision() {
    return (
        <div className="pb-5 pt-3 bg-black mb-3">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-5 order-1 order-md-0">


                        <div className="philosophy-section text-center">
                            <span className="philosophy-label">Our Philosophy</span>

                            <h2 className="philosophy-quote" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Consistency is not a promise — it's a habit.
                            </h2>

                            <p className="philosophy-description">
                                Every product reflects our dedication to excellence and reliability
                            </p>

                        </div>
                    </div>
                    <div className="col-md-7 mt-md-5">
                        <HeadingsDark heading="Our Misson" tagline="Zeeva believes great products come from simple fundamentals" />
                        <div className="row text-center mission-row justify-content-evenly">
                            <div className="col-lg-2 col-md-4 col-sm-2 col-4">
                                <BsCheckCircle className="mission-icon" />
                                <h6 className="text-light">right formulation</h6>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-2 col-4">
                                <BsShieldCheck className="mission-icon" />
                                <h6 className="text-light">clean & controlled processes</h6>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-2 col-4">
                                <BsAward className="mission-icon" />
                                <h6 className="text-light">strong quality focus</h6>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-2 col-4">
                                <BsGearWideConnected className="mission-icon" />
                                <h6 className="text-light">safety & consistency</h6>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-2 col-4">
                                <FaRegHandshake className="mission-icon" />
                                <h6 className="text-light">long-term partnerships</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMissionVision;