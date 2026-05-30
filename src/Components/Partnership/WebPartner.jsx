import React from "react";
import { webpartnerships } from "../../Data/WebPartnerShip";

const WebPartnershipListSection = () => {
    return (
        <section className="web-showcase-section">
            <div className="hero-container">

                <div className="web-showcase-header">
                    <div className="sub-heading">
                        <i className="fa-regular fa-circle-dot"></i>
                        <span>Recent Projects</span>
                    </div>

                    <h2 className="title-heading">
                        Websites We've Crafted
                    </h2>

                    <p>
                        Explore some of our recent web development projects
                        built for performance, design, and growth.
                    </p>
                </div>

                <div className="web-showcase-grid">
                    {webpartnerships.map((item) => (
                        <div className="web-project-card" key={item.id}>

                            <div className="web-project-image">
                                <img
                                    src={item.logo}
                                    alt={item.title}
                                />
                            </div>

                            <div className="web-project-content">
                                <h4>{item.title}</h4>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="web-project-btn"
                                >
                                    Visit Website
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WebPartnershipListSection;