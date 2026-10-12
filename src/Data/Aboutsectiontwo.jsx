import React, { useEffect, useRef, useState } from "react";

/* ---------- viewport mein aate hi ek baar true ---------- */
const useInView = (threshold = 0.2) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return undefined;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [threshold]);

    return [ref, inView];
};

/* ---------- scroll par fade-in wrapper (bahari import ki zaroorat nahi) ---------- */
const animOffsets = {
    fadeInUp: "translateY(40px)",
    fadeInDown: "translateY(-40px)",
    fadeInLeft: "translateX(-40px)",
    fadeInRight: "translateX(40px)",
};

const AnimateOnScroll = ({ children, animation = "fadeInUp", speed = "normal", delay = 0 }) => {
    const [ref, inView] = useInView(0.15);
    const duration = speed === "slow" ? 1.2 : speed === "fast" ? 0.5 : 0.85;

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : animOffsets[animation] || animOffsets.fadeInUp,
                transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

/* ---------- count-up number ---------- */
const CountUp = ({ target = 5, duration = 1800, className = "" }) => {
    const [ref, inView] = useInView(0.4);
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return undefined;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setValue(target);
            return undefined;
        }
        let raf = 0;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target, duration]);

    return (
        <span ref={ref} className={className}>
            {value}
        </span>
    );
};

const headingWords = ["Know", "the", "Team", "Behind", "Your", "Growth"];

const listOne = ["PPC & Paid Ads", "Brand Strategy", "Conversion Optimization"];
const listTwo = ["Performance Marketing", "Social Media Growth", "Content Marketing"];

const AboutSectionTwo = () => {
    const [headRef, headIn] = useInView(0.3);
    const [listRef, listIn] = useInView(0.25);
    const tiltRef = useRef(null);

    // image par halka 3D tilt
    const handleTilt = (e) => {
        const el = tiltRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    };
    const resetTilt = () => {
        const el = tiltRef.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
    };

    return (
        <div className="section cbz-ab">
            <style>{`
                .cbz-ab{
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                }

                /* ---------- background decoration ---------- */
                .cbz-ab-bg{
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    pointer-events: none;
                }
                .cbz-ab-bg .grid{
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(var(--accent-color-6) 1px, transparent 1px),
                        linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
                    background-size: 56px 56px;
                    opacity: .28;
                    -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 10%, transparent 70%);
                    mask-image: radial-gradient(ellipse at 50% 30%, #000 10%, transparent 70%);
                    animation: cbzAbGrid 24s linear infinite;
                }
                .cbz-ab-bg .blob{
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                }
                .cbz-ab-bg .b1{
                    width: 340px; height: 340px;
                    top: -120px; left: -80px;
                    background: var(--accent-color);
                    opacity: .16;
                    animation: cbzAbFloat 14s ease-in-out infinite;
                }
                .cbz-ab-bg .b2{
                    width: 300px; height: 300px;
                    bottom: -120px; right: -60px;
                    background: #38BDF8;
                    opacity: .14;
                    animation: cbzAbFloat 17s ease-in-out infinite reverse;
                }

                .hero-container{ position: relative; z-index: 1; }

                /* ---------- top heading ---------- */
                .cbz-ab-head{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 16px;
                    max-width: 780px;
                    margin: 0 auto 56px;
                    position: relative;
                    z-index: 1;
                }
                .cbz-ab-badge{
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 18px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-6);
                    background: var(--accent-color-6);
                    color: var(--accent-color);
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: .5px;
                    text-transform: uppercase;
                }
                .cbz-ab-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzAbPulse 2s infinite;
                }
                .cbz-ab-title{
                    margin: 0;
                    font-size: clamp(32px, 5vw, 58px);
                    line-height: 1.12;
                    letter-spacing: -1px;
                    color: var(--primary);
                }
                .cbz-ab-title .w{
                    display: inline-block;
                    overflow: hidden;
                    vertical-align: bottom;
                    padding-bottom: .08em;
                }
                .cbz-ab-title .w > span{
                    display: inline-block;
                    transform: translateY(110%) rotate(4deg);
                    opacity: 0;
                    transition: transform .8s cubic-bezier(.22,1,.36,1), opacity .8s ease;
                    transition-delay: calc(var(--i) * 90ms + 150ms);
                }
                .cbz-ab-head.in .cbz-ab-title .w > span{
                    transform: none;
                    opacity: 1;
                }
                .cbz-ab-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzAbShine 6s linear infinite;
                }
                .cbz-ab-line{
                    display: block;
                    width: 120px; height: 4px;
                    border-radius: 4px;
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4);
                    transform: scaleX(0);
                    transform-origin: center;
                    transition: transform 1s cubic-bezier(.22,1,.36,1) .9s;
                    position: relative;
                    overflow: hidden;
                }
                .cbz-ab-line::after{
                    content: "";
                    position: absolute;
                    top: 0; left: -40%;
                    width: 40%; height: 100%;
                    background: rgba(255,255,255,.7);
                    animation: cbzAbSlide 2.6s ease-in-out infinite 2s;
                }
                .cbz-ab-head.in .cbz-ab-line{ transform: scaleX(1); }
                .cbz-ab-sub{
                    margin: 0;
                    max-width: 620px;
                    opacity: 0;
                    transform: translateY(16px);
                    transition: opacity .9s ease 1.1s, transform .9s cubic-bezier(.22,1,.36,1) 1.1s;
                }
                .cbz-ab-head.in .cbz-ab-sub{ opacity: 1; transform: none; }

                /* ---------- image side ---------- */
                .cbz-ab-imgwrap{
                    position: relative;
                }
                .cbz-ab-tilt{
                    --rx: 0deg;
                    --ry: 0deg;
                    position: relative;
                    transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
                    transition: transform .5s cubic-bezier(.22,1,.36,1);
                    transform-style: preserve-3d;
                    border-radius: var(--global-border-radius);
                }
                .cbz-ab-tilt img{
                    display: block;
                    width: 100%;
                    border-radius: var(--global-border-radius);
                    position: relative;
                    z-index: 1;
                }
                /* image ke peeche ghoomta ring aur offset frame */
                .cbz-ab-frame{
                    position: absolute;
                    inset: 18px -18px -18px 18px;
                    border: 2px solid var(--accent-color-3);
                    border-radius: var(--global-border-radius);
                    z-index: 0;
                    pointer-events: none;
                    animation: cbzAbFrame 6s ease-in-out infinite;
                }
                .cbz-ab-ring{
                    position: absolute;
                    top: -40px; left: -40px;
                    width: 150px; height: 150px;
                    border-radius: 50%;
                    border: 1px dashed var(--accent-color);
                    opacity: .5;
                    z-index: 0;
                    pointer-events: none;
                    animation: cbzAbSpin 22s linear infinite;
                }
                .cbz-ab-ring::after{
                    content: "";
                    position: absolute;
                    top: 10%; left: 10%;
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    box-shadow: 0 0 14px 3px var(--accent-color);
                }
                .cbz-ab-dots{
                    position: absolute;
                    right: -26px; top: 40px;
                    width: 90px; height: 120px;
                    z-index: 0;
                    pointer-events: none;
                    background-image: radial-gradient(var(--accent-color) 2px, transparent 2px);
                    background-size: 18px 18px;
                    opacity: .5;
                    animation: cbzAbDots 5s ease-in-out infinite;
                }
                /* image par light sweep */
                .cbz-ab-tilt::after{
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    border-radius: var(--global-border-radius);
                    pointer-events: none;
                    background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.28) 50%, transparent 65%);
                    background-size: 250% 100%;
                    background-position: 150% 0;
                    animation: cbzAbImgSweep 6s ease-in-out infinite 1.5s;
                }

                /* experience card (translate use kiya taaki aapki positioning na toote) */
                .about-layout .card-about{
                    position: relative;
                    overflow: hidden;
                    animation: cbzAbBob 5s ease-in-out infinite;
                    transition: box-shadow .4s ease;
                }
                .about-layout .card-about::after{
                    content: "";
                    position: absolute;
                    top: 0; left: -60%;
                    width: 40%; height: 100%;
                    background: linear-gradient(100deg, transparent, rgba(255,255,255,.35), transparent);
                    transform: skewX(-18deg);
                    animation: cbzAbCardShine 4.5s ease-in-out infinite 1s;
                    pointer-events: none;
                }
                .about-layout .card-about:hover{
                    box-shadow: 0 18px 40px rgba(0,0,0,.18);
                }

                /* ---------- text side ---------- */
                .cbz-ab-text > p{
                    margin: 0;
                }
                .cbz-ab-reveal{
                    opacity: 0;
                    transform: translateY(22px);
                    transition: opacity .8s ease, transform .8s cubic-bezier(.22,1,.36,1);
                    transition-delay: var(--d, 0s);
                }
                .cbz-ab-in .cbz-ab-reveal{ opacity: 1; transform: none; }

                /* list items stagger */
                .cbz-ab-list li{
                    opacity: 0;
                    transform: translateX(-22px);
                    transition: opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1);
                    transition-delay: calc(var(--i) * 110ms + 300ms);
                }
                .cbz-ab-in .cbz-ab-list li{
                    opacity: 1;
                    transform: none;
                }
                .cbz-ab-list li a{
                    position: relative;
                    display: inline-block;
                    transition: color .3s ease, transform .3s ease;
                }
                .cbz-ab-list li a::after{
                    content: "";
                    position: absolute;
                    left: 0; bottom: -2px;
                    width: 100%; height: 2px;
                    background: var(--accent-color);
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform .4s cubic-bezier(.22,1,.36,1);
                }
                .cbz-ab-list li a:hover{
                    color: var(--accent-color);
                    transform: translateX(6px);
                }
                .cbz-ab-list li a:hover::after{
                    transform: scaleX(1);
                    transform-origin: left;
                }

                /* ---------- keyframes ---------- */
                @keyframes cbzAbGrid{ to{ background-position: 56px 56px; } }
                @keyframes cbzAbFloat{
                    0%,100%{ transform: translate(0,0) scale(1); }
                    50%{ transform: translate(28px,-22px) scale(1.1); }
                }
                @keyframes cbzAbPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }
                @keyframes cbzAbShine{ to{ background-position: 200% center; } }
                @keyframes cbzAbSlide{
                    0%{ left: -40%; }
                    60%,100%{ left: 140%; }
                }
                @keyframes cbzAbSpin{ to{ transform: rotate(360deg); } }
                @keyframes cbzAbFrame{
                    0%,100%{ translate: 0 0; }
                    50%{ translate: -8px -8px; }
                }
                @keyframes cbzAbDots{
                    0%,100%{ translate: 0 0; }
                    50%{ translate: 0 -14px; }
                }
                @keyframes cbzAbImgSweep{
                    0%{ background-position: 150% 0; }
                    45%,100%{ background-position: -50% 0; }
                }
                @keyframes cbzAbBob{
                    0%,100%{ translate: 0 0; }
                    50%{ translate: 0 -10px; }
                }
                @keyframes cbzAbCardShine{
                    0%{ left: -60%; }
                    50%,100%{ left: 160%; }
                }

                @media (max-width: 991px){
                    .cbz-ab-head{ margin-bottom: 40px; }
                    .cbz-ab-frame, .cbz-ab-dots{ display: none; }
                    .cbz-ab-ring{ width: 110px; height: 110px; top: -24px; left: -16px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-ab *, .cbz-ab *::before, .cbz-ab *::after{ animation: none !important; }
                    .cbz-ab-title .w > span,
                    .cbz-ab-sub,
                    .cbz-ab-reveal,
                    .cbz-ab-list li{ opacity: 1 !important; transform: none !important; transition: none !important; }
                    .cbz-ab-line{ transform: scaleX(1) !important; transition: none !important; }
                    .cbz-ab-tilt{ transform: none !important; }
                }
            `}</style>

            {/* background decoration */}
            <div className="cbz-ab-bg" aria-hidden="true">
                <span className="grid"></span>
                <span className="blob b1"></span>
                <span className="blob b2"></span>
            </div>

            <div className="hero-container">
                {/* ---------- TOP HEADING ---------- */}
                <div ref={headRef} className={`cbz-ab-head${headIn ? " in" : ""}`}>
                    <span className="cbz-ab-badge">
                        <i></i> About Cobizzer
                    </span>
                    <h2 className="cbz-ab-title" aria-label={headingWords.join(" ")}>
                        {headingWords.map((word, i) => (
                            <React.Fragment key={word + i}>
                                <span className="w" aria-hidden="true">
                                    <span
                                        className={i === headingWords.length - 1 ? "hl" : ""}
                                        style={{ "--i": i }}
                                    >
                                        {word}
                                    </span>
                                </span>{" "}
                            </React.Fragment>
                        ))}
                    </h2>
                    <span className="cbz-ab-line" aria-hidden="true"></span>
                    <p className="cbz-ab-sub">
                        Strategy, creativity and data come together here to turn your brand into
                        a growth story people notice.
                    </p>
                </div>

                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img cbz-ab-imgwrap">
                            <span className="cbz-ab-ring" aria-hidden="true"></span>
                            <span className="cbz-ab-dots" aria-hidden="true"></span>

                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div
                                    className="cbz-ab-tilt"
                                    ref={tiltRef}
                                    onMouseMove={handleTilt}
                                    onMouseLeave={resetTilt}
                                >
                                    <span className="cbz-ab-frame" aria-hidden="true"></span>
                                    <img
                                        src="/assets/images/about-us.jpg"
                                        alt="About Us Image"
                                        className="img-fluid"
                                    />
                                </div>
                            </AnimateOnScroll>

                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div className="card card-about">
                                                <div className="d-flex flex-row align-items-center">
                                                    <CountUp className="counter" target={5} />
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>5+ Years of Experience on Digital Marketing Services</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>

                    <div ref={listRef} className={`about-title cbz-ab-text${listIn ? " cbz-ab-in" : ""}`}>
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Who We Are &amp; What Drives Us</h2>
                            </AnimateOnScroll>

                            <p className="cbz-ab-reveal" style={{ "--d": "0.1s" }}>
                                At Cobizzer, we specialize in delivering result-driven digital marketing solutions
                                that help businesses grow, attract more customers, and strengthen their online presence.
                            </p>
                            <p className="cbz-ab-reveal" style={{ "--d": "0.25s" }}>
                                Get to know the passionate team behind the strategies, the values that
                                guide us, and the mission that fuels our growth.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list cbz-ab-list">
                                        {listOne.map((item, i) => (
                                            <li key={item} style={{ "--i": i }}>
                                                <a href="./single_services">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list cbz-ab-list">
                                        {listTwo.map((item, i) => (
                                            <li key={item} style={{ "--i": i + 3 }}>
                                                <a href="./single_services">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionTwo;