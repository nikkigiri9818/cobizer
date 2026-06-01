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
                                        src="/assets/images/seo.jpg"
                                        alt="Expertise Image"
                                        className="img-fluid"
                                    />
                                </AnimateOnScroll>
                                <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <div className="card card-expertise">
                                                    <h4>Ready to Rank Higher on Google?</h4>
                                                        <p>Drive more organic traffic and generate quality leads with expert SEO strategies.</p>

                                                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                                            <a href="./contact">Get Free SEO Audit</a>
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
                                    <span>SEARCH ENGINE OPTIMIZATION</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    SEO Strategies That Drive Results
                                </h2>
                            </AnimateOnScroll>
                                <p>
                                    At Cobizzer, we help businesses improve their online visibility through
                                    data-driven SEO strategies. From keyword research and on-page optimization
                                    to technical SEO and link building, our team focuses on increasing search
                                    rankings, driving organic traffic, and generating qualified leads that help
                                    your business grow sustainably.
                                </p>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                        <h5>What We Offer</h5>
                                        <ul className="check-list">
                                            <li><a href="./single_services">Keyword Research & Strategy</a></li>
                                            <li><a href="./single_services">On-Page SEO Optimization</a></li>
                                            <li><a href="./single_services">Technical SEO Audits</a></li>
                                            <li><a href="./single_services">Link Building & Outreach</a></li>
                                            <li><a href="./single_services">Local SEO Services</a></li>
                                            <li><a href="./single_services">SEO Performance Reporting</a></li>
                                        </ul>
                                </div>

                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise card-expertise-counter animate-box">
                                        <div className="d-flex flex-row gspace-2 align-items-center">
                                            <div className="d-flex flex-row align-items-center">
                                            <CounterOnScroll
                                                target={500}
                                                suffix="+"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                                />
                                            </div>
                                            <h6>SEO Projects Successfully Optimized</h6>
                                        </div>
                                        <p>
                                          Helping businesses achieve higher rankings, increased organic traffic,
    and long-term growth through proven SEO techniques.
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