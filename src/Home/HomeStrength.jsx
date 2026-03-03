import { Headings } from "../HOC/Headings";

function HomeStrength() {
    const items = [
        { icon: "bi-graph-up-arrow", text: "Consistent Performance" },
        { icon: "bi-droplet", text: "Leak-proof Packaging" },
        { icon: "bi-shield-check", text: "Quality Tested Output" },
        { icon: "bi-gear", text: "Industrial-Grade Formulations" },
        { icon: "bi-sliders", text: "Flexible Production" },
    ];

    return (
        <section className="strength-section py-5 bg-body-tertiary">
            <div className="container">

                <div data-aos="fade-down">
                    <Headings
                        heading="Our Aerosol Expertise"
                        tagline="Why customers trust our products"
                    />
                </div>

                <div className="row justify-content-center justify-content-lg-between mt-5">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="col-lg-2 col-md-4 col-6 mb-lg-0 mb-3"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="strength-card text-center h-100">
                                <div className="icon-wrapper">
                                    <i className={`bi ${item.icon}`}></i>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default HomeStrength;