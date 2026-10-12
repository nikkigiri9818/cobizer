// import React, { useRef } from "react";

// const stripWords = ["DIGITAL MARKETING", "SEO", "SOCIAL MEDIA", "GOOGLE ADS", "WEBSITES", "GROWTH"];

// const BannerInnerSection = ({ title, currentPage }) => {
//     const cardRef = useRef(null);

//     // mouse ke saath chalne wali spotlight
//     const handleMouseMove = (e) => {
//         const card = cardRef.current;
//         if (!card) return;
//         const rect = card.getBoundingClientRect();
//         card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
//         card.style.setProperty("--my", `${e.clientY - rect.top}px`);
//     };

//     // title ka last word gradient mein
//     const words = String(title || "").trim().split(" ");
//     const lastWord = words.length > 1 ? words.pop() : null;
//     const firstPart = lastWord ? words.join(" ") : "";
//     const mainWord = lastWord || String(title || "");

//     return (
//         <div className="section-banner">
//             <style>{`
//                 .cbz-ib{
//                     --mx: 50%;
//                     --my: 50%;
//                     position: relative;
//                     isolation: isolate;
//                     overflow: hidden;
//                     border-radius: var(--global-border-radius);
//                     border: 1px solid var(--accent-color-3);
//                     background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 65%);
//                 }

//                 /* ---------- Background layers ---------- */
//                 .cbz-ib-grid{
//                     position: absolute;
//                     inset: 0;
//                     z-index: -4;
//                     background-image:
//                         linear-gradient(var(--accent-color-6) 1px, transparent 1px),
//                         linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
//                     background-size: 48px 48px;
//                     opacity: .35;
//                     -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
//                     mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
//                     animation: cbzIbGrid 18s linear infinite;
//                 }

//                 .cbz-ib-blob{
//                     position: absolute;
//                     border-radius: 50%;
//                     filter: blur(90px);
//                     z-index: -3;
//                     pointer-events: none;
//                 }
//                 .cbz-ib-blob.b1{
//                     width: 380px; height: 380px;
//                     top: -150px; left: 6%;
//                     background: var(--accent-color);
//                     opacity: .3;
//                     animation: cbzIbFloat 12s ease-in-out infinite;
//                 }
//                 .cbz-ib-blob.b2{
//                     width: 320px; height: 320px;
//                     bottom: -160px; right: 8%;
//                     background: #38BDF8;
//                     opacity: .22;
//                     animation: cbzIbFloat 15s ease-in-out infinite reverse;
//                 }

//                 /* mouse spotlight */
//                 .cbz-ib::before{
//                     content: "";
//                     position: absolute;
//                     inset: 0;
//                     z-index: -2;
//                     background: radial-gradient(420px circle at var(--mx) var(--my), var(--accent-color-6), transparent 60%);
//                     opacity: 0;
//                     transition: opacity .4s ease;
//                     pointer-events: none;
//                 }
//                 .cbz-ib:hover::before{ opacity: 1; }

//                 /* light sweep jo upar se guzarti hai */
//                 .cbz-ib::after{
//                     content: "";
//                     position: absolute;
//                     top: 0; left: -40%;
//                     width: 40%; height: 100%;
//                     z-index: -1;
//                     background: linear-gradient(100deg, transparent, var(--accent-color-6), transparent);
//                     transform: skewX(-18deg);
//                     animation: cbzIbSweep 7s ease-in-out infinite;
//                     pointer-events: none;
//                 }

//                 /* rotating rings */
//                 .cbz-ib-ring{
//                     position: absolute;
//                     border-radius: 50%;
//                     border: 1px dashed var(--accent-color-6);
//                     z-index: -3;
//                     pointer-events: none;
//                 }
//                 .cbz-ib-ring.r1{
//                     width: 280px; height: 280px;
//                     top: -90px; right: 10%;
//                     animation: cbzIbSpin 30s linear infinite;
//                 }
//                 .cbz-ib-ring.r2{
//                     width: 190px; height: 190px;
//                     bottom: 40px; left: 6%;
//                     animation: cbzIbSpin 24s linear infinite reverse;
//                 }
//                 .cbz-ib-ring::after{
//                     content: "";
//                     position: absolute;
//                     top: 12%; left: 12%;
//                     width: 10px; height: 10px;
//                     border-radius: 50%;
//                     background: var(--accent-color);
//                     box-shadow: 0 0 14px 3px var(--accent-color);
//                 }

//                 /* floating icons */
//                 .cbz-ib-float{
//                     position: absolute;
//                     z-index: 0;
//                     width: 56px; height: 56px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     border-radius: 18px;
//                     border: 1px solid var(--accent-color-3);
//                     background: var(--secondary);
//                     color: var(--accent-color);
//                     font-size: 21px;
//                     box-shadow: 0 10px 30px rgba(0,0,0,.12);
//                     animation: cbzIbBob 6s ease-in-out infinite;
//                 }
//                 .cbz-ib-float.f1{ top: 70px;  left: 9%; }
//                 .cbz-ib-float.f2{ top: 120px; right: 9%; animation-delay: -2s; }
//                 .cbz-ib-float.f3{ bottom: 90px; left: 17%; animation-delay: -4s; width: 46px; height: 46px; font-size: 18px; border-radius: 15px; }
//                 .cbz-ib-float.f4{ bottom: 80px; right: 18%; animation-delay: -1s; width: 46px; height: 46px; font-size: 18px; border-radius: 15px; }

//                 /* ---------- Content ---------- */
//                 .cbz-ib-body{
//                     position: relative;
//                     z-index: 2;
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     text-align: center;
//                     gap: 22px;
//                     padding: 110px 20px 90px;
//                     max-width: 900px;
//                     margin: 0 auto;
//                 }

//                 .cbz-ib-badge{
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 10px;
//                     padding: 8px 18px;
//                     border-radius: 100px;
//                     border: 1px solid var(--accent-color-6);
//                     background: var(--accent-color-6);
//                     color: var(--accent-color);
//                     font-size: 14px;
//                     font-weight: 700;
//                     letter-spacing: .4px;
//                     text-transform: uppercase;
//                 }
//                 .cbz-ib-badge i{
//                     width: 8px; height: 8px;
//                     border-radius: 50%;
//                     background: var(--accent-color);
//                     animation: cbzIbPulse 2s infinite;
//                 }

//                 .cbz-ib-title{
//                     margin: 0;
//                     font-size: clamp(36px, 6vw, 76px);
//                     line-height: 1.1;
//                     letter-spacing: -1px;
//                     color: var(--primary);
//                 }
//                 .cbz-ib-title .hl{
//                     background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
//                     background-size: 200% auto;
//                     -webkit-background-clip: text;
//                     background-clip: text;
//                     -webkit-text-fill-color: transparent;
//                     animation: cbzIbShine 6s linear infinite;
//                 }

//                 /* breadcrumb pill */
//                 .cbz-ib-crumb{
//                     display: inline-flex;
//                     align-items: center;
//                     flex-wrap: wrap;
//                     justify-content: center;
//                     gap: 12px;
//                     padding: 10px 22px;
//                     border-radius: 100px;
//                     border: 1px solid var(--accent-color-3);
//                     background: var(--secondary);
//                     backdrop-filter: blur(8px);
//                     -webkit-backdrop-filter: blur(8px);
//                     box-shadow: var(--box-shadow-bottom-right);
//                 }
//                 .cbz-ib-crumb a{
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 8px;
//                     font-size: 15px;
//                     font-weight: 700;
//                     color: var(--text-color);
//                     transition: color .3s ease;
//                 }
//                 .cbz-ib-crumb a:hover{ color: var(--accent-color); }
//                 .cbz-ib-crumb a i{ color: var(--accent-color); font-size: 14px; }
//                 .cbz-ib-crumb .sep{
//                     color: var(--accent-color);
//                     font-size: 11px;
//                     opacity: .8;
//                 }
//                 .cbz-ib-crumb .current{
//                     margin: 0;
//                     font-size: 15px;
//                     font-weight: 800;
//                     color: var(--accent-color);
//                 }

//                 /* ---------- Bottom scrolling strip ---------- */
//                 .cbz-ib-strip{
//                     position: relative;
//                     z-index: 2;
//                     overflow: hidden;
//                     border-top: 1px solid var(--accent-color-3);
//                     background: var(--accent-color-6);
//                     padding: 12px 0;
//                 }
//                 .cbz-ib-track{
//                     display: flex;
//                     width: max-content;
//                     animation: cbzIbMarquee 30s linear infinite;
//                 }
//                 .cbz-ib-strip:hover .cbz-ib-track{ animation-play-state: paused; }
//                 .cbz-ib-track span{
//                     display: inline-flex;
//                     align-items: center;
//                     gap: 22px;
//                     padding-right: 22px;
//                     font-size: 13px;
//                     font-weight: 800;
//                     letter-spacing: 3px;
//                     color: var(--accent-color);
//                     white-space: nowrap;
//                 }
//                 .cbz-ib-track span i{ font-style: normal; opacity: .6; }

//                 /* ---------- Entry animation (pure CSS) ---------- */
//                 .cbz-ib-in{
//                     opacity: 0;
//                     animation: cbzIbUp .9s cubic-bezier(.22,1,.36,1) forwards;
//                     animation-delay: var(--d, 0s);
//                 }

//                 @keyframes cbzIbUp{
//                     from{ opacity: 0; transform: translateY(26px); }
//                     to{ opacity: 1; transform: none; }
//                 }
//                 @keyframes cbzIbGrid{
//                     to{ background-position: 48px 48px; }
//                 }
//                 @keyframes cbzIbFloat{
//                     0%,100%{ transform: translate(0,0); }
//                     50%{ transform: translate(30px,-25px); }
//                 }
//                 @keyframes cbzIbBob{
//                     0%,100%{ transform: translateY(0) rotate(-4deg); }
//                     50%{ transform: translateY(-14px) rotate(4deg); }
//                 }
//                 @keyframes cbzIbSpin{ to{ transform: rotate(360deg); } }
//                 @keyframes cbzIbSweep{
//                     0%{ left: -40%; }
//                     55%,100%{ left: 140%; }
//                 }
//                 @keyframes cbzIbShine{ to{ background-position: 200% center; } }
//                 @keyframes cbzIbMarquee{ to{ transform: translateX(-50%); } }
//                 @keyframes cbzIbPulse{
//                     0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
//                     70%{ box-shadow: 0 0 0 10px transparent; }
//                     100%{ box-shadow: 0 0 0 0 transparent; }
//                 }

//                 @media (max-width: 991px){
//                     .cbz-ib-float{ display: none; }
//                     .cbz-ib-body{ padding: 90px 20px 70px; }
//                 }
//                 @media (max-width: 575px){
//                     .cbz-ib-body{ padding: 70px 16px 56px; gap: 18px; }
//                     .cbz-ib-ring.r1{ width: 200px; height: 200px; }
//                     .cbz-ib-crumb{ padding: 8px 16px; gap: 8px; }
//                 }
//                 @media (prefers-reduced-motion: reduce){
//                     .cbz-ib-in{ opacity: 1 !important; animation: none; }
//                     .cbz-ib-grid, .cbz-ib-blob, .cbz-ib-ring, .cbz-ib-float,
//                     .cbz-ib::after, .cbz-ib-track, .cbz-ib-title .hl, .cbz-ib-badge i{ animation: none; }
//                 }
//             `}</style>

//             <div className="cbz-ib" ref={cardRef} onMouseMove={handleMouseMove}>
//                 {/* animated background */}
//                 <span className="cbz-ib-grid" aria-hidden="true"></span>
//                 <span className="cbz-ib-blob b1" aria-hidden="true"></span>
//                 <span className="cbz-ib-blob b2" aria-hidden="true"></span>
//                 <span className="cbz-ib-ring r1" aria-hidden="true"></span>
//                 <span className="cbz-ib-ring r2" aria-hidden="true"></span>

//                 <span className="cbz-ib-float f1" aria-hidden="true">
//                     <i className="fa-solid fa-chart-line"></i>
//                 </span>
//                 <span className="cbz-ib-float f2" aria-hidden="true">
//                     <i className="fa-solid fa-bullseye"></i>
//                 </span>
//                 <span className="cbz-ib-float f3" aria-hidden="true">
//                     <i className="fa-solid fa-magnifying-glass"></i>
//                 </span>
//                 <span className="cbz-ib-float f4" aria-hidden="true">
//                     <i className="fa-solid fa-paper-plane"></i>
//                 </span>

//                 {/* content */}
//                 <div className="cbz-ib-body">
//                     <span className="cbz-ib-badge cbz-ib-in" style={{ "--d": "0.1s" }}>
//                         <i></i> Cobizzer
//                     </span>

//                     <h1 className="cbz-ib-title cbz-ib-in" style={{ "--d": "0.25s" }}>
//                         {firstPart && <>{firstPart} </>}
//                         <span className="hl">{mainWord}</span>
//                     </h1>

//                     <nav
//                         className="cbz-ib-crumb cbz-ib-in"
//                         style={{ "--d": "0.45s" }}
//                         aria-label="Breadcrumb"
//                     >
//                         <a href="/">
//                             <i className="fa-solid fa-house"></i> Home
//                         </a>
//                         <span className="sep">
//                             <i className="fa-solid fa-chevron-right"></i>
//                         </span>
//                         <p className="current" aria-current="page">{currentPage}</p>
//                     </nav>
//                 </div>

//                 {/* scrolling strip */}
//                 <div className="cbz-ib-strip" aria-hidden="true">
//                     <div className="cbz-ib-track">
//                         {[0, 1].map((n) => (
//                             <span key={n}>
//                                 {[...stripWords, ...stripWords].map((w, i) => (
//                                     <React.Fragment key={i}>
//                                         {w} <i>●</i>
//                                     </React.Fragment>
//                                 ))}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BannerInnerSection;



import React, { useEffect, useRef } from "react";

const stripWords = ["DIGITAL MARKETING", "SEO", "SOCIAL MEDIA", "GOOGLE ADS", "WEBSITES", "GROWTH"];

// upar uthne wale glowing orbs (fixed values => SSR safe)
const orbs = Array.from({ length: 10 }, (_, i) => ({
    left: `${(i * 37 + 8) % 96}%`,
    size: 6 + ((i * 5) % 10),
    dur: 9 + ((i * 3) % 8),
    delay: -((i * 1.7) % 9),
}));

// shooting stars
const stars = [
    { t: "12%", l: "78%", dl: "0s" },
    { t: "30%", l: "92%", dl: "3.2s" },
    { t: "8%", l: "55%", dl: "6.1s" },
];

const BannerInnerSection = ({ title, currentPage }) => {
    const cardRef = useRef(null);
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        // parallax ke liye -1 .. 1
        card.style.setProperty("--nx", ((x / rect.width - 0.5) * 2).toFixed(3));
        card.style.setProperty("--ny", ((y / rect.height - 0.5) * 2).toFixed(3));
        mouseRef.current.x = x;
        mouseRef.current.y = y;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
        if (card) {
            card.style.setProperty("--nx", "0");
            card.style.setProperty("--ny", "0");
        }
    };

    // ---------- Particle network (canvas) ----------
    useEffect(() => {
        const canvas = canvasRef.current;
        const host = cardRef.current;
        if (!canvas || !host) return undefined;
        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = 0;
        let h = 0;
        let raf = 0;
        let frame = 0;
        let visible = true;
        let particles = [];
        const LINK = 130;
        const MOUSE_R = 170;

        const readColor = () =>
            getComputedStyle(host).getPropertyValue("--accent-color").trim() || "#14b8a6";
        let color = readColor();

        const resize = () => {
            const r = host.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = r.width;
            h = r.height;
            canvas.width = Math.max(1, Math.floor(w * dpr));
            canvas.height = Math.max(1, Math.floor(h * dpr));
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.max(22, Math.min(78, Math.floor((w * h) / 15000)));
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.6 + 0.8,
            }));
        };

        const draw = () => {
            frame += 1;
            if (frame % 180 === 0) color = readColor();
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            const m = mouseRef.current;

            for (let i = 0; i < particles.length; i += 1) {
                const p = particles[i];

                if (!reduce) {
                    // mouse ke paas aate hi halka sa kheench
                    const dx = m.x - p.x;
                    const dy = m.y - p.y;
                    const d = Math.hypot(dx, dy);
                    if (d < MOUSE_R) {
                        const f = (1 - d / MOUSE_R) * 0.035;
                        p.vx += dx * f * 0.02;
                        p.vy += dy * f * 0.02;
                    }
                    p.vx *= 0.992;
                    p.vy *= 0.992;
                    // minimum drift taaki ruke nahi
                    if (Math.abs(p.vx) < 0.06) p.vx += (Math.random() - 0.5) * 0.02;
                    if (Math.abs(p.vy) < 0.06) p.vy += (Math.random() - 0.5) * 0.02;
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < -10) p.x = w + 10;
                    if (p.x > w + 10) p.x = -10;
                    if (p.y < -10) p.y = h + 10;
                    if (p.y > h + 10) p.y = -10;
                }

                ctx.globalAlpha = 0.65;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < particles.length; j += 1) {
                    const q = particles[j];
                    const d2 = Math.hypot(p.x - q.x, p.y - q.y);
                    if (d2 < LINK) {
                        ctx.globalAlpha = (1 - d2 / LINK) * 0.32;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                    }
                }

                // mouse se connect hone wali lines
                const md = Math.hypot(p.x - m.x, p.y - m.y);
                if (md < MOUSE_R) {
                    ctx.globalAlpha = (1 - md / MOUSE_R) * 0.6;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(m.x, m.y);
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
        };

        const loop = () => {
            if (visible) draw();
            raf = requestAnimationFrame(loop);
        };

        resize();
        if (reduce) {
            draw();
        } else {
            raf = requestAnimationFrame(loop);
        }

        const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
        if (ro) ro.observe(host);
        const io =
            typeof IntersectionObserver !== "undefined"
                ? new IntersectionObserver(([entry]) => {
                      visible = entry.isIntersecting;
                  })
                : null;
        if (io) io.observe(host);

        return () => {
            cancelAnimationFrame(raf);
            if (ro) ro.disconnect();
            if (io) io.disconnect();
        };
    }, []);

    // title ka last word gradient mein
    const words = String(title || "").trim().split(" ");
    const lastWord = words.length > 1 ? words.pop() : null;
    const firstPart = lastWord ? words.join(" ") : "";
    const mainWord = lastWord || String(title || "");

    return (
        <div className="section-banner">
            <style>{`
                .cbz-ib{
                    --mx: 50%;
                    --my: 50%;
                    --nx: 0;
                    --ny: 0;
                    position: relative;
                    isolation: isolate;
                    overflow: hidden;
                    border-radius: var(--global-border-radius);
                    border: 1px solid var(--accent-color-3);
                    background: radial-gradient(at top left, var(--accent-color-3) 0%, var(--accent-color-4) 65%);
                }

                /* ================= BACKGROUND LAYERS ================= */

                /* 1. Aurora: ghoomta hua conic glow */
                .cbz-ib-aurora{
                    position: absolute;
                    left: 50%; top: 50%;
                    width: 150%; aspect-ratio: 1;
                    margin: -75% 0 0 -75%;
                    z-index: -6;
                    background: conic-gradient(from 0deg,
                        var(--accent-color), #38BDF8, #8B5CF6, #5EEAD4, var(--accent-color));
                    filter: blur(120px);
                    opacity: .24;
                    pointer-events: none;
                    animation: cbzIbSpin 45s linear infinite;
                }

                /* 2. Blobs (parallax + float) */
                .cbz-ib-blob{
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    z-index: -5;
                    pointer-events: none;
                    translate: calc(var(--nx) * var(--k, 20) * 1px) calc(var(--ny) * var(--k, 20) * 1px);
                    transition: translate .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-ib-blob.b1{
                    --k: -34;
                    width: 380px; height: 380px;
                    top: -150px; left: 6%;
                    background: var(--accent-color);
                    opacity: .3;
                    animation: cbzIbFloat 12s ease-in-out infinite;
                }
                .cbz-ib-blob.b2{
                    --k: 40;
                    width: 320px; height: 320px;
                    bottom: -160px; right: 8%;
                    background: #38BDF8;
                    opacity: .24;
                    animation: cbzIbFloat 15s ease-in-out infinite reverse;
                }
                .cbz-ib-blob.b3{
                    --k: 26;
                    width: 260px; height: 260px;
                    top: 30%; right: 34%;
                    background: #8B5CF6;
                    opacity: .16;
                    animation: cbzIbFloat 18s ease-in-out infinite;
                }

                /* 3. Moving grid */
                .cbz-ib-grid{
                    position: absolute;
                    inset: 0;
                    z-index: -4;
                    background-image:
                        linear-gradient(var(--accent-color-6) 1px, transparent 1px),
                        linear-gradient(90deg, var(--accent-color-6) 1px, transparent 1px);
                    background-size: 48px 48px;
                    opacity: .35;
                    -webkit-mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
                    mask-image: radial-gradient(ellipse at center, #000 20%, transparent 78%);
                    animation: cbzIbGrid 18s linear infinite;
                }

                /* 4. 3D perspective floor jo aage ki taraf aati hai */
                .cbz-ib-floor{
                    position: absolute;
                    left: -50%;
                    width: 200%;
                    bottom: 40px;
                    height: 62%;
                    z-index: -4;
                    transform-origin: 50% 100%;
                    transform: perspective(380px) rotateX(66deg);
                    background-image:
                        linear-gradient(var(--accent-color) 1.5px, transparent 1.5px),
                        linear-gradient(90deg, var(--accent-color) 1.5px, transparent 1.5px);
                    background-size: 70px 70px;
                    opacity: .28;
                    -webkit-mask-image: linear-gradient(to top, #000 5%, transparent 85%);
                    mask-image: linear-gradient(to top, #000 5%, transparent 85%);
                    animation: cbzIbFloor 3.2s linear infinite;
                    pointer-events: none;
                }

                /* 5. Particle network canvas */
                .cbz-ib-canvas{
                    position: absolute;
                    inset: 0;
                    width: 100%; height: 100%;
                    z-index: -3;
                    pointer-events: none;
                }

                /* 6. Rotating rings (parallax) */
                .cbz-ib-ring{
                    position: absolute;
                    border-radius: 50%;
                    border: 1px dashed var(--accent-color-6);
                    z-index: -3;
                    pointer-events: none;
                    translate: calc(var(--nx) * var(--k, 20) * 1px) calc(var(--ny) * var(--k, 20) * 1px);
                    transition: translate .8s cubic-bezier(.22,1,.36,1);
                }
                .cbz-ib-ring.r1{
                    --k: -22;
                    width: 280px; height: 280px;
                    top: -90px; right: 10%;
                    animation: cbzIbSpin 30s linear infinite;
                }
                .cbz-ib-ring.r2{
                    --k: 30;
                    width: 190px; height: 190px;
                    bottom: 40px; left: 6%;
                    animation: cbzIbSpin 24s linear infinite reverse;
                }
                .cbz-ib-ring::after{
                    content: "";
                    position: absolute;
                    top: 12%; left: 12%;
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    box-shadow: 0 0 14px 3px var(--accent-color);
                }

                /* 7. Shooting stars */
                .cbz-ib-star{
                    position: absolute;
                    top: var(--t); left: var(--l);
                    width: 120px; height: 2px;
                    z-index: -3;
                    border-radius: 2px;
                    background: linear-gradient(90deg, var(--accent-color), transparent);
                    box-shadow: 0 0 10px var(--accent-color);
                    opacity: 0;
                    pointer-events: none;
                    animation: cbzIbShoot 8s linear infinite;
                    animation-delay: var(--dl);
                }

                /* 8. Rising glowing orbs */
                .cbz-ib-orb{
                    position: absolute;
                    bottom: -30px;
                    z-index: -3;
                    border-radius: 50%;
                    background: radial-gradient(circle, var(--accent-color), transparent 70%);
                    opacity: 0;
                    pointer-events: none;
                    animation: cbzIbRise linear infinite;
                }

                /* 9. Mouse spotlight */
                .cbz-ib::before{
                    content: "";
                    position: absolute;
                    inset: 0;
                    z-index: -2;
                    background: radial-gradient(460px circle at var(--mx) var(--my), var(--accent-color-6), transparent 60%);
                    opacity: 0;
                    transition: opacity .4s ease;
                    pointer-events: none;
                }
                .cbz-ib:hover::before{ opacity: 1; }

                /* 10. Light sweep */
                .cbz-ib::after{
                    content: "";
                    position: absolute;
                    top: 0; left: -40%;
                    width: 40%; height: 100%;
                    z-index: -1;
                    background: linear-gradient(100deg, transparent, var(--accent-color-6), transparent);
                    transform: skewX(-18deg);
                    animation: cbzIbSweep 7s ease-in-out infinite;
                    pointer-events: none;
                }

                /* 11. Film grain - premium texture */
                .cbz-ib-grain{
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    opacity: .07;
                    pointer-events: none;
                    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
                }

                /* floating icons */
                .cbz-ib-float{
                    position: absolute;
                    z-index: 0;
                    width: 56px; height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 18px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    color: var(--accent-color);
                    font-size: 21px;
                    box-shadow: 0 10px 30px rgba(0,0,0,.12);
                    animation: cbzIbBob 6s ease-in-out infinite;
                    translate: calc(var(--nx) * var(--k, 14) * 1px) calc(var(--ny) * var(--k, 14) * 1px);
                    transition: translate .6s cubic-bezier(.22,1,.36,1);
                }
                .cbz-ib-float.f1{ --k: 18;  top: 70px;  left: 9%; }
                .cbz-ib-float.f2{ --k: -16; top: 120px; right: 9%; animation-delay: -2s; }
                .cbz-ib-float.f3{ --k: 24;  bottom: 90px; left: 17%; animation-delay: -4s; width: 46px; height: 46px; font-size: 18px; border-radius: 15px; }
                .cbz-ib-float.f4{ --k: -22; bottom: 80px; right: 18%; animation-delay: -1s; width: 46px; height: 46px; font-size: 18px; border-radius: 15px; }

                /* ================= CONTENT ================= */
                .cbz-ib-body{
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 22px;
                    padding: 110px 20px 90px;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .cbz-ib-badge{
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
                .cbz-ib-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: cbzIbPulse 2s infinite;
                }

                .cbz-ib-title{
                    margin: 0;
                    font-size: clamp(36px, 6vw, 76px);
                    line-height: 1.1;
                    letter-spacing: -1px;
                    color: var(--primary);
                }
                .cbz-ib-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: cbzIbShine 6s linear infinite;
                }

                .cbz-ib-crumb{
                    display: inline-flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 12px;
                    padding: 10px 22px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--secondary);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    box-shadow: var(--box-shadow-bottom-right);
                }
                .cbz-ib-crumb a{
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--text-color);
                    transition: color .3s ease;
                }
                .cbz-ib-crumb a:hover{ color: var(--accent-color); }
                .cbz-ib-crumb a i{ color: var(--accent-color); font-size: 14px; }
                .cbz-ib-crumb .sep{
                    color: var(--accent-color);
                    font-size: 11px;
                    opacity: .8;
                }
                .cbz-ib-crumb .current{
                    margin: 0;
                    font-size: 15px;
                    font-weight: 800;
                    color: var(--accent-color);
                }

                /* ---------- Bottom scrolling strip ---------- */
                .cbz-ib-strip{
                    position: relative;
                    z-index: 2;
                    overflow: hidden;
                    border-top: 1px solid var(--accent-color-3);
                    background: var(--accent-color-6);
                    padding: 12px 0;
                }
                .cbz-ib-track{
                    display: flex;
                    width: max-content;
                    animation: cbzIbMarquee 30s linear infinite;
                }
                .cbz-ib-strip:hover .cbz-ib-track{ animation-play-state: paused; }
                .cbz-ib-track span{
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
                .cbz-ib-track span i{ font-style: normal; opacity: .6; }

                /* ---------- Entry animation ---------- */
                .cbz-ib-in{
                    opacity: 0;
                    animation: cbzIbUp .9s cubic-bezier(.22,1,.36,1) forwards;
                    animation-delay: var(--d, 0s);
                }

                /* ================= KEYFRAMES ================= */
                @keyframes cbzIbUp{
                    from{ opacity: 0; transform: translateY(26px); }
                    to{ opacity: 1; transform: none; }
                }
                @keyframes cbzIbGrid{ to{ background-position: 48px 48px; } }
                @keyframes cbzIbFloor{ to{ background-position: 0 70px; } }
                @keyframes cbzIbFloat{
                    0%,100%{ transform: translate(0,0) scale(1); }
                    50%{ transform: translate(30px,-25px) scale(1.12); }
                }
                @keyframes cbzIbBob{
                    0%,100%{ transform: translateY(0) rotate(-4deg); }
                    50%{ transform: translateY(-14px) rotate(4deg); }
                }
                @keyframes cbzIbSpin{ to{ transform: rotate(360deg); } }
                @keyframes cbzIbSweep{
                    0%{ left: -40%; }
                    55%,100%{ left: 140%; }
                }
                @keyframes cbzIbShine{ to{ background-position: 200% center; } }
                @keyframes cbzIbMarquee{ to{ transform: translateX(-50%); } }
                @keyframes cbzIbPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }
                @keyframes cbzIbShoot{
                    0%{ opacity: 0; transform: rotate(-35deg) translateX(0); }
                    3%{ opacity: 1; }
                    14%{ opacity: 0; transform: rotate(-35deg) translateX(-460px); }
                    100%{ opacity: 0; transform: rotate(-35deg) translateX(-460px); }
                }
                @keyframes cbzIbRise{
                    0%{ opacity: 0; transform: translateY(0) scale(.6); }
                    15%{ opacity: .75; }
                    85%{ opacity: .5; }
                    100%{ opacity: 0; transform: translateY(-560px) scale(1.2); }
                }

                @media (max-width: 991px){
                    .cbz-ib-float{ display: none; }
                    .cbz-ib-body{ padding: 90px 20px 70px; }
                    .cbz-ib-floor{ opacity: .2; }
                }
                @media (max-width: 575px){
                    .cbz-ib-body{ padding: 70px 16px 56px; gap: 18px; }
                    .cbz-ib-ring.r1{ width: 200px; height: 200px; }
                    .cbz-ib-crumb{ padding: 8px 16px; gap: 8px; }
                    .cbz-ib-star{ display: none; }
                    .cbz-ib-aurora{ filter: blur(80px); }
                }
                @media (prefers-reduced-motion: reduce){
                    .cbz-ib-in{ opacity: 1 !important; animation: none; }
                    .cbz-ib-aurora, .cbz-ib-grid, .cbz-ib-floor, .cbz-ib-blob, .cbz-ib-ring,
                    .cbz-ib-float, .cbz-ib-star, .cbz-ib-orb, .cbz-ib::after, .cbz-ib-track,
                    .cbz-ib-title .hl, .cbz-ib-badge i{ animation: none; }
                    .cbz-ib-star, .cbz-ib-orb{ display: none; }
                }
            `}</style>

            <div
                className="cbz-ib"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* animated background */}
                <span className="cbz-ib-aurora" aria-hidden="true"></span>
                <span className="cbz-ib-blob b1" aria-hidden="true"></span>
                <span className="cbz-ib-blob b2" aria-hidden="true"></span>
                <span className="cbz-ib-blob b3" aria-hidden="true"></span>
                <span className="cbz-ib-grid" aria-hidden="true"></span>
                <span className="cbz-ib-floor" aria-hidden="true"></span>
                <canvas className="cbz-ib-canvas" ref={canvasRef} aria-hidden="true"></canvas>
                <span className="cbz-ib-ring r1" aria-hidden="true"></span>
                <span className="cbz-ib-ring r2" aria-hidden="true"></span>

                {stars.map((s, i) => (
                    <span
                        key={i}
                        className="cbz-ib-star"
                        style={{ "--t": s.t, "--l": s.l, "--dl": s.dl }}
                        aria-hidden="true"
                    ></span>
                ))}

                {orbs.map((o, i) => (
                    <span
                        key={i}
                        className="cbz-ib-orb"
                        style={{
                            left: o.left,
                            width: o.size,
                            height: o.size,
                            animationDuration: `${o.dur}s`,
                            animationDelay: `${o.delay}s`,
                        }}
                        aria-hidden="true"
                    ></span>
                ))}

                <span className="cbz-ib-grain" aria-hidden="true"></span>

                <span className="cbz-ib-float f1" aria-hidden="true">
                    <i className="fa-solid fa-chart-line"></i>
                </span>
                <span className="cbz-ib-float f2" aria-hidden="true">
                    <i className="fa-solid fa-bullseye"></i>
                </span>
                <span className="cbz-ib-float f3" aria-hidden="true">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <span className="cbz-ib-float f4" aria-hidden="true">
                    <i className="fa-solid fa-paper-plane"></i>
                </span>

                {/* content */}
                <div className="cbz-ib-body">
                    <span className="cbz-ib-badge cbz-ib-in" style={{ "--d": "0.1s" }}>
                        <i></i> Cobizzer
                    </span>

                    <h1 className="cbz-ib-title cbz-ib-in" style={{ "--d": "0.25s" }}>
                        {firstPart && <>{firstPart} </>}
                        <span className="hl">{mainWord}</span>
                    </h1>

                    <nav
                        className="cbz-ib-crumb cbz-ib-in"
                        style={{ "--d": "0.45s" }}
                        aria-label="Breadcrumb"
                    >
                        <a href="/">
                            <i className="fa-solid fa-house"></i> Home
                        </a>
                        <span className="sep">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <p className="current" aria-current="page">{currentPage}</p>
                    </nav>
                </div>

                {/* scrolling strip */}
                <div className="cbz-ib-strip" aria-hidden="true">
                    <div className="cbz-ib-track">
                        {[0, 1].map((n) => (
                            <span key={n}>
                                {[...stripWords, ...stripWords].map((w, i) => (
                                    <React.Fragment key={i}>
                                        {w} <i>●</i>
                                    </React.Fragment>
                                ))}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerInnerSection;