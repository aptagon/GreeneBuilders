import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer () {
    return (
        <>
            <footer className="text-center text-lg-start footer">
                <section className="d-flex p-4 border-bottom container">
                    <div className="d-flex justify-content-left">
                        <a href="/" className="me-3"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                        <a href="/" className="me-3 text-reset"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                        <a href="/" className="me-3 text-reset"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                        <a href="/" className="text-reset"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                    </div>
                    <div className="me-5 d-lg-block copy-right">
                        <span>Copyright © 2024 Greene Builders, Inc. All Rights Reserved</span>
                    </div>
                </section>
            </footer>
        </>
    );
}