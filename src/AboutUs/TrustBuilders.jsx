import React from 'react'
import { Headings } from '../HOC/Headings'

function TrustBuilders() {
    return (
        <div>
            <section className="trust-section">
                <div className="container">

                    {/* Heading */}
                    <div className="mb-5">

                        <Headings heading='Trust Builders' tagline='Real production visuals that build trust and confidence' />
                    </div>

                    {/* TOP ROW */}
                    <div className="row g-4 mb-4">

                        <div className="col-lg-6">
                            <div className="trust-card">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2025/11/562907128/RJ/PG/LC/256033009/ok-500x500.jpg"
                                    alt="Manufacturing"
                                    className="img-fluid"
                                />
                                <div className="trust-label">Infrastructural Set-Up</div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="trust-card">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2025/11/562907645/PI/GB/VQ/256033009/man-500x500.jpg"
                                    alt="Production Line"
                                    className="img-fluid"
                                />
                                <div className="trust-label">Manufacturing Unit</div>
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM ROW */}
                    <div className="row g-4">

                        <div className="col-lg-6">
                            <div className="trust-card">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2025/11/562907483/YJ/XC/RM/256033009/uni-500x500.jpg"
                                    alt="Quality Testing"
                                    className="img-fluid"
                                />
                                <div className="trust-label">Warehouse Unit</div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="trust-card small">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2025/11/562907758/IG/FR/KO/256033009/mh-500x500.jpg"
                                    alt="Filling"
                                    className="img-fluid"
                                />
                                <div className="trust-label">Our Machinery</div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="trust-card small">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2025/11/562907900/FP/XV/WH/256033009/pack-500x500.jpg"
                                    alt="Packaging"
                                    className="img-fluid"
                                />
                                <div className="trust-label">Product Packaging</div>
                            </div>
                        </div>

                    </div>


                </div>
                {/* Bottom Statement */}
                <div className="text-center mt-3">
                    <p className="trust-footer highlight-line py-4 mb-0">
                        Real production photos build confidence in our processes and products.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default TrustBuilders