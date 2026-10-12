import React, { useEffect, useRef, useState } from "react";

const benefits = [
    "A clear review of your current online presence",
    "Practical ideas for SEO, ads, and social media",
    "A simple growth plan with no long-term pressure",
];

const bars = [
    { label: "Traffic", h: 46 },
    { label: "Leads", h: 68 },
    { label: "Sales", h: 92 },
];

function BlogCtaSection() {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
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
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // mouse spotlight
    const handleMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            className={`section cbz-bc ${visible ? "is-visible" : ""}`}
            ref={sectionRef}
        >
            <style>{`
                .cbz-bc{
                    position: relative;
                }

                /* gradient border wrapper */
                .cbz-bc-wrap{
                    position: relative;
                    padding: 2px;
                    border-radius: 36px;
                    background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-color-3) 40%, var(--accent-color-6) 100%);
                    overflow: hidden;
                }
                .cbz-bc-card{
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    align-items: center;
                    gap: 40px;
                    padding: 64px 56px;
                    border-radius: 34px;
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
                }

                /* background layers */
                .cbz-bc-grid{
                    position: absolute;
                    inset: 0;
                    z-index: -3;
                    background-image:
                        linear-gradient(var(--accent-color-6) 1px, transparent 1px),
                        linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
                    background-size: 46px 46px;
                    opacity: .3;
                    -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
                    mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
                    animation: cbzBcGrid 18s linear infinite;
                }
                .cbz-bc-blob{
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    z-index: -2;
                    pointer-events: none;
                }
                .cbz-bc-blob.b1{
                    width: 340px; height: 340px;
                    top: -130px; left: 4%;
                    background: var(--accent-color);
                    opacity: .28;
                    animation: cbzBcFloat 12s ease-in-out infinite;
                }
                .cbz-bc-blob.b2{
                    width: 300px; height: 300px;
                    bottom: -140px; right: 6%;
                    background: #38BDF8;
                    opacity: .2;
                    animation: cbzBcFloat 15s ease-in-out infinite reverse;
                }
                .cbz-bc-card::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: radial-gradient(420px circle at var(--mx) var(--my), var(--accent-color-6), transparent 60%);
                    opacity: 0;
                    transition: opacity .4s ease;
                    pointer-events: none;
                }
                .cbz-bc-card:hover::before{ opacity: 1; }
                .cbz-bc-card::after{
                    content: "";
                    position: absolute;
                    top: 0; left: -40%;
                    width: 40%; height: 100%;
                    z-index: -1;
                    background: linear-gradient(100deg, transparent, var(--accent-color-6), transparent);
                    transform: skewX(-18deg);
                    animation: cbzBcSweep 8s ease-in-out infinite;
                    pointer-events: none;
                }

                /* ---------- Left content ---------- */
                .cbz-bc-left{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 22px;
                }
                .cbz-bc-badge{
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
                    letter-spacing: .4px;
                    text-transform: uppercase;
                }
                .cbz-bc-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzBcPulse 2s infinite;
                }
                .cbz-bc-title{
                    margin: 0;
                    font-size: clamp(30px, 4vw, 52px);
                    line-height: 1.15;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .cbz-bc-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzBcShine 6s linear infinite;
                }
                .cbz-bc-text{
                    margin: 0;
                    font-size: 17px;
                    line-height: 1.7;
                    color: var(--text-color);
                    max-width: 520px;
                }

                .cbz-bc-list{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                .cbz-bc-list li{
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--primary);
                }
                .cbz-bc-list li span{
                    flex-shrink: 0;
                    width: 28px; height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: var(--accent-color-6);
                    color: var(--accent-color);
                    font-size: 12px;
                }

                .cbz-bc-actions{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 16px 22px;
                    margin-top: 6px;
                }
                .cbz-bc-btn{
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 8px 8px 28px;
                    border-radius: 100px;
                    background: linear-gradient(135deg, var(--accent-color), #5EEAD4);
                    color: #04201D;
                    font-size: 15px;
                    font-weight: 800;
                    transition: transform .3s ease, box-shadow .3s ease;
                }
                .cbz-bc-btn span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px; height: 42px;
                    border-radius: 50%;
                    background: #04201D;
                    color: #fff;
                    transition: transform .3s ease;
                }
                .cbz-bc-btn:hover{
                    transform: translateY(-3px);
                    box-shadow: 0 12px 26px var(--accent-color-6);
                    color: #04201D;
                }
                .cbz-bc-btn:hover span{ transform: translateX(4px) rotate(-45deg); }

                .cbz-bc-link{
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--primary);
                    transition: color .3s ease;
                }
                .cbz-bc-link i{ transition: transform .3s ease; color: var(--accent-color); }
                .cbz-bc-link:hover{ color: var(--accent-color); }
                .cbz-bc-link:hover i{ transform: translateX(5px); }

                /* ---------- Right visual ---------- */
                .cbz-bc-visual{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    padding: 30px 0;
                }
                .cbz-bc-panel{
                    position: relative;
                    width: 100%;
                    max-width: 380px;
                    padding: 26px 26px 22px;
                    border-radius: 28px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    box-shadow: 0 24px 50px rgba(0,0,0,.18), var(--box-shadow-bottom-right-wide);
                    animation: cbzBcBob 7s ease-in-out infinite;
                }
                .cbz-bc-panel-top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 22px;
                }
                .cbz-bc-panel-top strong{
                    font-size: 16px;
                    color: var(--primary);
                }
                .cbz-bc-dots{
                    display: flex;
                    gap: 6px;
                }
                .cbz-bc-dots i{
                    width: 9px; height: 9px;
                    border-radius: 50%;
                    background: var(--accent-color-6);
                }
                .cbz-bc-dots i:first-child{ background: var(--accent-color); }

                .cbz-bc-chart{
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 18px;
                    height: 190px;
                    padding: 0 6px;
                    border-bottom: 1px dashed var(--accent-color-6);
                }
                .cbz-bc-bar{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    height: 100%;
                    gap: 8px;
                }
                .cbz-bc-bar i{
                    display: block;
                    width: 100%;
                    max-width: 64px;
                    height: 0;
                    border-radius: 14px 14px 6px 6px;
                    background: linear-gradient(180deg, #5EEAD4, var(--accent-color));
                    box-shadow: 0 8px 20px var(--accent-color-6);
                    transition: height 1.4s cubic-bezier(.22,1,.36,1);
                }
                .cbz-bc.is-visible .cbz-bc-bar i{ height: var(--h); }
                .cbz-bc.is-visible .cbz-bc-bar:nth-child(1) i{ transition-delay: .5s; }
                .cbz-bc.is-visible .cbz-bc-bar:nth-child(2) i{ transition-delay: .7s; }
                .cbz-bc.is-visible .cbz-bc-bar:nth-child(3) i{ transition-delay: .9s; }

                .cbz-bc-labels{
                    display: flex;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 12px 6px 0;
                }
                .cbz-bc-labels span{
                    flex: 1;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--text-color);
                }

                /* floating chips */
                .cbz-bc-chip{
                    position: absolute;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 16px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    color: var(--primary);
                    font-size: 13.5px;
                    font-weight: 700;
                    box-shadow: 0 12px 30px rgba(0,0,0,.14);
                    animation: cbzBcBob 6s ease-in-out infinite;
                    white-space: nowrap;
                }
                .cbz-bc-chip i{ color: var(--accent-color); }
                .cbz-bc-chip.c1{ top: 0; left: -4%; animation-delay: -2s; }
                .cbz-bc-chip.c2{ bottom: 6px; right: -2%; animation-delay: -4s; }

                /* ---------- Reveal ---------- */
                .cbz-bc-r{
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-bc.is-visible .cbz-bc-r{
                    opacity: 1;
                    transform: none;
                }
                .cbz-bc.is-visible .cbz-bc-r:nth-child(1){ transition-delay: .1s; }
                .cbz-bc.is-visible .cbz-bc-r:nth-child(2){ transition-delay: .22s; }
                .cbz-bc.is-visible .cbz-bc-r:nth-child(3){ transition-delay: .34s; }
                .cbz-bc.is-visible .cbz-bc-r:nth-child(4){ transition-delay: .46s; }
                .cbz-bc.is-visible .cbz-bc-r:nth-child(5){ transition-delay: .58s; }
                .cbz-bc.is-visible .cbz-bc-visual.cbz-bc-r{ transition-delay: .3s; }

                @keyframes cbzBcGrid{ to{ background-position: 46px 46px; } }
                @keyframes cbzBcFloat{
                    0%,100%{ transform: translate(0,0); }
                    50%{ transform: translate(30px,-25px); }
                }
                @keyframes cbzBcBob{
                    0%,100%{ transform: translateY(0); }
                    50%{ transform: translateY(-12px); }
                }
                @keyframes cbzBcSweep{
                    0%{ left: -40%; }
                    55%,100%{ left: 140%; }
                }
                @keyframes cbzBcShine{ to{ background-position: 200% center; } }
                @keyframes cbzBcPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }

                @media (max-width: 991px){
                    .cbz-bc-card{
                        grid-template-columns: 1fr;
                        gap: 36px;
                        padding: 48px 32px;
                    }
                }
                @media (max-width: 575px){
                    .cbz-bc-wrap{ border-radius: 28px; }
                    .cbz-bc-card{ padding: 36px 20px; border-radius: 26px; }
                    .cbz-bc-chip.c1{ left: 0; }
                    .cbz-bc-chip.c2{ right: 0; }
                    .cbz-bc-chart{ height: 150px; }
                    .cbz-bc-btn{ width: 100%; justify-content: space-between; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-bc-r{ opacity: 1 !important; transform: none !important; transition: none !important; }
                    .cbz-bc-bar i{ height: var(--h) !important; transition: none !important; }
                    .cbz-bc-grid, .cbz-bc-blob, .cbz-bc-card::after, .cbz-bc-panel,
                    .cbz-bc-chip, .cbz-bc-title .hl, .cbz-bc-badge i{ animation: none; }
                }
            `}</style>

            <div className="hero-container">
                <div className="cbz-bc-wrap">
                    <div className="cbz-bc-card" ref={cardRef} onMouseMove={handleMove}>
                        <span className="cbz-bc-grid" aria-hidden="true"></span>
                        <span className="cbz-bc-blob b1" aria-hidden="true"></span>
                        <span className="cbz-bc-blob b2" aria-hidden="true"></span>

                        {/* ---------- Left ---------- */}
                        <div className="cbz-bc-left">
                            <span className="cbz-bc-badge cbz-bc-r">
                                <i></i> Free Strategy Call
                            </span>

                            <h2 className="cbz-bc-title cbz-bc-r">
                                Reading is great. <span className="hl">Results are better.</span>
                            </h2>

                            <p className="cbz-bc-text cbz-bc-r">
                                Want these strategies working for your business? Talk to the
                                Cobizzer team and get a free consultation tailored to your goals.
                            </p>

                            <ul className="cbz-bc-list cbz-bc-r">
                                {benefits.map((b) => (
                                    <li key={b}>
                                        <span><i className="fa-solid fa-check"></i></span>
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <div className="cbz-bc-actions cbz-bc-r">
                                <a href="./contact" className="cbz-bc-btn">
                                    Book a Free Call
                                    <span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </a>
                                <a href="./services" className="cbz-bc-link">
                                    View our services <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* ---------- Right visual ---------- */}
                        <div className="cbz-bc-visual cbz-bc-r" aria-hidden="true">
                            <span className="cbz-bc-chip c1">
                                <i className="fa-solid fa-magnifying-glass-chart"></i> SEO Growth
                            </span>

                            <div className="cbz-bc-panel">
                                <div className="cbz-bc-panel-top">
                                    <strong>Growth Overview</strong>
                                    <span className="cbz-bc-dots"><i></i><i></i><i></i></span>
                                </div>
                                <div className="cbz-bc-chart">
                                    {bars.map((b) => (
                                        <div className="cbz-bc-bar" key={b.label}>
                                            <i style={{ "--h": `${b.h}%` }}></i>
                                        </div>
                                    ))}
                                </div>
                                <div className="cbz-bc-labels">
                                    {bars.map((b) => (
                                        <span key={b.label}>{b.label}</span>
                                    ))}
                                </div>
                            </div>

                            <span className="cbz-bc-chip c2">
                                <i className="fa-solid fa-arrow-trend-up"></i> More Leads
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCtaSection;