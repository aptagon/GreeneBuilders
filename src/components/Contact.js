import icon from '../assets/images/tick.png';
import ContactForm from "./ContactForm";
export default function Contact () {
    return (
        <>
            <div className="container-fluid contact" id="contact-section">
                <h3 className="text-center">Leading Way In Building & Civil Construction</h3>
                <ul className="text-center">
                    <li><img src={icon} alt="" />Professional Staff</li>
                    <li><img src={icon} alt="" />100% Satisfaction</li>
                    <li><img src={icon} alt="" />Accurate Testing</li>
                    <li><img src={icon} alt="" />Transparent Pricing</li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 qoute-form">
                            <ContactForm />
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="contact-info">
                                <h5>Contact Info</h5>
                                <h6>Our Location</h6>
                                <p>
                                    18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang Kav. 18,
                                     Jakarta Selatan ,12520
                                </p>
                                <h6>Quick Contact</h6>
                                <p>Call Us : (+62) 877-2469-7246<br/>
                                    Email   : contact@jhontraktor.co
                                </p>
                                <h6>Opening Hours</h6>
                                <p>Monday - Friday<br/>
                                09:00 AM - 06:00 PM
                                </p>
                                <p className="question">Do You Have Any Question, Just Contact Us To Get Help!</p>
                                <button type="submit" className="btn btn-default w-100 mt-3">Contact Us</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}