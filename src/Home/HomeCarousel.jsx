import { useEffect, useState } from "react";

const slides = [
    {
        title: "Zinc Spray",
        desc: "Advanced Anti-Rust Protection",
        // img: require('../Assets/Image/carousel1.jpg')
        img: "https://5.imimg.com/data5/SELLER/Default/2026/1/575951549/OU/LC/JN/256033009/zinc-metal-spray.jpg"
    },
    {
        title: "Advance Lubricant",
        desc: "Smooth Mechanical Movement",
        // img: require('../Assets/Image/carousel2.jpg')
        img: "https://5.imimg.com/data5/SELLER/Default/2026/1/576441571/PV/GI/TQ/256033009/lubricant-spray-1-500x500.png"
    },
    {
        title: "Chain Lube",
        desc: "Smooth Mechanical Movement",
        // img: require('../Assets/Image/carousel2.jpg')
        img: "https://5.imimg.com/data5/SELLER/Default/2021/9/JA/ON/RL/12840106/img-20210516-wa0057-250x250.jpg"
    },
    {
        title: "Silicone Spray",
        desc: "Water Resistant Protection",
        // img: require('../Assets/Image/carousel1.jpg')
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i003Ebu87xi55Xm062Io_VfOCNZJYLcCOg&s"
    },
    {
        title: "Color Spray",
        desc: "Smooth & Glossy Finish",
        // img: require('../Assets/Image/carousel2.jpg')
        img: "https://5.imimg.com/data5/SELLER/Default/2026/1/575932827/GN/XW/CE/256033009/1-3-500x500.jpg"
    },
    {
        title: "Stain Lifting",
        desc: "Smooth & Glossy Finish",
        // img: require('../Assets/Image/carousel2.jpg')
        img: "https://img.youtube.com/vi/7iHWa6mHJFk/0.jpg"
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
                style={{ filter: " brightness(50%)" }}
                className={`product current ${animate ? "fadeOut" : ""}`}
                alt=""
            />

            <img
                src={slides[next].img}
                style={{ filter: " brightness(50%)" }}
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