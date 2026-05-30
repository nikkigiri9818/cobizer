import React from "react";
import { SocialMedia } from "../../Data/SocialMediaData";
import ServiceCard from "../Card/SocialMediaCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceSection(){

    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">    
                                <div className="sub-heading align-self-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Core Services</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h2 className="title-heading heading-container heading-container-medium">
                                    Our Social Media Services Include
                                </h2>
                            </AnimateOnScroll>
                        </div>
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                {SocialMedia.map((item) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard 
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.content}
                                            speed={item.speed}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="service-link-footer">
                            <p>
                                Need a custom solution? Let&apos;s create a strategy tailored for your business.
                                <a href="./contact"> Get a Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSection;