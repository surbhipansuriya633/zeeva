import { Headings } from '../HOC/Headings';

function AboutZeeva() {
    return (
        <>
            <section className="about-section">
                <div className="about-overlay"></div>

                <div className="container-lg">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-6 order-1 order-md-0">
                            <Headings heading="We don’t" tagline="just supply products — we support growth." />

                            <p>
                                Zeeva Chemical LLP is a manufacturing-focused company dedicated to
                                producing reliable aerosol spray solutions that perform consistently
                                in real-world conditions.
                            </p>

                            <p>
                                We support brands, hospitals, distributors, and businesses with
                                dependable products, scalable production, and long-term
                                manufacturing support.
                            </p>

                            <p>
                                We believe great products come from the right formulation, clean
                                processes, and a strong commitment to quality, safety, and
                                consistency.
                            </p>

                            <p className="highlight">
                                We don’t just supply products — we support growth.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-7 col-10 order-0 order-md-1">
                            <img src={require('../Assets/AboutImages/AboutZeeva.jpg')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutZeeva;