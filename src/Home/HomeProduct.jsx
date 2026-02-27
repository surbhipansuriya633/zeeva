import React from 'react'
import { Headings } from '../HOC/Headings';
import Button from '../HOC/Button';

function HomeProduct() {

    const products = [
        {
            name: "Zinc 99%",
            Quantity: "400ml",
            image: require('../Assets/Image/Pro_Zink99-removebg-preview.png'),
            delay: "1000"
        },
        {
            name: "Advance Lubricant ",
            Quantity: "500ml",
            image: require('../Assets/Image/Pro_Advancelubricantspray-removebg-preview.png'),
            delay: "1100"
        },
        {
            name: "Chain Lube",
            Quantity: "200ml | 500ml",
            image: require('../Assets/Image/Pro_Chain_Lube_Spray-removebg-preview.png'),
            delay: "1200"

        },
        {
            name: "Color Spray",
            Quantity: "400ml",
            image: require('../Assets/Image/Pro_ColorSpray-removebg-preview.png'),
            delay: "1300"

        },
        {
            name: "Silicon Spray",
            Quantity: "550ml",
            image: require('../Assets/Image/Pro_SiliconSpray-removebg-preview.png'),
            delay: "1400"

        },
        {
            name: "Stain Lifting ",
            Quantity: "400ml",
            image: require('../Assets/Image/Pro_StainLiftingSpray-removebg-preview.png'),
            delay: "1500"
        },
    ];


    return (
        <>
            <section className="featured-section">
                <div className="container">
                    <div className="homeproduct">
                        <Headings heading="Featured Products" tagline="High-performance solutions" />
                    </div>

                    <div className='text-end mb-3'>
                        <Button btnname="View Products" Link="/industries" />
                    </div>
                    <div className="row justify-content-between g-4">
                        {products.map((product, index) => (
                            <div className="col-lg-2 col-md-4 col-6" key={index} data-aos="fade-right" data-aos-duration="1000" data-aos-delay={product.delay}>
                                <div className="product-card">
                                    <img src={product.image} alt={product.name} />
                                    <h5 className='title-line pt-3 h6'>{product.name}</h5>
                                    <p>{product.Quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeProduct