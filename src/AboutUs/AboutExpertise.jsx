import { FaIndustry, FaFlask, FaCogs, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { Headings } from "../HOC/Headings";
function AboutExpertise() {
    return (
        <div>
            <section className="aerosol-section py-5">
                <div className="container-lg">
                    <Headings heading='Expertise in Aerosol Spray Technology' tagline=' Precision engineering and deep technical understanding power every spray we produce.' />

                    <div className="row align-items-md-center align-items-start g-4">

                        <div className="col-lg-6 col-md-7 col-sm-6">
                            <p style={{ textAlign: "justify" }}>
                                Aerosol sprays are not simple products. They require precision,
                                balance, and technical expertise — this is where Zeeva Chemicals stands strong.
                            </p>

                            <p style={{ textAlign: "justify" }}>
                                Our team has hands-on experience in aerosol formulation,
                                filling, and testing. Every spray is engineered to deliver
                                consistent output, correct pressure, and smooth performance
                                from first use to last.
                            </p>

                            <p style={{ textAlign: "justify" }}>
                                We work with multiple spray formats, propellant systems,
                                and container types to match exact product requirements.
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-5 col-sm-6">
                            <div className="strength-box">
                                <h5 className="mb-3 fw-semibold">What defines Zeeva Chemicals</h5>

                                <p><FaCheckCircle className="check" /> Manufacturing excellence focus</p>
                                <p><FaCheckCircle className="check" /> Practical real-world solutions</p>
                                <p><FaCheckCircle className="check" /> Flexible production capacity</p>
                                <p><FaCheckCircle className="check" /> Long-term B2B partnership mindset</p>
                            </div>
                        </div>

                    </div>

                    {/* Expertise Grid */}
                    <div className="row text-center mt-2 g-4">

                        <div className="col-md-3 col-6">
                            <div className="expert-box h-100">
                                <FaCogs className="icon" />
                                <h6>Controlled Spray Patterns</h6>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="expert-box h-100">
                                <FaFlask className="icon" />
                                <h6>Stable Long-Life Formulations</h6>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="expert-box h-100">
                                <FaShieldAlt className="icon" />
                                <h6>Leak-Proof Filling & Sealing</h6>
                            </div>
                        </div>

                        <div className="col-md-3 col-6">
                            <div className="expert-box h-100">
                                <FaIndustry className="icon" />
                                <h6>Component Compatibility Testing</h6>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutExpertise;
