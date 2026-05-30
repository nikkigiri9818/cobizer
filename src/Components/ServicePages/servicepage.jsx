import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection(){

    return(
        <>
           <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img">
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <img
                                        src="/assets/images/soicalm.jpg"
                                        alt="Expertise Image"
                                        className="img-fluid"
                                    />
                                </AnimateOnScroll>
                                <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <div className="card card-expertise">
                                                    <h4>Ready to Grow Your Social Media Presence?</h4>
                                                    <p>Connect with your audience through strategic social media marketing.</p>
                                                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                                        <a href="./contact">Start Your Campaign</a>
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
                                    <span>SOCIAL MEDIA MARKETING</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    Social Media That Converts
                                </h2>
                            </AnimateOnScroll>
                            <p>
                                At Cobizzer, we help brands grow across platforms like Instagram, Facebook, LinkedIn, and YouTube with creative content, targeted campaigns, and data-driven strategies. Our social media marketing solutions are designed to increase visibility, audience engagement, and conversions.
                            </p>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                    <h5>What We Offer</h5>
                                    <ul className="check-list">
                                        <li><a href="./single_services">Social Media Strategy</a></li>
                                        <li><a href="./single_services">Content Creation & Design</a></li>
                                        <li><a href="./single_services">Instagram Marketing</a></li>
                                        <li><a href="./single_services">Facebook Ad Campaigns</a></li>
                                        <li><a href="./single_services">Influencer Marketing</a></li>
                                        <li><a href="./single_services">Community Management</a></li>
                                    </ul>
                                </div>

                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise card-expertise-counter animate-box">
                                        <div className="d-flex flex-row gspace-2 align-items-center">
                                            <div className="d-flex flex-row align-items-center">
                                            <CounterOnScroll
                                                target={250}
                                                suffix="+"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                            </div>
                                            <h6>Successful Social Media Campaigns Delivered</h6>
                                        </div>
                                        <p>
                                           Helping businesses grow online through engaging and result-driven social media strategies.
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