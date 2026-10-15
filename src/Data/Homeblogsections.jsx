import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://cobizzer.com/wp-json/wp/v2/posts";

// WordPress sends HTML-encoded text (&#8217; etc.), so decode it to plain text
const text = (html = "") =>
    (new DOMParser().parseFromString(html, "text/html").body.textContent || "")
        .replace(/\s*\[…\]\s*$/, "…")
        .trim();

const fmt = (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default function HomeBlogSection() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState("loading"); // loading | ok | error

    // Fetch only the latest 3 blogs
    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(API, { params: { _embed: 1, per_page: 3 }, signal: controller.signal })
            .then((res) => {
                setPosts(res.data);
                setStatus("ok");
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                console.log(err);
                setStatus("error");
            });
        return () => controller.abort();
    }, []);

    // Reveal animation when the section scrolls into view
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className={`hb-sec ${visible ? "is-visible" : ""}`} ref={ref}>
            <style>{`
                .hb-sec{--hb-accent:var(--accent-color,#4ca99d);position:relative;padding:80px 0}
                .hb-wrap{max-width:1200px;margin:0 auto;padding:0 20px}

                .hb-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:40px}
                .hb-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:100px;background:rgba(76,169,157,.12);color:var(--hb-accent);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.4px}
                .hb-title{margin:14px 0 0;font-size:clamp(28px,4vw,46px);line-height:1.2;font-weight:700}
                .hb-all{display:inline-flex;align-items:center;gap:10px;padding:10px 10px 10px 22px;border:1px solid var(--hb-accent);border-radius:100px;color:inherit;font-weight:600;text-decoration:none;transition:all .3s ease}
                .hb-all span{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:var(--hb-accent);color:#fff;transition:transform .3s ease}
                .hb-all:hover{color:var(--hb-accent);box-shadow:0 6px 18px rgba(76,169,157,.25)}
                .hb-all:hover span{transform:translateX(4px)}

                .hb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
                .hb-card{position:relative;display:flex;flex-direction:column;border-radius:20px;overflow:hidden;background:#f7f9fb;border:1px solid rgba(0,0,0,.06);transition:transform .35s ease,box-shadow .35s ease,opacity .7s ease;opacity:0;transform:translateY(30px)}
                .is-visible .hb-card{opacity:1;transform:none}
                .is-visible .hb-card:nth-child(2){transition-delay:.12s}
                .is-visible .hb-card:nth-child(3){transition-delay:.24s}
                .hb-card:hover{transform:translateY(-8px);box-shadow:0 18px 36px rgba(0,0,0,.12)}

                .hb-media{position:relative;aspect-ratio:16/9;background:linear-gradient(135deg,#e9edf2,#cfd8e3);overflow:hidden}
                .hb-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease}
                .hb-card:hover .hb-media img{transform:scale(1.06)}
                .hb-cat{position:absolute;top:16px;left:16px;padding:6px 14px;background:var(--hb-accent);color:#fff;font-size:13px;text-transform:uppercase;border-radius:6px}

                .hb-body{padding:24px 24px 18px;flex:1}
                .hb-card-title{margin:0 0 12px;font-size:20px;line-height:1.4;font-weight:700}
                .hb-card-title a{color:#222;text-decoration:none}
                .hb-card-title a::after{content:"";position:absolute;inset:0}
                .hb-card:hover .hb-card-title a{color:var(--hb-accent)}
                .hb-excerpt{margin:0;color:#6b7280;font-size:15px;line-height:1.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
                .hb-foot{padding:14px 24px;border-top:1px solid #e5e8ec;color:#8a919b;font-size:14px}

                .hb-state{text-align:center;padding:40px 0;color:#6b7280}
                .hb-skel{height:340px;border-radius:20px;background:linear-gradient(90deg,#eef1f5 25%,#f7f9fb 50%,#eef1f5 75%);background-size:200% 100%;animation:hbShimmer 1.4s infinite}
                @keyframes hbShimmer{to{background-position:-200% 0}}

                @media (max-width:991px){.hb-grid{grid-template-columns:repeat(2,1fr)}}
                @media (max-width:640px){.hb-sec{padding:56px 0}.hb-grid{grid-template-columns:1fr}}
                @media (prefers-reduced-motion:reduce){.hb-card{opacity:1!important;transform:none!important;transition:none!important}.hb-skel{animation:none}}
            `}</style>

            <div className="hb-wrap">
                <div className="hb-head">
                    <div>
                        <span className="hb-badge">Insights &amp; Trends</span>
                        <h2 className="hb-title">Latest Digital Marketing Tips</h2>
                    </div>
                    <Link to="/blog" className="hb-all">
                        View All
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                </div>

                {status === "loading" && (
                    <div className="hb-grid">
                        {[1, 2, 3].map((n) => <div className="hb-skel" key={n} />)}
                    </div>
                )}

                {status === "error" && (
                    <p className="hb-state">Blogs could not be loaded right now. Please try again later.</p>
                )}

                {status === "ok" && posts.length === 0 && <p className="hb-state">No blogs found.</p>}

                {status === "ok" && posts.length > 0 && (
                    <div className="hb-grid">
                        {posts.map((p) => {
                            const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                            const cat = p._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
                            const title = text(p.title.rendered);
                            return (
                                <article className="hb-card" key={p.id}>
                                    <div className="hb-media">
                                        {img && <img src={img} alt={title} loading="lazy" />}
                                        <span className="hb-cat">{cat}</span>
                                    </div>
                                    <div className="hb-body">
                                        <h3 className="hb-card-title">
                                            <Link to={`/blog/${p.slug}`}>{title}</Link>
                                        </h3>
                                        <p className="hb-excerpt">{text(p.excerpt.rendered)}</p>
                                    </div>
                                    <div className="hb-foot">{fmt(p.date)}</div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}