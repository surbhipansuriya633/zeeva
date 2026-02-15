import Header from './Header'
import Footer from './Footer'

function HOCcomp(Content) {

    function hoccomponent() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
    return hoccomponent
}


export default HOCcomp