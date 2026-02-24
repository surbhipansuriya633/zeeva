import { useEffect, useState } from "react";

const slides = [
    {
        title: "Zinc Spray",
        desc: "Advanced Anti-Rust Protection",
        img: require('../Assets/Image/carousel1.jpg')
    },
    {
        title: "Lubricant Spray",
        desc: "Smooth Mechanical Movement",
        img: require('../Assets/Image/carousel2.jpg')
    },
    {
        title: "Silicone Spray",
        desc: "Water Resistant Protection",
        img: require('../Assets/Image/carousel1.jpg')
    },
    {
        title: "Color Spray",
        desc: "Smooth & Glossy Finish",
        img: require('../Assets/Image/carousel2.jpg')
    }
];
function HomeCarousel() {
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(1);
    const [animate, setAnimate] = useState(false);
    const [shine, setShine] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimate(true);
            setShine(true);

            setTimeout(() => {
                setCurrent(next);
                setNext((next + 1) % slides.length);
                setAnimate(false);
                setShine(false);
            }, 1200); // wait for smooth fade
        }, 4500);

        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="hero">
            <div className={`mist ${animate ? "spray" : ""}`}></div>

            <img
                src={slides[current].img}
                className={`product current ${animate ? "fadeOut" : ""}`}
                alt=""
            />

            <img
                src={slides[next].img}
                className={`product next ${animate ? "fadeIn" : ""}`}
                alt=""
            />

            <h1 className={`title highlight-text ${shine ? "shine" : ""}`}>
                {slides[current].title}
            </h1>
        </div>
    );
}
//     return (
//         <div>
//             <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img src={require('../Assets/Image/carousel1.jpg')} class="d-block w-100" alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                         <img src={require('../Assets/Image/carousel2.jpg')} class="d-block w-100" alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                         <img src={require('../Assets/Image/carousel1.jpg')} class="d-block w-100" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default HomeCarousel