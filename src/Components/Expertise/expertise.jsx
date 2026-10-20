import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-lg-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <img
                    src="/assets/images/cobizzer-home.jpg"
                    alt="Expertise Image"
                    className="img-fluid"
                  />
                </AnimateOnScroll>
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <AnimateOnScroll animation="fadeInDown" speed="normal">
                        <div className="card card-expertise">
                          <h4>Ready to Grow Your Digital Value?</h4>
                          <p>
                            Let's develop a custom method that aligns with your business plans.

                          </p>
                          <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                            <a href="./contact">Get Free Consultation</a>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>WHO WE ARE</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Top Digital Marketing Agency in Jaipur
                </h2>
              </AnimateOnScroll>
              <p>
               Cobizzer is a results driven Digital Marketing Agency in Jaipur that is dedicated to helping businesses grow online. We are one of the trusted digital marketing businesses in Jaipur where our specialties include SEO, social media marketing, paid advertising and website development. Our team develops plans to convert website visitors into loyal customers.

              </p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What We Do Best</h5>
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Performance Marketing</a>
                    </li>
                    <li>
                      <a href="./single_services">Social Media Growth</a>
                    </li>
                    <li>
                      <a href="./single_services">Content Marketing</a>
                    </li>
                    <li>
                      <a href="./single_services">PPC & Paid Ads</a>
                    </li>
                    <li>
                      <a href="./single_services">Brand Strategy</a>
                    </li>
                    <li>
                      <a href="./single_services">Conversion Optimization</a>
                    </li>
                  </ul>
                </div>

                <AnimateOnScroll animation="fadeInUp">
                  <div className="card card-expertise card-expertise-counter animate-box">
                    <div className="d-flex flex-row gspace-2 align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <CounterOnScroll
                          target={5}
                          suffix="+"
                          counterClassName="counter"
                          suffixClassName="counter-detail"
                        />
                      </div>
                      <h6>Years of Experience on Digital Marketing Company in Jaipur</h6>
                    </div>
                    <p>
                     Growing businesses in India with useful digital marketing services. As a top Digital Marketing Agency in Jaipur, we bring our experience and knowledge to craft campaigns that deliver helpful business results

                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertiseSection;
