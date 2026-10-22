import React, { useEffect, useRef, useState } from "react";
import { digitalSteps } from "../../Data/DigitalProcessData";

// icon agar image path ho to <img>, agar Font Awesome class ho to <i>
const renderIcon = (icon) => {
    if (React.isValidElement(icon)) return icon;
    if (typeof icon === "string" && /(^|\s)fa-/.test(icon)) {
        return <i className={icon}></i>;
    }
    return <img src={icon} alt="" loading="lazy" />;
};

const DigitalProcessSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`section cbz-dp ${visible ? "is-visible" : ""}`}
            ref={sectionRef}
        >
            <style>{`
                .cbz-dp{
                    position: relative;
                    overflow: hidden;
                }
                .cbz-dp::before,
                .cbz-dp::after{
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(110px);
                    pointer-events: none;
                    z-index: 0;
                }
                .cbz-dp::before{
                    width: 360px; height: 360px;
                    top: -110px; left: -90px;
                    background: var(--accent-color-6);
                    opacity: .42;
                    animation: cbzDpFloat 14s ease-in-out infinite;
                }
                .cbz-dp::after{
                    width: 320px; height: 320px;
                    bottom: -130px; right: -80px;
                    background: var(--accent-color-6);
                    opacity: .3;
                    animation: cbzDpFloat 17s ease-in-out infinite reverse;
                }
                .cbz-dp .hero-container{
                    position: relative;
                    z-index: 1;
                }

                /* ---------- Header ---------- */
                .cbz-dp-head{
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                    gap: 40px;
                    align-items: end;
                    margin-bottom: 56px;
                }

                .cbz-dp-badge{
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    width: fit-content;
                    padding: 8px 18px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-6);
                    background: var(--accent-color-6);
                    color: var(--accent-color);
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: .4px;
                    text-transform: uppercase;
                }
                .cbz-dp-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzDpPulse 2s infinite;
                }

                .cbz-dp-title{
                    margin: 16px 0 0;
                    font-size: clamp(32px, 4.4vw, 58px);
                    line-height: 1.12;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .cbz-dp-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzDpShine 6s linear infinite;
                }

                .cbz-dp-side{
                    display: flex;
                    flex-direction: column;
                    gap: 22px;
                    align-items: flex-start;
                }
                .cbz-dp-side p{
                    margin: 0;
                    font-size: 17px;
                    line-height: 1.7;
                    color: var(--text-color);
                }
                .cbz-dp-cta{
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 8px 8px 24px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--accent-color-4);
                    color: var(--primary);
                    font-weight: 700;
                    transition: all .35s ease;
                }
                .cbz-dp-cta span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    color: #fff;
                    transition: transform .35s ease;
                }
                .cbz-dp-cta:hover{
                    border-color: var(--accent-color);
                    box-shadow: var(--box-shadow-bottom-right);
                    color: var(--accent-color);
                }
                .cbz-dp-cta:hover span{
                    transform: translateX(4px) rotate(-45deg);
                }

                /* ---------- Steps wrapper ---------- */
                .cbz-dp-wrap{
                    position: relative;
                    border-radius: 32px;
                    padding: 2px;
                    background: linear-gradient(180deg, var(--accent-color) 0%, var(--accent-color-3) 45%, transparent 100%);
                    overflow: hidden;
                }
                .cbz-dp-box{
                    position: relative;
                    border-radius: 30px;
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
                    padding: 44px 16px 36px;
                    overflow: hidden;
                }
                .cbz-dp-box::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(var(--accent-color-6) 1px, transparent 1px),
                        linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
                    background-size: 48px 48px;
                    opacity: .18;
                    -webkit-mask-image: radial-gradient(ellipse at center, #000 15%, transparent 75%);
                    mask-image: radial-gradient(ellipse at center, #000 15%, transparent 75%);
                    pointer-events: none;
                }

                .cbz-dp-grid{
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                }

                /* connecting line (desktop) */
                .cbz-dp-line{
                    position: absolute;
                    top: 28px;
                    left: 12.5%;
                    right: 12.5%;
                    height: 2px;
                    background: var(--accent-color-3);
                    border-radius: 2px;
                    z-index: 0;
                }
                .cbz-dp-line::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 2px;
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 2.2s cubic-bezier(.22,1,.36,1) .5s;
                }
                .cbz-dp.is-visible .cbz-dp-line::before{
                    transform: scaleX(1);
                }
                .cbz-dp-line::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 10px; height: 10px;
                    margin-top: -5px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 14px 4px var(--accent-color);
                    opacity: 0;
                }
                .cbz-dp.is-visible .cbz-dp-line::after{
                    animation: cbzDpTravel 4s ease-in-out 2.8s infinite;
                }

                /* ---------- Step card ---------- */
                .cbz-dp-card{
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 18px;
                    padding: 0 26px 18px;
                    transition: transform .4s ease;
                }
                /* divider between cards */
                .cbz-dp-card + .cbz-dp-card::before{
                    content: "";
                    position: absolute;
                    top: 12px; bottom: 12px;
                    left: 0;
                    width: 1px;
                    background: linear-gradient(180deg, transparent, var(--accent-color-6) 25%, var(--accent-color-6) 75%, transparent);
                }
                .cbz-dp-card:hover{
                    transform: translateY(-8px);
                }

                .cbz-dp-num{
                    position: relative;
                    width: 45px; height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    border: 2px solid var(--accent-color);
                    background: var(--secondary);
                    color: var(--accent-color);
                    font-size: 17px;
                    font-weight: 800;
                    transition: all .4s ease;
                }
                .cbz-dp-num::after{
                    content: "";
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    border: 1px solid var(--accent-color-6);
                    opacity: 0;
                    transform: scale(.8);
                    transition: all .4s ease;
                }
                .cbz-dp-card:hover .cbz-dp-num{
                    background: var(--accent-color);
                    color: #fff;
                    box-shadow: 0 0 0 6px var(--accent-color-6);
                }
                .cbz-dp-card:hover .cbz-dp-num::after{
                    opacity: 1;
                    transform: scale(1);
                }

                .cbz-dp-icon{
                    width: 84px; height: 84px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 26px;
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 75%);
                    border: 1px solid var(--accent-color-3);
                    box-shadow: var(--box-shadow-top-left);
                    color: var(--accent-color);
                    font-size: 34px;
                    transition: all .4s ease;
                }
                .cbz-dp-icon img{
                    width: 50px; height: 50px;
                    object-fit: contain;
                    /* purple icons -> teal (adjust -100deg to -130deg if needed) */
                    filter: hue-rotate(-115deg) saturate(1.1);
                }
                .cbz-dp-card:hover .cbz-dp-icon{
                    box-shadow: var(--box-shadow-bottom-right);
                    border-color: var(--accent-color);
                    transform: rotate(-6deg) scale(1.06);
                }

                .cbz-dp-card h4{
                    margin: 4px 0 0;
                    font-size: 21px;
                    line-height: 1.35;
                    color: var(--primary);
                    min-height: 2.7em; /* sab titles ek hi height par */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .cbz-dp-card p{
                    margin: 0;
                    font-size: 15.5px;
                    line-height: 1.7;
                    color: var(--text-color);
                }

                /* ---------- Reveal ---------- */
                .cbz-dp-r{
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-dp.is-visible .cbz-dp-r{
                    opacity: 1;
                    transform: none;
                }
                .cbz-dp.is-visible .cbz-dp-head > div:nth-child(2){ transition-delay: .15s; }
                .cbz-dp.is-visible .cbz-dp-wrap{ transition-delay: .25s; }

                /* cards ka stagger reveal (hover transform ke saath conflict na ho, isliye inner wrapper) */
                .cbz-dp-card-in{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 18px;
                    opacity: 0;
                    transform: translateY(34px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-dp.is-visible .cbz-dp-card-in{
                    opacity: 1;
                    transform: none;
                }
                .cbz-dp.is-visible .cbz-dp-card:nth-child(2) .cbz-dp-card-in{ transition-delay: .45s; }
                .cbz-dp.is-visible .cbz-dp-card:nth-child(3) .cbz-dp-card-in{ transition-delay: .65s; }
                .cbz-dp.is-visible .cbz-dp-card:nth-child(4) .cbz-dp-card-in{ transition-delay: .85s; }
                .cbz-dp.is-visible .cbz-dp-card:nth-child(5) .cbz-dp-card-in{ transition-delay: 1.05s; }
                .cbz-dp.is-visible .cbz-dp-card:nth-child(1) .cbz-dp-card-in{ transition-delay: .25s; }

                @keyframes cbzDpTravel{
                    0%{ left: 0; opacity: 0; }
                    10%{ opacity: 1; }
                    90%{ opacity: 1; }
                    100%{ left: 100%; opacity: 0; }
                }
                @keyframes cbzDpFloat{
                    0%,100%{ transform: translate(0,0); }
                    50%{ transform: translate(30px,-25px); }
                }
                @keyframes cbzDpShine{ to{ background-position: 200% center; } }
                @keyframes cbzDpPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }

                /* ---------- Responsive ---------- */
                @media (max-width: 991px){
                    .cbz-dp-head{ grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; }
                    .cbz-dp-grid{ grid-template-columns: repeat(2, 1fr); row-gap: 36px; }
                    .cbz-dp-line{ display: none; }
                    .cbz-dp-card:nth-child(odd)::before{ display: none; }
                    .cbz-dp-card:nth-child(n+3){
                        padding-top: 36px;
                    }
                    .cbz-dp-card:nth-child(n+3)::after{
                        content: "";
                        position: absolute;
                        top: 0; left: 12%; right: 12%;
                        height: 1px;
                        background: linear-gradient(90deg, transparent, var(--accent-color-6), transparent);
                    }
                }
                @media (max-width: 575px){
                    .cbz-dp-grid{ grid-template-columns: 1fr; row-gap: 0; }
                    .cbz-dp-box{ padding: 32px 8px 20px; }
                    .cbz-dp-card::before{ display: none; }
                    .cbz-dp-card + .cbz-dp-card{
                        margin-top: 32px;
                        padding-top: 32px;
                    }
                    .cbz-dp-card + .cbz-dp-card::after{
                        content: "";
                        position: absolute;
                        top: 0; left: 10%; right: 10%;
                        height: 1px;
                        background: linear-gradient(90deg, transparent, var(--accent-color-6), transparent);
                    }
                    .cbz-dp-card h4{ min-height: 0; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-dp-r, .cbz-dp-card-in{
                        opacity: 1 !important;
                        transform: none !important;
                        transition: none !important;
                    }
                    .cbz-dp::before, .cbz-dp::after, .cbz-dp-title .hl,
                    .cbz-dp-badge i, .cbz-dp-line::after{ animation: none; }
                    .cbz-dp-line::before{ transform: scaleX(1); transition: none; }
                }
            `}</style>

            <div className="hero-container">
                {/* ---------- Heading ---------- */}
                <div className="cbz-dp-head">
                    <div className="cbz-dp-r">
                        <span className="cbz-dp-badge">
                            <i></i> How it Works
                        </span>
                        <h2 className="cbz-dp-title">
                            Simple Steps to <span className="hl">Digital Success</span>
                        </h2>
                    </div>

                    <div className="cbz-dp-side cbz-dp-r">
                        <p>
                            Our streamlined process keeps your digital growth clear and
                            effective. From the first consultation to measurable results,
                            every step is focused on your business goals.
                        </p>
                        <a href="./contact" className="cbz-dp-cta">
                            Get Started Now
                            <span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                {/* ---------- Steps ---------- */}
                <div className="cbz-dp-wrap cbz-dp-r">
                    <div className="cbz-dp-box">
                        <div className="cbz-dp-grid">
                            <span className="cbz-dp-line" aria-hidden="true"></span>

                            {digitalSteps.map((item, index) => (
                                <div className="cbz-dp-card" key={index}>
                                    <div className="cbz-dp-card-in">
                                        <span className="cbz-dp-num">
                                            {String(item.step ?? index + 1).padStart(2, "0")}
                                        </span>
                                        <div className="cbz-dp-icon">{renderIcon(item.icon)}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalProcessSection;