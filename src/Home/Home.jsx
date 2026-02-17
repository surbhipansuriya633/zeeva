import HOCcomp from '../HOC/HOCcomp'

function Home() {
    return (
        <div className='vh-100'>
            <img src={require('../Assets/Image/broucher_image/Zeeva Brochure final draft_pages-to-jpg-0002.jpg')} alt="" className='img-fluid' />
        </div>
    )
}

export default HOCcomp(Home);