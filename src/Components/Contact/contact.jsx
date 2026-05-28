import React from "react";
import ContactForm from "../Form/ContactForm";

const ContactSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 g-5">
                <div className="col col-lg-5">
                    <div className="contact-title-wrapper">
                        <div className="card contact-title">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Feel Free to contact us</span>
                            </div>
                            <h2 className="title-heading">Get in Touch</h2>
                            <p>
                           Contact Cobizzer today and let's build a strategy that helps your business grow online.
                            </p>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-phone-volume accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Phone Number</span>
                                    <a className="header-num" href="tel:7220018888"><h5>+91- 7220018888</h5></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-envelope accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Email Address</span>
                                    <a className="header-num" href="mailto:info@cobizzer.com"><h5>info@cobizzer.com</h5></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-location-dot accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Office Address</span>
                                    <h5> 1st Floor, 104/72, Vijay Path, Sector 122, Sector 101,
                                            Mansarovar, Jaipur, Rajasthan 302020</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-7">
                    <div id="success-message" className="alert success hidden">
                        <span className="check-icon">
                            <i className="fa-solid fa-2xl fa-check"></i>
                        </span>
                        <p>Thank you! Form submitted successfully.</p>
                    </div>
                    <div id="error-message" className="alert error hidden">
                        <span className="cross-icon">
                            <i className="fa-solid fa-2xl fa-xmark"></i>
                        </span>
                        <p>Oops! Form submission failed. Please try again.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactSection;
