import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function HomeContact() {
    return (
        <div>
            <section className="text-light p-md-5 p-3 text-center homecta">
                <div className="container">
                    <div className="">

                        <div className="">
                            <h2>Ready to work with a reliable manufacturing partner?</h2>
                            <p>Let’s discuss your requirements and provide the perfect solution.</p>
                        </div>

                        <div className="cta-buttons">
                            <a href="tel:9687523999" className="cta-btn btn btn-primary">
                                <FaPhoneAlt /> Call Us
                            </a>

                            <a href="mailto:zeevachemical@gmail.com" className="cta-btn btn btn-warning text-light email">
                                <MdEmail /> Request Quote
                            </a>

                            <a
                                href="https://wa.me/9687523999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp btn btn-success cta-btn"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeContact