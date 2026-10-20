import React, { useCallback, useEffect, useRef, useState } from "react";
import { services } from "./ServiceData";
import ServiceCard from "../Components/Card/ServiceCard";
import AnimateOnScroll from "../Components/Hooks/AnimateOnScroll";

const AUTOPLAY_MS = 3500;

function Homesercicesections() {
    const trackRef = useRef(null);
    const pausedRef = useRef(false);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    // width of one slide + gap, used for the arrows and autoplay
    const stepSize = () => {
        const track = trackRef.current;
        const first = track?.firstElementChild;
        if (!first) return 0;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return first.getBoundingClientRect().width + gap;
    };

    const updateButtons = useCallback(() => {
        const t = trackRef.current;
        if (!t) return;
        setCanPrev(t.scrollLeft > 4);
        setCanNext(t.scrollLeft + t.clientWidth < t.scrollWidth - 4);
    }, []);

    const slide = (dir) => {
        const t = trackRef.current;
        if (t) t.scrollBy({ left: dir * stepSize(), behavior: "smooth" });
    };

    // autoplay: moves one card at a time, goes back to the start at the end
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setInterval(() => {
            const t = trackRef.current;
            if (!t || pausedRef.current) return;
            if (t.scrollLeft + t.clientWidth >= t.scrollWidth - 4) {
                t.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                t.scrollBy({ left: stepSize(), behavior: "smooth" });
            }
        }, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        updateButtons();
        window.addEventListener("resize", updateButtons);
        return () => window.removeEventListener("resize", updateButtons);
    }, [updateButtons]);

    return (
        <>
            <style>{`
                .svc-slider{position:relative}
                .svc-track{display:flex;gap:24px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:8px 4px 16px;-ms-overflow-style:none;scrollbar-width:none;text-align:left}
                .svc-track::-webkit-scrollbar{display:none}
                .svc-slide{flex:0 0 calc((100% - 48px) / 3);scroll-snap-align:start;display:flex}
                .svc-slide > *{width:100%}
                .svc-nav{display:flex;justify-content:center;gap:14px;margin-top:20px}
                .svc-btn{width:48px;height:48px;border-radius:50%;border:1px solid var(--accent-color,#4ca99d);background:transparent;color:var(--accent-color,#4ca99d);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s ease}
                .svc-btn:hover:not(:disabled){background:var(--accent-color,#4ca99d);color:#fff}
                .svc-btn:disabled{opacity:.35;cursor:not-allowed}
                .svc-btn:focus-visible{outline:3px solid var(--accent-color,#4ca99d);outline-offset:3px}
                @media (max-width:991px){.svc-slide{flex-basis:calc((100% - 24px) / 2)}}
                @media (max-width:640px){.svc-slide{flex-basis:88%}}
            `}</style>

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
                                    Digital Solutions That Drive Real Results
                                </h2>
                            </AnimateOnScroll>
                        </div>

                        <div
                            className="card-service-wrapper svc-slider"
                            onMouseEnter={() => (pausedRef.current = true)}
                            onMouseLeave={() => (pausedRef.current = false)}
                            onFocus={() => (pausedRef.current = true)}
                            onBlur={() => (pausedRef.current = false)}
                            onTouchStart={() => (pausedRef.current = true)}
                            onTouchEnd={() => setTimeout(() => (pausedRef.current = false), 2500)}
                        >
                            <div className="svc-track" ref={trackRef} onScroll={updateButtons}>
                                {services.map((item) => (
                                    <div className="svc-slide" key={item.id}>
                                        <ServiceCard
                                            icon={item.icon}
                                            image={item.image}
                                            title={item.title}
                                            content={item.content}
                                            speed={item.speed}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="svc-nav">
                                <button type="button" className="svc-btn" aria-label="Previous services" onClick={() => slide(-1)} disabled={!canPrev}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>
                                <button type="button" className="svc-btn" aria-label="Next services" onClick={() => slide(1)} disabled={!canNext}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className="service-link-footer">
                            <p>
                                {/* Need a custom solution? Let&apos;s create a strategy tailored for your business. */}
                                Looking for a personalized solution? Let's develop a strategy that's specific to your business.

                                <a href="/contact"> Get a Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homesercicesections;