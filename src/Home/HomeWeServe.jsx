import React from "react";
import { HeadingsDark } from "../HOC/Headings";
import Button from "../HOC/Button";

function HomeWeServe() {
    const industries = [
        {
            name: "Industrial & Workplace",
            img: require('../Assets/Image/industries.png'),
        },
        {
            name: "Healthcare & Medical",
            img: require('../Assets/Image/Healthcare.png'),
        },
        {
            name: "Personal Care & Hygiene",
            img: require('../Assets/Image/personalcare.png'),
        },
        {
            name: "Hospitality & Facility Care",
            img: require('../Assets/Image/hospitality.png'),
        },
        {
            name: "Home & Surface Care",
            img: require('../Assets/Image/Homecare.png'),
        },
    ];
    return (
        <>

            <section className="industries-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <HeadingsDark heading="The Industries" tagline="We Serve" />

                            <p className="desc" data-aos="fade-right" data-aos-duration="1000">
                                Every industry has different needs, and we respect that. A
                                medical product cannot be treated like a household spray.
                                We understand usage, storage, and safety expectations
                                before production begins.
                            </p>

                            <p className="desc" data-aos="fade-right" data-aos-duration="1000">
                                This helps us deliver products
                                that fit the industry, the user, and the real working
                                conditions they face every day
                            </p>

                            <Button btnname="Learn more" Link="/industries" />
                        </div>

                        <div className="col-lg-6 text-center mt-5 mt-lg-0">
                            <div className="orbit-container">
                                <div className="center-circle"><img src={require('../Assets/Image/broucher_image/img4.jpg')} alt="" className="img-fluid" /></div>

                                {industries.map((item, index) => (
                                    <div key={index} className={`orbit-item rounded-5 item${index}`} data-aos="fade-left" data-aos-duration="1000">
                                        <img src={item.img} alt={item.name} />
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeWeServe;
