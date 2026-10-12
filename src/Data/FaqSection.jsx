import React, { useEffect, useRef, useState } from "react";

const faqs = [
    {
        q: "What digital marketing services does Cobizzer offer?",
        a: "We offer SEO, Google Ads, social media marketing, website development, and lead generation campaigns. We combine these services based on your business goals so every rupee works towards real growth.",
    },
    {
        q: "Do you work with local businesses in Jaipur?",
        a: "Yes. Local businesses in Jaipur and across Rajasthan are a big part of our work. We focus on local SEO, Google Business Profile optimization, and ads that reach customers near you.",
    },
    {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term strategy. You can usually see early improvements in 2-3 months, with stronger growth in 4-6 months or more. The timeline depends on your competition and your website's current condition.",
    },
    // {
    //     q: "How much budget do I need for paid ads?",
    //     a: "It depends on your industry, location, and goals. We first understand your needs and then suggest a realistic budget. Your ad spend and our service fee are always kept separate and transparent.",
    // },
    // {
    //     q: "Do you focus on likes and followers or real results?",
    //     a: "We focus on business results: leads, enquiries, conversions, and revenue. Likes and reach only matter when they turn into growth for your business.",
    // },
    // {
    //     q: "Will I get regular reports on my campaigns?",
    //     a: "Yes. You receive clear, regular reports showing what we did, how many leads came in, and what the next steps are, so you always know where your money is going.",
    // },

    {
        q: "Can you build a new website for my business?",
        a: "Absolutely. We build fast, mobile-friendly, SEO-ready websites and landing pages designed to turn visitors into customers.",
    },
    {
        q: "How do I get started with Cobizzer?",
        a: "Simply book a free consultation call. We will understand your business, goals, and current online presence, then share a clear plan and proposal with you.",
    },
];

function FaqSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(0); // first question open by default

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

    // FAQ schema for Google / AI answer engines
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <div
            className={`section cbz-faq ${visible ? "is-visible" : ""}`}
            ref={sectionRef}
        >
            <style>{`
                .cbz-faq{
                    position: relative;
                    overflow: hidden;
                }
                .cbz-faq::before,
                .cbz-faq::after{
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(110px);
                    pointer-events: none;
                    z-index: 0;
                }
                .cbz-faq::before{
                    width: 360px; height: 200px;
                    top: -100px; right: -80px;
                    background: var(--accent-color-6);
                    opacity: .4;
                }
                .cbz-faq::after{
                    width: 300px; height: 300px;
                    bottom: -120px; left: -80px;
                    background: var(--accent-color-6);
                    opacity: .28;
                }
                .cbz-faq .hero-container{
                    position: relative;
                    z-index: 1;
                }

                /* ---------- Heading (top, centered) ---------- */
                .cbz-faq-head{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 20px;
                    max-width: 760px;
                    margin: 0 auto 56px;
                }

                .cbz-faq-badge{
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
                .cbz-faq-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzFaqPulse 2s infinite;
                }

                .cbz-faq-title{
                    margin: 0;
                    font-size: clamp(32px, 4.4vw, 56px);
                    line-height: 1.15;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .cbz-faq-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzFaqShine 6s linear infinite;
                }

                .cbz-faq-intro{
                    margin: 0;
                    font-size: 17px;
                    line-height: 1.7;
                    color: var(--text-color);
                    max-width: 620px;
                }

                /* ---------- Accordion (below heading) ---------- */
                .cbz-faq-list{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    max-width: 920px;
                    margin: 0 auto;
                }

                .cbz-faq-item{
                    border-radius: 22px;
                    border: 1px solid var(--accent-color-3);
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 100%);
                    overflow: hidden;
                    transition: border-color .35s ease, box-shadow .35s ease, transform .35s ease;
                }
                .cbz-faq-item:hover{
                    border-color: var(--accent-color-6);
                }
                .cbz-faq-item.active{
                    border-color: var(--accent-color);
                    box-shadow: var(--box-shadow-bottom-right-wide);
                }

                .cbz-faq-q{
                    all: unset;
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    padding: 10px 24px;
                    cursor: pointer;
                }
                .cbz-faq-q:focus-visible{
                    outline: 2px solid var(--accent-color);
                    outline-offset: -4px;
                    border-radius: 22px;
                }

                .cbz-faq-num{
                    flex-shrink: 0;
                    width: 44px; height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    background: var(--secondary);
                    color: var(--accent-color);
                    font-size: 15px;
                    font-weight: 800;
                    transition: all .35s ease;
                }
                .cbz-faq-item.active .cbz-faq-num{
                    background: var(--accent-color);
                    color: #fff;
                }

                .cbz-faq-text{
                    flex: 1;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.4;
                    color: var(--primary);
                }

                .cbz-faq-icon{
                    flex-shrink: 0;
                    position: relative;
                    width: 36px; height: 36px;
                    border-radius: 50%;
                    border: 1px solid var(--accent-color-6);
                    transition: all .35s ease;
                }
                .cbz-faq-icon::before,
                .cbz-faq-icon::after{
                    content: "";
                    position: absolute;
                    top: 50%; left: 50%;
                    width: 14px; height: 2px;
                    background: var(--accent-color);
                    border-radius: 2px;
                    transform: translate(-50%, -50%);
                    transition: transform .35s ease, background .35s ease;
                }
                .cbz-faq-icon::after{
                    transform: translate(-50%, -50%) rotate(90deg);
                }
                .cbz-faq-item.active .cbz-faq-icon{
                    background: var(--accent-color);
                    border-color: var(--accent-color);
                }
                .cbz-faq-item.active .cbz-faq-icon::before,
                .cbz-faq-item.active .cbz-faq-icon::after{
                    background: #fff;
                }
                .cbz-faq-item.active .cbz-faq-icon::after{
                    transform: translate(-50%, -50%) rotate(0deg);
                }

                .cbz-faq-a-wrap{
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows .4s ease;
                }
                .cbz-faq-item.active .cbz-faq-a-wrap{
                    grid-template-rows: 1fr;
                }
                .cbz-faq-a-inner{
                    overflow: hidden;
                }
                .cbz-faq-a{
                    margin: 0;
                    padding: 0 24px 24px 86px;
                    font-size: 16px;
                    line-height: 1.75;
                    color: var(--text-color);
                }

                /* ---------- Bottom help card ---------- */
                .cbz-faq-help{
                    max-width: 920px;
                    margin: 40px auto 0;
                    padding: 28px 32px;
                    border-radius: 24px;
                    border: 1px solid var(--accent-color-3);
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 70%);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    position: relative;
                    overflow: hidden;
                }
                .cbz-faq-help::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(at bottom right, var(--accent-color) 0%, transparent 55%);
                    opacity: .14;
                    pointer-events: none;
                }
                .cbz-faq-help-text{
                    position: relative;
                }
                .cbz-faq-help h5{
                    margin: 0 0 6px;
                    font-size: 22px;
                    color: var(--primary);
                }
                .cbz-faq-help p{
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.6;
                    color: var(--text-color);
                }
                .cbz-faq-cta{
                    position: relative;
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 8px 8px 24px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    color: var(--primary);
                    font-weight: 700;
                    transition: all .35s ease;
                }
                .cbz-faq-cta span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px; height: 40px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    color: #fff;
                    transition: transform .35s ease;
                }
                .cbz-faq-cta:hover{
                    border-color: var(--accent-color);
                    box-shadow: var(--box-shadow-bottom-right);
                    color: var(--accent-color);
                }
                .cbz-faq-cta:hover span{
                    transform: translateX(4px) rotate(-45deg);
                }

                /* ---------- Reveal animation ---------- */
                .cbz-faq-reveal,
                .cbz-faq-list .cbz-faq-item,
                .cbz-faq-help{
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1),
                                border-color .35s ease,
                                box-shadow .35s ease;
                }
                .cbz-faq.is-visible .cbz-faq-reveal,
                .cbz-faq.is-visible .cbz-faq-list .cbz-faq-item,
                .cbz-faq.is-visible .cbz-faq-help{
                    opacity: 1;
                    transform: none;
                }
                ${faqs
                    .map(
                        (_, i) =>
                            `.cbz-faq.is-visible .cbz-faq-list .cbz-faq-item:nth-child(${i + 1}){ transition-delay: ${0.15 + i * 0.08}s, ${0.15 + i * 0.08}s, 0s, 0s; }`
                    )
                    .join("\n")}
                .cbz-faq.is-visible .cbz-faq-help{ transition-delay: ${0.2 + faqs.length * 0.08}s, ${0.2 + faqs.length * 0.08}s, 0s, 0s; }

                @keyframes cbzFaqShine{ to{ background-position: 200% center; } }
                @keyframes cbzFaqPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }

                @media (max-width: 767px){
                    .cbz-faq-head{ margin-bottom: 40px; }
                    .cbz-faq-help{
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 24px;
                    }
                }
                @media (max-width: 575px){
                    .cbz-faq-q{ padding: 18px 16px; gap: 12px; }
                    .cbz-faq-num{ width: 38px; height: 38px; border-radius: 12px; }
                    .cbz-faq-text{ font-size: 16px; }
                    .cbz-faq-a{ padding: 0 16px 20px 16px; }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-faq-reveal,
                    .cbz-faq-list .cbz-faq-item,
                    .cbz-faq-help{
                        opacity: 1 !important;
                        transform: none !important;
                        transition: none !important;
                    }
                    .cbz-faq-title .hl, .cbz-faq-badge i{ animation: none; }
                }
            `}</style>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="hero-container">
                {/* ---------- Heading ---------- */}
                <div className="cbz-faq-head cbz-faq-reveal">
                    <span className="cbz-faq-badge">
                        <i></i> FAQs
                    </span>
                    <h2 className="cbz-faq-title">
                        Frequently Asked <span className="hl">Questions</span>
                    </h2>
                    <p className="cbz-faq-intro">
                        Starting with digital marketing can raise a lot of questions.
                        Here are clear, honest answers to the ones we hear most often.
                    </p>
                </div>

                {/* ---------- FAQ list ---------- */}
                <div className="cbz-faq-list">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div
                                key={i}
                                className={`cbz-faq-item ${isOpen ? "active" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cbz-faq-q"
                                    aria-expanded={isOpen}
                                    aria-controls={`cbz-faq-panel-${i}`}
                                    id={`cbz-faq-btn-${i}`}
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                >
                                    <span className="cbz-faq-num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="cbz-faq-text">{item.q}</span>
                                    <span className="cbz-faq-icon" aria-hidden="true"></span>
                                </button>

                                <div
                                    className="cbz-faq-a-wrap"
                                    id={`cbz-faq-panel-${i}`}
                                    role="region"
                                    aria-labelledby={`cbz-faq-btn-${i}`}
                                >
                                    <div className="cbz-faq-a-inner">
                                        <p className="cbz-faq-a">{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ---------- Bottom CTA ---------- */}
                <div className="cbz-faq-help">
                    <div className="cbz-faq-help-text">
                        <h5>Still have a question?</h5>
                        <p>
                            Talk to our team for a free consultation. We will suggest the
                            right plan for your business.
                        </p>
                    </div>
                    <a href="./contact" className="cbz-faq-cta">
                        Contact Us
                        <span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;