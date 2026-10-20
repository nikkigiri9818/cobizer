

import React from "react";

const footerContactCss = `
.footer-contact-container .contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
}

.footer-contact-container .contact-list li {
  margin: 0;
  padding: 0;
  text-align: center;
}

.footer-contact-container .contact-list li a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}

.footer-contact-container h5 {
  text-align: center;
}

.footer-contact-container .social-container {
  justify-content: center;
}

.footer-contact-container .d-flex.flex-column {
  align-items: center;
}

@media (min-width: 992px) {
  .footer-contact-container .contact-list,
  .footer-contact-container .contact-list li,
  .footer-contact-container h5 {
    text-align: left;
  }

  .footer-contact-container .d-flex.flex-column {
    align-items: flex-start;
  }

  .footer-contact-container .social-container {
    justify-content: flex-start;
  }
}
`;

const Footer = () => {
  return (
    <div className="section-footer">
      <style>{footerContactCss}</style>

      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      <a href="/">
                        <img
                          src="/assets/images/marko-logo.png"
                          alt="Logo"
                          className="site-logo img-fluid"
                        />
                      </a>
                    </div>
                    <h4>Driving Digital Growth with Innovation & Strategy</h4>
                    <p>
                      Cobizzer is a Digital Marketing agency that specializes in
                      helping Businesses of all sizes to increase their online
                      visibility and grow their brand.
                    </p>
                  </div>
                </div>

                <div className="col col-lg-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/service">Service</a></li>
                      <li><a href="/case_studies">Case Studies</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-services-container">
                    <h5>Services</h5>
                    <ul className="footer-list">
                      <li><a href="/social-media-marketing-company-in-jaipur">Social Media Marketing</a></li>
                      <li><a href="/seo-services-in-jaipur">SEO Optimization</a></li>
                      <li><a href="/ppc-management">PPC Advertising</a></li>
                      <li><a href="/graphics-designing-company-in-jaipur">Graphics Designing</a></li>
                      <li><a href="/web-development-company-in-jaipur">Web Development</a></li>
                      <li><a href="/performance-marketing-company-in-jaipur">Performance Marketing</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-contact-container">
                    <h5>Contact Info</h5>
                    <ul className="contact-list">
                      <li>
                        <a className="header-num" href="tel:7220018888">
                          +91- 7220018888
                        </a>
                      </li>
                      <li>
                        <a className="header-num" href="mailto:info@cobizzer.com">
                          info@cobizzer.com
                        </a>
                      </li>
                      <li>
                        1st Floor, 104/72, Vijay Path, Sector 122, Sector 101,
                        Mansarovar, Jaipur, Rajasthan 302020
                      </li>
                    </ul>
                    <div className="d-flex flex-column gspace-1">
                      <h5>Social Media</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a href="https://www.facebook.com/profile.php?id=100092369057035" className="social-item">
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://www.youtube.com/@DigiRoket" className="social-item">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://www.instagram.com/cobizzerdigitalmarketing?igsh=MWpuMDZldzBkMzA4eg==" className="social-item">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="http://www.linkedin.com/in/deepak-khandelwal-432552139" className="social-item">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-content-spacer"></div>
            </div>

            <div className="copyright-container">
              <span className="copyright">© 2026 Cobizzer | All Rights Reserved.</span>
              <div className="d-flex flex-row gspace-2">
                <a href="#" className="legal-link">Terms of Service</a>
                <a href="#" className="legal-link">Privacy Policy</a>
              </div>
            </div>

            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;