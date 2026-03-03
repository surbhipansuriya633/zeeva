import { IoMdCheckboxOutline } from 'react-icons/io'
import { Headings, SmallHeadings } from '../HOC/Headings'
import { FaQuoteRight } from 'react-icons/fa'
import Slider from 'react-slick';

function HomeAbout() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        swipe: true,
        arrows: false,
        pauseOnHover: false,
    };

    let aboutimage = [
        {
            image: require("../Assets/Image/Pro_Advancelubricantspray-removebg-preview.png")
        },

        {
            image: require("../Assets/Image/Pro_Chain_Lube_Spray-removebg-preview.png")
        },

        {
            image: require("../Assets/Image/Pro_ColorSpray-removebg-preview.png")
        },
        {
            image: require("../Assets/Image/Pro_SiliconSpray-removebg-preview.png")
        },
        {
            image: require("../Assets/Image/Pro_StainLiftingSpray-removebg-preview.png")
        },
        {
            image: require("../Assets/Image/Pro_Advancelubricantspray-removebg-preview.png")
        },

    ]
    return (
        <div className='container mt-4'>
            <div className='row align-items-end justify-content-center'>
                <div className="col-12 col-md-8 col-lg-6 ">
                    <div style={{ width: "72%" }} className="test-shine" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
                        <img
                            src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0002.jpg')}
                            alt=""
                            className="img-fluid w-100 h-100"
                        />
                    </div>

                    <div className="p-0 bg-white aboutslide_sec overflow-hidden">
                        <div className="aboutslider  ms-auto  m-0  overflow-hidden" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                            <Slider {...settings} className="p-0 m-0  overflow-hidden border border-5 border-white bg-light">
                                {aboutimage?.map((x, i) => {
                                    console.log(x);
                                    return (
                                        <>
                                            <div className="slider_imageaboutus mx-1 bg-light border border-5 border-dark">
                                                <img src={x.image} alt="" className="img-fluid w-100 h-100 object-fit-contain" />
                                            </div>
                                        </>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 pt-4 d-flex flex-column justify-content-between ps-md-0 ps-sm-3 ps-lg-5">
                    <div>

                        <div className='' >
                            <div className='jr_tittle'>
                                <Headings heading="About" tagline="ZEEVA CHEMICALS" />
                            </div>
                        </div>

                        <div className="pera py-3 kjh" data-aos="fade-left" data-aos-duration="1500">
                            Zeeva Chemicals was started with one clear goa, to make reliable aerosol spray products that actually work, every single
                            time. We are a manufacturing-focused company that supports brands, hospitals, distributors, and businesses with
                            well-made aerosol solutions
                        </div>

                        <SmallHeadings smheading="What defines Zeeva Chemicals" />
                        <div className="pt-1">
                            <div className="d-block d-lg-flex justify-content-between">
                                <div>
                                    <div className="d-flex  pt-2" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                                        <span className="pe-2 fs-5">
                                            <IoMdCheckboxOutline />
                                        </span>
                                        <div className="text-lowercase kjh">Strong focus on manufacturing excellence</div>
                                    </div>
                                    <div className="d-flex  pt-2" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                                        <span className="pe-2 fs-5">
                                            <IoMdCheckboxOutline />
                                        </span>
                                        <div className="text-lowercase kjh">Practical solutions built for real-world use</div>
                                    </div>
                                </div>
                                <div className="ps-lg-4 ps-0">
                                    <div className="d-flex  pt-2" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                                        <span className="pe-2 fs-5">
                                            <IoMdCheckboxOutline />
                                        </span>
                                        <div className="text-lowercase kjh">Flexible production for growing businesses</div>
                                    </div>
                                    <div className="d-flex  pt-2" data-aos="fade" data-aos-duration="1500" data-aos-delay="1000">
                                        <span className="pe-2 fs-5">
                                            <IoMdCheckboxOutline />
                                        </span>
                                        <div className="text-lowercase kjh">Long-term B2B mindset, not one-time supply</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row shadow m-0  mt-3">
                            <div className="col-3 p-0 m-0">
                                <div className="h-100 fs-1 text-white bg-black text-center d-flex align-items-center justify-content-center">
                                    <FaQuoteRight />
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="h-100 d-flex align-items-center py-4  pera fw-bold">
                                    "Focused on quality, safety and consistency.
                                    Supporting businesses across industries."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OLD CODE */}
                {/*
                 <div className='col-lg-4 col-md-5 col-sm-7  col-10' data-aos="fade-up" data-aos-duration="1000">
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0002.jpg')} alt="" className='img-fluid mb-4' />
                </div> 
                <div className='col-lg-7 col-md-7 col-sm-10'>
                    <div className="content-wrapper">
                        <Headings heading="About" tagline="ZEEVA CHEMICALS" />

                        <p className="description" data-aos="fade-left" data-aos-duration="1500">
                            Zeeva Chemicals was started with one clear goa, to make reliable aerosol spray products that actually work, every single
                            time. We are a manufacturing-focused company that supports brands, hospitals, distributors, and businesses with
                            well-made aerosol solutions
                        </p>

                        <SmallHeadings smheading="What defines Zeeva Chemicals" />
                        <div className="features">
                            <ul style={{ fontSize: '14px' }}>
                                <li data-aos="fade" data-aos-duration="1500">Strong focus on manufacturing excellence</li>
                                <li data-aos="fade" data-aos-duration="1500">Practical solutions built for real-world use</li>
                                <li data-aos="fade" data-aos-duration="1500">Flexible production for growing businesses</li>
                                <li data-aos="fade" data-aos-duration="1500">Long-term B2B mindset, not one-time supply</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default HomeAbout