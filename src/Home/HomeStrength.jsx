import React from 'react'
import { Headings } from '../HOC/Headings'

function HomeStrength() {
    return (
        <div>
            <section class="strength-section py-5">
                <div class="container">

                    <Headings heading="Our aerosol expertise" tagline="Why customers trust our products" />

                    <div class="row justify-content-evenly align-items-center mt-3">

                        <div class="col-lg-2 col-md-4 col-6 strength-item p-0 my-3">
                            <i class="bi bi-graph-up-arrow"></i>
                            <p>Consistent <br /> Performance</p>
                        </div>

                        <div class="col-lg-2 col-md-4 col-6 strength-item p-0 my-3">
                            <i class="bi bi-droplet"></i>
                            <p>Leak-proof <br /> Packaging</p>
                        </div>

                        <div class="col-lg-2 col-md-4 col-6 strength-item p-0 my-3">
                            <i class="bi bi-shield-check"></i>
                            <p>Quality Tested <br />Output</p>
                        </div>

                        <div class="col-lg-2 col-md-4 col-6 strength-item p-0 my-3">
                            <i class="bi bi-gear"></i>
                            <p>Industrial-Grade <br />Formulations</p>
                        </div>

                        <div class="col-lg-2 col-md-4 col-6 strength-item p-0 my-3">
                            <i class="bi bi-sliders"></i>
                            <p>Flexible <br />Production</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeStrength