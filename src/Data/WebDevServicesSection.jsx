import React, { useEffect, useRef, useState } from "react";

const services = [
    {
        icon: "fa-solid fa-briefcase",
        title: "Business Websites",
        text: "Professional, fast websites that build trust and turn visitors into enquiries.",
        points: ["Custom design", "Mobile-first layout", "Lead capture forms"],
    },
    {
        icon: "fa-solid fa-cart-shopping",
        title: "E-commerce Stores",
        text: "Online stores with smooth checkout, payments, and product management built in.",
        points: ["Shopify & WooCommerce", "Secure payments", "Inventory ready"],
    },
    {
        icon: "fa-solid fa-bullseye",
        title: "Landing Pages",
        text: "High-converting single pages designed around one goal: getting you more leads.",
        points: ["Ad-campaign ready", "A/B test friendly", "Quick delivery"],
    },
    {
        icon: "fa-brands fa-wordpress",
        title: "WordPress & CMS",
        text: "Easy-to-manage websites where you can update content yourself, no coding needed.",
        points: ["Elementor / custom themes", "Blog & SEO setup", "Easy admin panel"],
    },
    {
        icon: "fa-solid fa-code",
        title: "Custom Web Apps",
        text: "Modern React and Next.js applications built for speed, scale, and unique features.",
        points: ["React / Next.js", "API integration", "Scalable code"],
    },
    {
        icon: "fa-solid fa-arrows-rotate",
        title: "Redesign & Maintenance",
        text: "Give your old website a fresh look and keep it secure, fast, and always up to date.",
        points: ["Speed optimization", "Security updates", "Ongoing support"],
    },
];

const techs = [
    "React", "Next.js", "WordPress", "Shopify", "WooCommerce",
    "Node.js", "Bootstrap", "Tailwind CSS", "Figma", "SEO-Ready",
];

function WebDevServicesSection() {
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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // har card par mouse ke saath chalne wali spotlight
    const handleMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            className={`section cbz-wd ${visible ? "is-visible" : ""}`}
            ref={sectionRef}
        >
            <style>{`
                .cbz-wd{
                    position: relative;
                    overflow: hidden;
                }
                .cbz-wd::before,
                .cbz-wd::after{
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(110px);
                    pointer-events: none;
                    z-index: 0;
                }
                .cbz-wd::before{
                    width: 380px; height: 380px;
                    top: -120px; right: -90px;
                    background: var(--accent-color-6);
                    opacity: .42;
                    animation: cbzWdFloat 14s ease-in-out infinite;
                }
                .cbz-wd::after{
                    width: 320px; height: 320px;
                    bottom: -140px; left: -80px;
                    background: var(--accent-color-6);
                    opacity: .3;
                    animation: cbzWdFloat 17s ease-in-out infinite reverse;
                }
                .cbz-wd .hero-container{
                    position: relative;
                    z-index: 1;
                }

                /* ---------- Heading ---------- */
                .cbz-wd-head{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 20px;
                    max-width: 780px;
                    margin: 0 auto 56px;
                }
                .cbz-wd-badge{
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
                .cbz-wd-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzWdPulse 2s infinite;
                }
                .cbz-wd-title{
                    margin: 0;
                    font-size: clamp(32px, 4.4vw, 58px);
                    line-height: 1.12;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .cbz-wd-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzWdShine 6s linear infinite;
                }
                .cbz-wd-intro{
                    margin: 0;
                    font-size: 17px;
                    line-height: 1.7;
                    color: var(--text-color);
                    max-width: 640px;
                }

                /* ---------- Cards ---------- */
                .cbz-wd-grid{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .cbz-wd-card{
                    --x: 50%;
                    --y: 50%;
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                    padding: 32px 28px 28px;
                    border-radius: 28px;
                    border: 1px solid var(--accent-color-3);
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
                    transition: transform .4s ease, border-color .4s ease, box-shadow .4s ease;
                }
                /* spotlight */
                .cbz-wd-card::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: radial-gradient(320px circle at var(--x) var(--y), var(--accent-color-6), transparent 65%);
                    opacity: 0;
                    transition: opacity .35s ease;
                }
                /* bottom accent line */
                .cbz-wd-card::after{
                    content: "";
                    position: absolute;
                    left: 0; bottom: 0;
                    width: 100%; height: 3px;
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform .5s ease;
                }
                .cbz-wd-card:hover{
                    transform: translateY(-10px);
                    border-color: var(--accent-color);
                    box-shadow: 0 20px 40px rgba(0,0,0,.2), var(--box-shadow-bottom-right-wide);
                }
                .cbz-wd-card:hover::before{ opacity: 1; }
                .cbz-wd-card:hover::after{ transform: scaleX(1); }

                .cbz-wd-top{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                }
                .cbz-wd-icon{
                    width: 68px; height: 68px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 22px;
                    background: var(--secondary);
                    border: 1px solid var(--accent-color-3);
                    box-shadow: var(--box-shadow-top-left);
                    color: var(--accent-color);
                    font-size: 28px;
                    transition: all .4s ease;
                }
                .cbz-wd-card:hover .cbz-wd-icon{
                    background: var(--accent-color);
                    color: #fff;
                    border-color: var(--accent-color);
                    transform: rotate(-8deg) scale(1.08);
                    box-shadow: var(--box-shadow-bottom-right);
                }
                .cbz-wd-num{
                    font-size: 44px;
                    font-weight: 800;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 1.5px var(--accent-color-6);
                    transition: -webkit-text-stroke-color .4s ease;
                }
                .cbz-wd-card:hover .cbz-wd-num{
                    -webkit-text-stroke-color: var(--accent-color);
                }

                .cbz-wd-card h4{
                    margin: 0;
                    font-size: 23px;
                    line-height: 1.3;
                    color: var(--primary);
                }
                .cbz-wd-card p{
                    margin: 0;
                    font-size: 15.5px;
                    line-height: 1.7;
                    color: var(--text-color);
                }

                .cbz-wd-points{
                    list-style: none;
                    margin: 4px 0 0;
                    padding: 18px 0 0;
                    border-top: 1px dashed var(--accent-color-6);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .cbz-wd-points li{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14.5px;
                    font-weight: 600;
                    color: var(--primary);
                }
                .cbz-wd-points li i{
                    color: var(--accent-color);
                    font-size: 14px;
                }

                /* ---------- Tech strip ---------- */
                .cbz-wd-tech{
                    margin-top: 56px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--accent-color-4);
                    overflow: hidden;
                    padding: 14px 0;
                    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
                }
                .cbz-wd-track{
                    display: flex;
                    width: max-content;
                    animation: cbzWdMarquee 32s linear infinite;
                }
                .cbz-wd-tech:hover .cbz-wd-track{ animation-play-state: paused; }
                .cbz-wd-track span{
                    display: inline-flex;
                    align-items: center;
                    gap: 14px;
                    padding-right: 14px;
                }
                .cbz-wd-pill{
                    padding: 8px 20px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-6);
                    background: var(--secondary);
                    color: var(--primary);
                    font-size: 14px;
                    font-weight: 700;
                    white-space: nowrap;
                    transition: all .3s ease;
                }
                .cbz-wd-pill:hover{
                    background: var(--accent-color);
                    border-color: var(--accent-color);
                    color: #fff;
                }

                /* ---------- CTA band ---------- */
                .cbz-wd-cta{
                    position: relative;
                    overflow: hidden;
                    margin-top: 40px;
                    padding: 34px 38px;
                    border-radius: 28px;
                    border: 1px solid var(--accent-color);
                    background: linear-gradient(120deg, var(--accent-color-6), var(--accent-color-4) 70%);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 28px;
                }
                .cbz-wd-cta::before{
                    content: "";
                    position: absolute;
                    top: 0; left: -40%;
                    width: 40%; height: 100%;
                    background: linear-gradient(100deg, transparent, var(--accent-color-6), transparent);
                    transform: skewX(-18deg);
                    animation: cbzWdSweep 7s ease-in-out infinite;
                    pointer-events: none;
                }
                .cbz-wd-cta-text{
                    position: relative;
                }
                .cbz-wd-cta h5{
                    margin: 0 0 6px;
                    font-size: clamp(22px, 2.6vw, 30px);
                    color: var(--primary);
                }
                .cbz-wd-cta p{
                    margin: 0;
                    font-size: 15.5px;
                    line-height: 1.6;
                    color: var(--text-color);
                }
                .cbz-wd-btn{
                    position: relative;
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 8px 8px 26px;
                    border-radius: 100px;
                    background: linear-gradient(135deg, var(--accent-color), #5EEAD4);
                    color: #04201D;
                    font-weight: 800;
                    transition: transform .3s ease, box-shadow .3s ease;
                }
                .cbz-wd-btn span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 42px; height: 42px;
                    border-radius: 50%;
                    background: #04201D;
                    color: #fff;
                    transition: transform .3s ease;
                }
                .cbz-wd-btn:hover{
                    transform: translateY(-3px);
                    box-shadow: 0 12px 26px var(--accent-color-6);
                    color: #04201D;
                }
                .cbz-wd-btn:hover span{ transform: translateX(4px) rotate(-45deg); }

                /* ---------- Reveal ---------- */
                .cbz-wd-r,
                .cbz-wd-card,
                .cbz-wd-tech,
                .cbz-wd-cta{
                    opacity: 0;
                    transform: translateY(32px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1),
                                border-color .4s ease,
                                box-shadow .4s ease;
                }
                .cbz-wd.is-visible .cbz-wd-r,
                .cbz-wd.is-visible .cbz-wd-card,
                .cbz-wd.is-visible .cbz-wd-tech,
                .cbz-wd.is-visible .cbz-wd-cta{
                    opacity: 1;
                    transform: none;
                }
                .cbz-wd.is-visible .cbz-wd-card:hover{
                    transform: translateY(-10px);
                }
                ${services
                    .map(
                        (_, i) =>
                            `.cbz-wd.is-visible .cbz-wd-card:nth-child(${i + 1}){ transition-delay: ${0.15 + i * 0.09}s, ${0.15 + i * 0.09}s, 0s, 0s; }`
                    )
                    .join("\n")}
                .cbz-wd.is-visible .cbz-wd-card:hover{ transition-delay: 0s; }
                .cbz-wd.is-visible .cbz-wd-tech{ transition-delay: .8s; }
                .cbz-wd.is-visible .cbz-wd-cta{ transition-delay: .95s; }

                @keyframes cbzWdMarquee{ to{ transform: translateX(-50%); } }
                @keyframes cbzWdSweep{
                    0%{ left: -40%; }
                    55%,100%{ left: 140%; }
                }
                @keyframes cbzWdFloat{
                    0%,100%{ transform: translate(0,0); }
                    50%{ transform: translate(30px,-25px); }
                }
                @keyframes cbzWdShine{ to{ background-position: 200% center; } }
                @keyframes cbzWdPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }

                @media (max-width: 991px){
                    .cbz-wd-grid{ grid-template-columns: repeat(2, 1fr); }
                    .cbz-wd-head{ margin-bottom: 40px; }
                }
                @media (max-width: 767px){
                    .cbz-wd-cta{
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 28px 24px;
                    }
                    .cbz-wd-tech{ border-radius: 28px; }
                }
                @media (max-width: 575px){
                    .cbz-wd-grid{ grid-template-columns: 1fr; gap: 18px; }
                    .cbz-wd-card{ padding: 26px 22px 24px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-wd-r, .cbz-wd-card, .cbz-wd-tech, .cbz-wd-cta{
                        opacity: 1 !important;
                        transform: none !important;
                        transition: none !important;
                    }
                    .cbz-wd::before, .cbz-wd::after, .cbz-wd-track,
                    .cbz-wd-cta::before, .cbz-wd-title .hl, .cbz-wd-badge i{ animation: none; }
                }
            `}</style>

            <div className="hero-container">
                {/* ---------- Heading ---------- */}
                <div className="cbz-wd-head cbz-wd-r">
                    <span className="cbz-wd-badge">
                        <i></i> Web Development
                    </span>
                    <h2 className="cbz-wd-title">
                        Websites That Look Great and <span className="hl">Bring You Customers</span>
                    </h2>
                    <p className="cbz-wd-intro">
                        From simple business websites to full online stores, we design and
                        build fast, mobile-friendly, SEO-ready websites made to grow your
                        business, not just to look good.
                    </p>
                </div>

                {/* ---------- Service cards ---------- */}
                <div className="cbz-wd-grid">
                    {services.map((s, i) => (
                        <div className="cbz-wd-card" key={s.title} onMouseMove={handleMove}>
                            <div className="cbz-wd-top">
                                <div className="cbz-wd-icon">
                                    <i className={s.icon}></i>
                                </div>
                                <span className="cbz-wd-num">{String(i + 1).padStart(2, "0")}</span>
                            </div>
                            <h4>{s.title}</h4>
                            <p>{s.text}</p>
                            <ul className="cbz-wd-points">
                                {s.points.map((p) => (
                                    <li key={p}>
                                        <i className="fa-solid fa-circle-check"></i> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ---------- Tech strip ---------- */}
                <div className="cbz-wd-tech" aria-label="Technologies we use">
                    <div className="cbz-wd-track">
                        {[0, 1].map((n) => (
                            <span key={n}>
                                {[...techs, ...techs].map((t, i) => (
                                    <b className="cbz-wd-pill" key={i}>{t}</b>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ---------- CTA ---------- */}
                <div className="cbz-wd-cta">
                    <div className="cbz-wd-cta-text">
                        <h5>Ready to build your website?</h5>
                        <p>
                            Tell us about your business and get a free consultation with a
                            clear plan and quote.
                        </p>
                    </div>
                    <a href="./contact" className="cbz-wd-btn">
                        Get a Free Quote
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WebDevServicesSection;