import React, { useEffect, useRef, useState } from "react";

const marqueeWords = ["INSIGHTS", "STRATEGIES", "TRENDS", "GROWTH", "LEADS", "RESULTS"];

function NewsletterSection() {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);

    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [shake, setShake] = useState(false);

    // reveal when section enters screen
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

    // mouse spotlight inside the card
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    const validateEmail = (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

    const showError = (msg) => {
        setErrorMessage(msg);
        setError(true);
        setSuccess(false);
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            showError("Please enter your email address");
            return;
        }
        if (!validateEmail(email)) {
            showError("Please enter a valid email address");
            return;
        }

        // TODO: yahan apni API / Mailchimp / Brevo call lagao
        setSuccess(true);
        setError(false);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <div
            className={`section cbz-nl ${visible ? "is-visible" : ""}`}
            ref={sectionRef}
        >
            <style>{`
                .cbz-nl{
                    position: relative;
                    overflow: hidden;
                }

                .cbz-nl-card{
                    --mx: 50%;
                    --my: 50%;
                    position: relative;
                    overflow: hidden;
                    isolation: isolate;
                    border-radius: 32px;
                    border: 1px solid var(--accent-color-3);
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 60%);
                    padding: 0 0 70px;
                    text-align: center;
                }

                /* grid pattern */
                .cbz-nl-grid{
                    position: absolute;
                    inset: 0;
                    z-index: -3;
                    background-image:
                        linear-gradient(var(--accent-color-6) 1px, transparent 1px),
                        linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
                    background-size: 46px 46px;
                    opacity: .35;
                    -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent 75%);
                    mask-image: radial-gradient(ellipse at center, #000 20%, transparent 75%);
                }

                /* animated glow blobs */
                .cbz-nl-blob{
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    z-index: -2;
                    pointer-events: none;
                }
                .cbz-nl-blob.b1{
                    width: 340px; height: 340px;
                    top: -120px; left: 6%;
                    background: var(--accent-color);
                    opacity: .28;
                    animation: cbzNlFloat 12s ease-in-out infinite;
                }
                .cbz-nl-blob.b2{
                    width: 300px; height: 300px;
                    bottom: -140px; right: 8%;
                    background: #38BDF8;
                    opacity: .2;
                    animation: cbzNlFloat 15s ease-in-out infinite reverse;
                }

                /* mouse spotlight */
                .cbz-nl-card::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: radial-gradient(420px circle at var(--mx) var(--my), var(--accent-color-6), transparent 60%);
                    opacity: 0;
                    transition: opacity .4s ease;
                    pointer-events: none;
                }
                .cbz-nl-card:hover::before{ opacity: 1; }

                /* ---------- scrolling strip (Adymize style) ---------- */
                .cbz-nl-marquee{
                    overflow: hidden;
                    border-bottom: 1px solid var(--accent-color-3);
                    background: var(--accent-color-6);
                    padding: 12px 0;
                    margin-bottom: 56px;
                }
                .cbz-nl-track{
                    display: flex;
                    width: max-content;
                    animation: cbzNlMarquee 28s linear infinite;
                }
                .cbz-nl-marquee:hover .cbz-nl-track{ animation-play-state: paused; }
                .cbz-nl-track span{
                    display: inline-flex;
                    align-items: center;
                    gap: 22px;
                    padding-right: 22px;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 3px;
                    color: var(--accent-color);
                    white-space: nowrap;
                }
                .cbz-nl-track span i{
                    font-style: normal;
                    opacity: .6;
                }

                /* ---------- floating icons ---------- */
                .cbz-nl-float{
                    position: absolute;
                    z-index: 0;
                    width: 58px; height: 58px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 18px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    color: var(--accent-color);
                    font-size: 22px;
                    box-shadow: 0 10px 30px rgba(0,0,0,.12);
                    animation: cbzNlBob 6s ease-in-out infinite;
                }
                .cbz-nl-float.f1{ top: 130px; left: 7%; }
                .cbz-nl-float.f2{ top: 210px; right: 7%; animation-delay: -2s; }
                .cbz-nl-float.f3{ bottom: 90px; left: 12%; animation-delay: -4s; }
                .cbz-nl-float.f4{ bottom: 120px; right: 13%; animation-delay: -1s; }

                /* ---------- content ---------- */
                .cbz-nl-body{
                    position: relative;
                    z-index: 1;
                    max-width: 720px;
                    margin: 0 auto;
                    padding: 0 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .cbz-nl-badge{
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
                .cbz-nl-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzNlPulse 2s infinite;
                }

                .cbz-nl-title{
                    margin: 0;
                    font-size: clamp(30px, 4.4vw, 54px);
                    line-height: 1.15;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .cbz-nl-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzNlShine 6s linear infinite;
                }

                .cbz-nl-text{
                    margin: 0;
                    font-size: 17px;
                    line-height: 1.7;
                    color: var(--text-color);
                    max-width: 560px;
                }

                /* ---------- form ---------- */
                .cbz-nl-form{
                    width: 100%;
                    max-width: 560px;
                    margin-top: 8px;
                }
                .cbz-nl-field{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 8px 8px 22px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    transition: border-color .3s ease, box-shadow .3s ease;
                }
                .cbz-nl-field:focus-within{
                    border-color: var(--accent-color);
                    box-shadow: 0 0 0 4px var(--accent-color-6);
                }
                .cbz-nl-field.has-error{
                    border-color: var(--error-color);
                    box-shadow: 0 0 0 4px rgba(230,57,70,.15);
                }
                .cbz-nl-field.shake{ animation: cbzNlShake .45s ease; }

                .cbz-nl-field > i{
                    color: var(--accent-color);
                    font-size: 18px;
                }
                .cbz-nl-field input{
                    flex: 1;
                    min-width: 0;
                    border: none;
                    outline: none;
                    background: transparent;
                    color: var(--primary);
                    font-size: 16px;
                    padding: 14px 6px;
                }
                .cbz-nl-field input::placeholder{
                    color: var(--text-color);
                    opacity: .8;
                }

                .cbz-nl-btn{
                    all: unset;
                    box-sizing: border-box;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 16px 14px 26px;
                    border-radius: 100px;
                    background: linear-gradient(135deg, var(--accent-color), #5EEAD4);
                    color: #04201D;
                    font-size: 15px;
                    font-weight: 800;
                    white-space: nowrap;
                    transition: transform .3s ease, box-shadow .3s ease;
                }
                .cbz-nl-btn i{
                    transition: transform .3s ease;
                }
                .cbz-nl-btn:hover{
                    transform: translateY(-2px);
                    box-shadow: 0 10px 24px var(--accent-color-6);
                }
                .cbz-nl-btn:hover i{ transform: translateX(4px) rotate(-45deg); }
                .cbz-nl-btn:focus-visible{
                    outline: 2px solid var(--primary);
                    outline-offset: 3px;
                }

                .cbz-nl-error{
                    margin: 10px 0 0 22px;
                    text-align: left;
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--error-color);
                }

                /* success */
                .cbz-nl-success{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    padding: 18px 26px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color);
                    background: var(--accent-color-6);
                    animation: cbzNlPop .5s cubic-bezier(.22,1,.36,1);
                }
                .cbz-nl-success .tick{
                    width: 38px; height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: var(--accent-color);
                    color: #fff;
                }
                .cbz-nl-success p{
                    margin: 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--primary);
                }

                /* chips */
                .cbz-nl-chips{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px 22px;
                    margin-top: 6px;
                }
                .cbz-nl-chips span{
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-color);
                }
                .cbz-nl-chips i{
                    color: var(--accent-color);
                }

                /* ---------- reveal ---------- */
                .cbz-nl-r{
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-nl.is-visible .cbz-nl-r{
                    opacity: 1;
                    transform: none;
                }
                .cbz-nl.is-visible .cbz-nl-r:nth-child(1){ transition-delay: .1s; }
                .cbz-nl.is-visible .cbz-nl-r:nth-child(2){ transition-delay: .22s; }
                .cbz-nl.is-visible .cbz-nl-r:nth-child(3){ transition-delay: .34s; }
                .cbz-nl.is-visible .cbz-nl-r:nth-child(4){ transition-delay: .46s; }
                .cbz-nl.is-visible .cbz-nl-r:nth-child(5){ transition-delay: .58s; }

                @keyframes cbzNlMarquee{ to{ transform: translateX(-50%); } }
                @keyframes cbzNlFloat{
                    0%,100%{ transform: translate(0,0); }
                    50%{ transform: translate(30px,-25px); }
                }
                @keyframes cbzNlBob{
                    0%,100%{ transform: translateY(0) rotate(-4deg); }
                    50%{ transform: translateY(-14px) rotate(4deg); }
                }
                @keyframes cbzNlShine{ to{ background-position: 200% center; } }
                @keyframes cbzNlPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }
                @keyframes cbzNlShake{
                    0%,100%{ transform: translateX(0); }
                    20%{ transform: translateX(-8px); }
                    40%{ transform: translateX(8px); }
                    60%{ transform: translateX(-5px); }
                    80%{ transform: translateX(5px); }
                }
                @keyframes cbzNlPop{
                    from{ opacity: 0; transform: scale(.9); }
                    to{ opacity: 1; transform: scale(1); }
                }

                @media (max-width: 991px){
                    .cbz-nl-float{ display: none; }
                }
                @media (max-width: 575px){
                    .cbz-nl-card{ border-radius: 24px; padding-bottom: 50px; }
                    .cbz-nl-marquee{ margin-bottom: 40px; }
                    .cbz-nl-field{
                        flex-direction: column;
                        align-items: stretch;
                        border-radius: 28px;
                        padding: 14px;
                        gap: 8px;
                    }
                    .cbz-nl-field > i{ display: none; }
                    .cbz-nl-field input{ padding: 12px 10px; text-align: center; }
                    .cbz-nl-btn{ justify-content: center; }
                    .cbz-nl-error{ text-align: center; margin-left: 0; }
                    .cbz-nl-success{ border-radius: 24px; flex-direction: column; text-align: center; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-nl-r{ opacity: 1 !important; transform: none !important; transition: none !important; }
                    .cbz-nl-track, .cbz-nl-blob, .cbz-nl-float,
                    .cbz-nl-title .hl, .cbz-nl-badge i{ animation: none; }
                }
            `}</style>

            <div className="hero-container">
                <div className="cbz-nl-card" ref={cardRef} onMouseMove={handleMouseMove}>
                    <span className="cbz-nl-grid"></span>
                    <span className="cbz-nl-blob b1"></span>
                    <span className="cbz-nl-blob b2"></span>

                    {/* scrolling strip */}
                    <div className="cbz-nl-marquee" aria-hidden="true">
                        <div className="cbz-nl-track">
                            {[0, 1].map((n) => (
                                <span key={n}>
                                    {[...marqueeWords, ...marqueeWords].map((w, i) => (
                                        <React.Fragment key={i}>
                                            {w} <i>●</i>
                                        </React.Fragment>
                                    ))}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* floating icons */}
                    <span className="cbz-nl-float f1" aria-hidden="true">
                        <i className="fa-solid fa-chart-line"></i>
                    </span>
                    <span className="cbz-nl-float f2" aria-hidden="true">
                        <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="cbz-nl-float f3" aria-hidden="true">
                        <i className="fa-solid fa-bullseye"></i>
                    </span>
                    <span className="cbz-nl-float f4" aria-hidden="true">
                        <i className="fa-solid fa-paper-plane"></i>
                    </span>

                    <div className="cbz-nl-body">
                        <span className="cbz-nl-badge cbz-nl-r">
                            <i></i> Newsletter
                        </span>

                        <h3 className="cbz-nl-title cbz-nl-r">
                            Stay Ahead in <span className="hl">Digital Marketing</span>
                        </h3>

                        <p className="cbz-nl-text cbz-nl-r">
                            Get exclusive insights, trends, and growth strategies delivered
                            straight to your inbox. Practical tips you can use right away.
                        </p>

                        <div className="cbz-nl-form cbz-nl-r">
                            {success ? (
                                <div className="cbz-nl-success" role="status">
                                    <span className="tick">
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <p>You're in! Thanks for subscribing.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div
                                        className={`cbz-nl-field ${error ? "has-error" : ""} ${shake ? "shake" : ""}`}
                                    >
                                        <i className="fa-regular fa-envelope"></i>
                                        <input
                                            type="email"
                                            name="newsletter-email"
                                            id="newsletter-email"
                                            placeholder="Enter your best email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (error) setError(false);
                                            }}
                                            aria-label="Email address"
                                            aria-invalid={error}
                                            autoComplete="email"
                                        />
                                        <button className="cbz-nl-btn" type="submit">
                                            Subscribe
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    {error && (
                                        <div className="cbz-nl-error" role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>

                        <div className="cbz-nl-chips cbz-nl-r">
                            <span><i className="fa-solid fa-circle-check"></i> Weekly tips</span>
                            <span><i className="fa-solid fa-circle-check"></i> No spam</span>
                            <span><i className="fa-solid fa-circle-check"></i> Unsubscribe anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;