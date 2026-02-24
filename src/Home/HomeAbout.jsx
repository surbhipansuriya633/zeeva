import { Headings, SmallHeadings } from '../HOC/Headings'

function HomeAbout() {
    return (
        <div className='container-lg mt-4'>
            <div className='row align-items-end justify-content-center'>
                <div className='col-lg-4 col-md-5 col-sm-7  col-10'>
                    <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0002.jpg')} alt="" className='img-fluid mb-4' />
                </div>
                <div className='col-lg-7 col-md-7 col-sm-10'>
                    <div className="content-wrapper">
                        <Headings heading="ABOUT" tagline="ZEEVA CHEMICALS" />

                        <p className="description">
                            Zeeva Chemicals was started with one clear goa, to make reliable aerosol spray products that actually work, every single
                            time. We are a manufacturing-focused company that supports brands, hospitals, distributors, and businesses with
                            well-made aerosol solutions
                        </p>
                        {/* <div className='fs-6 p-2 bg-black text-light'>What defines Zeeva Chemicals</div> */}
                        <SmallHeadings smheading="What defines Zeeva Chemicals" />
                        <div className="features">
                            <ul style={{ fontSize: '14px' }}>
                                <li>Strong focus on manufacturing excellence</li>
                                <li>Practical solutions built for real-world use</li>
                                <li>Flexible production for growing businesses</li>
                                <li>Long-term B2B mindset, not one-time supply</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout