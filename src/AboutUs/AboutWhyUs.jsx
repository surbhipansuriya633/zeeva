import { HeadingsDark } from "../HOC/Headings";
import { BsBullseye, BsTools, BsLayers, BsPeople } from "react-icons/bs";

function AboutWhyUs() {
    const features = [
        {
            icon: <BsBullseye />,
            title: "Manufacturing Excellence",
            desc: "Precision production with strict quality control."
        },
        {
            icon: <BsTools />,
            title: "Practical Solutions",
            desc: "Products designed for real-world performance."
        },
        {
            icon: <BsLayers />,
            title: "Flexible Production",
            desc: "Scalable manufacturing for growing businesses."
        },
        {
            icon: <BsPeople />,
            title: "Long-Term Partnerships",
            desc: "We build relationships, not one-time supply."
        }
    ];

    return (
        <div>
            <section className="why-section">
                <div className="container-lg">
                    <HeadingsDark heading='Why Choose' tagline='Zeeva Chemical LLP' />
                    <div className="row p-0 me-0">
                        {features.map((item, index) => (
                            <div className="col-md-3 col-sm-6 my-md-0 my-1" key={index}>
                                <div className="why-card">
                                    <div className="why-icon">{item.icon}</div>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutWhyUs