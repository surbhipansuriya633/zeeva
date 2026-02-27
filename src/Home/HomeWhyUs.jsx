import React from 'react'
import { FaBolt, FaSprayCan, FaSun, FaLayerGroup } from "react-icons/fa";
import { Headings, HeadingsDark } from '../HOC/Headings';

function HomeWhyUs() {
    const benefits = [
        { icon: <FaBolt />, text: "Fast drying" },
        { icon: <FaSprayCan />, text: "Smooth coverage" },
        { icon: <FaSun />, text: "Indoor & outdoor use" },
        { icon: <FaLayerGroup />, text: "Multiple surfaces" },
    ];
    const surfaces = [
        { name: "Wood", img: require('../Assets/Image/wood.jpg'), delay: "1000" },
        { name: "Metal", img: require('../Assets/Image/metal.jpg'), delay: "1100" },
        { name: "Plastic", img: require('../Assets/Image/plastic.jpg'), delay: "1200" },
        { name: "Glass", img: require('../Assets/Image/glass.jpg'), delay: "1300" },
        { name: "Ceramic", img: require('../Assets/Image/Ceramic.jpg'), delay: "1400" },
        { name: "Stone", img: require('../Assets/Image/Stone.jpg'), delay: "1500" },
    ];


    return (
        <>

            <section className="performance-section">
                <div className="container">

                    <HeadingsDark heading="Why Us" tagline="Why This Spray Works Well" />

                    <div className="row performance-row text-center">
                        {benefits.map((item, i) => (
                            <div key={i} className="col-6 col-md perf-item" data-aos="fade" data-aos-duration="1000">
                                <div className="perf-icon text-light">{item.icon}</div>
                                <span className='text-light'>{item.text}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="surface-section">
                <div className="container">
                    <div className="mt-3 mb-md-3 mb-0">
                        <Headings
                            tagline="Even color. Clean finish. Less effort."
                            heading="Works Well On"
                        />
                    </div>
                    <div className="row g-3">
                        {surfaces.map((s, i) => (
                            <div key={i} className="col-6 col-sm-4 col-lg-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay={s.delay}>
                                <div
                                    className="surface-box"
                                    style={{ backgroundImage: `url(${s.img})` }}
                                >
                                    <div className="surface-label">{s.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomeWhyUs