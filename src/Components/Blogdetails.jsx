// import React, { useEffect, useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import { blogs } from "./Blogsdata";
// import HeadTitle from "./Head/HeadTitle";
// import BannerInnerSection from "./Banner/Inner";
// const TEAL = "#4ca99d";

// const css = `
// .blog-content{font-size:1.1rem;line-height:1.9;color:#333}
// .blog-content h2{font-size:1.75rem;font-weight:700;margin:2.4rem 0 1rem;color:#111;scroll-margin-top:100px}
// .blog-content h3{font-size:1.35rem;font-weight:700;margin:1.8rem 0 .8rem;color:#111}
// .blog-content p{margin-bottom:1.2rem}
// .blog-content ul,.blog-content ol{margin-bottom:1.4rem;padding-left:1.4rem}
// .blog-content li{margin-bottom:.5rem}
// .blog-content a{color:${TEAL};font-weight:600}
// .blog-content img{max-width:100%;height:auto;border-radius:1rem;margin:1.5rem 0}
// .blog-content blockquote{border-left:4px solid ${TEAL};background:#f4faf9;padding:1rem 1.4rem;border-radius:0 .75rem .75rem 0;margin:1.5rem 0}
// .bd-link:hover{color:${TEAL}!important}
// .bd-rel{transition:transform .2s,box-shadow .2s}
// .bd-rel:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.1)!important}
// `;

// const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// // adds ids to every <h2> and builds the table of contents
// function enhance(html) {
//     const toc = [];
//     const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (m, attrs, inner) => {
//         const text = inner.replace(/<[^>]+>/g, "").trim();
//         const id = `sec-${toc.length + 1}-${slugify(text)}`;
//         toc.push({ id, text });
//         return `<h2${attrs} id="${id}">${inner}</h2>`;
//     });
//     return { html: out, toc };
// }

// const fmt = (d) =>
//     new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
// const imgOf = (b) => b._embedded["wp:featuredmedia"][0].source_url;
// const catOf = (b) => b._embedded["wp:term"][0][0].name;

// export default function BlogDetail() {
//     const { slug } = useParams();
//     const idx = blogs.findIndex((b) => b.slug === slug);
//     const blog = blogs[idx];

//     const [progress, setProgress] = useState(0);
//     const [copied, setCopied] = useState(false);
//     const [subscribed, setSubscribed] = useState(false);

//     const { html, toc } = useMemo(
//         () => (blog ? enhance(blog.content.rendered) : { html: "", toc: [] }),
//         [blog]
//     );

//     useEffect(() => {
//         window.scrollTo(0, 0);
//         const onScroll = () => {
//             const h = document.documentElement;
//             const max = h.scrollHeight - h.clientHeight;
//             setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
//         };
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, [slug]);

//     if (!blog)
//         return (
//             <div className="container py-5 text-center">
//                 <h1 className="h3">Blog not found</h1>
//                 <a href="/blog" className="btn btn-dark mt-3">All blogs</a>
//             </div>
//         );

//     const title = blog.title.rendered;
//     const img = imgOf(blog);
//     const cat = catOf(blog);
//     const words = blog.content.rendered.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
//     const readTime = Math.max(1, Math.ceil(words / 200));
//     const url = encodeURIComponent(window.location.href);
//     const t = encodeURIComponent(title);
//     const prev = blogs[idx + 1];
//     const next = blogs[idx - 1];
//     const latest = blogs.filter((b) => b.slug !== slug).slice(0, 4);
//     const others = blogs.filter((b) => b.slug !== slug);
//     const related = [
//         ...others.filter((b) => catOf(b) === cat),
//         ...others.filter((b) => catOf(b) !== cat),
//     ].slice(0, 3);

//     const copy = () => {
//         navigator.clipboard.writeText(window.location.href);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//     };

//     return (
//         <>
//             <style>{css}</style>
//             <div className="position-fixed top-0 start-0" style={{ height: 4, width: `${progress}%`, background: TEAL, zIndex: 2000 }} />

//             <HeadTitle title={`${title} - Cobizzer`} />
//             <BannerInnerSection title={title} currentPage={cat} />

//             <div className="container py-5">
//                 <div className="row g-5">
//                     {/* ARTICLE */}
//                     <article className="col-lg-8">
//                         <div className="d-flex flex-wrap align-items-center gap-3 mb-4 text-secondary">
//                             <span className="text-white text-uppercase small px-3 py-2" style={{ background: TEAL }}>{cat}</span>
//                             <span><i className="fa-solid fa-calendar me-2" style={{ color: TEAL }}></i>{fmt(blog.date)}</span>
//                             <span><i className="fa-solid fa-clock me-2" style={{ color: TEAL }}></i>{readTime} min read</span>
//                         </div>

//                         {img && <img src={img} alt={title} className="img-fluid rounded-4 shadow-sm w-100 mb-4" />}

//                         {toc.length > 1 && (
//                             <nav className="border rounded-4 p-4 mb-4 bg-light" aria-label="Table of contents">
//                                 <strong className="d-block mb-2">In this article</strong>
//                                 <ol className="mb-0 ps-3">
//                                     {toc.map((s) => (
//                                         <li key={s.id} className="mb-1">
//                                             <a href={`#${s.id}`} className="bd-link text-dark text-decoration-none">{s.text}</a>
//                                         </li>
//                                     ))}
//                                 </ol>
//                             </nav>
//                         )}

//                         <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />

//                         {/* SHARE */}
//                         <div className="d-flex flex-wrap align-items-center gap-2 border-top border-bottom py-4 my-5">
//                             <strong className="me-2">Share:</strong>
//                             <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>Facebook</a>
//                             <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}&text=${t}`}>Twitter</a>
//                             <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>LinkedIn</a>
//                             <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://wa.me/?text=${t}%20${url}`}>WhatsApp</a>
//                             <button className="btn btn-dark btn-sm rounded-pill" onClick={copy}>{copied ? "Copied!" : "Copy link"}</button>
//                         </div>

//                         {/* AUTHOR */}
//                         <div className="d-flex gap-3 align-items-center bg-light rounded-4 p-4 mb-5">
//                             <div className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 64, height: 64, background: TEAL, fontSize: 24 }}>
//                                 {(blog.author || "Cobizzer Team").charAt(0)}
//                             </div>
//                             <div>
//                                 <small className="text-secondary">Written by</small>
//                                 <div className="fw-bold">{blog.author || "Cobizzer Team"}</div>
//                                 <small className="text-secondary">Digital marketing insights from our team in Jaipur.</small>
//                             </div>
//                         </div>

//                         {/* PREV / NEXT */}
//                         <div className="row g-3">
//                             {prev && (
//                                 <div className="col-md-6">
//                                     <a href={`/blog/${prev.slug}`} className="bd-link d-block h-100 p-3 border rounded-3 text-decoration-none text-dark">
//                                         <small className="text-secondary">← Previous</small>
//                                         <div className="fw-semibold">{prev.title.rendered}</div>
//                                     </a>
//                                 </div>
//                             )}
//                             {next && (
//                                 <div className="col-md-6">
//                                     <a href={`/blog/${next.slug}`} className="bd-link d-block h-100 p-3 border rounded-3 text-decoration-none text-dark text-md-end">
//                                         <small className="text-secondary">Next →</small>
//                                         <div className="fw-semibold">{next.title.rendered}</div>
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </article>

//                     {/* SIDEBAR */}
//                     <aside className="col-lg-4">
//                         <div className="position-sticky" style={{ top: 100 }}>
//                             <div className="card border-0 shadow-sm rounded-4 mb-4">
//                                 <div className="card-body p-4">
//                                     <h2 className="h5 fw-bold mb-3">Latest Articles</h2>
//                                     {latest.map((b) => (
//                                         <a key={b.id} href={`/blog/${b.slug}`} className="bd-link d-block text-dark text-decoration-none py-3 border-top">
//                                             <div className="fw-semibold lh-sm">{b.title.rendered}</div>
//                                             <small className="text-secondary">{fmt(b.date)}</small>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="card border-0 shadow-sm rounded-4 mb-4">
//                                 <div className="card-body p-4">
//                                     <h2 className="h5 fw-bold mb-2">Newsletter</h2>
//                                     <p className="text-secondary small">Get new articles and tips in your inbox.</p>
//                                     {subscribed ? (
//                                         <p className="fw-semibold mb-0" style={{ color: TEAL }}>Thanks for subscribing!</p>
//                                     ) : (
//                                         <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
//                                             <input type="email" required placeholder="Your email" className="form-control mb-2" />
//                                             <button type="submit" className="btn btn-dark w-100 rounded-pill">Subscribe</button>
//                                         </form>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="card border-0 rounded-4 text-white" style={{ background: TEAL }}>
//                                 <div className="card-body p-4">
//                                     <h2 className="h5 fw-bold">Want to grow your business online?</h2>
//                                     <p className="mb-3">Talk to our team for a free consultation.</p>
//                                     <a href="/contact" className="btn btn-light fw-semibold rounded-pill px-4">Contact Us</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </aside>
//                 </div>

//                 {/* RELATED */}
//                 {related.length > 0 && (
//                     <section className="mt-5 pt-4 border-top">
//                         <h2 className="h3 fw-bold mb-4">Related Articles</h2>
//                         <div className="row row-cols-1 row-cols-md-3 g-4">
//                             {related.map((b) => (
//                                 <div className="col" key={b.id}>
//                                     <article className="bd-rel card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
//                                         <div className="ratio ratio-16x9 bg-secondary-subtle">
//                                             {imgOf(b) && <img src={imgOf(b)} alt={b.title.rendered} className="object-fit-cover" loading="lazy" />}
//                                         </div>
//                                         <div className="card-body p-4">
//                                             <small className="text-uppercase" style={{ color: TEAL }}>{catOf(b)}</small>
//                                             <h3 className="h6 fw-bold lh-base mt-1 mb-2">
//                                                 <a href={`/blog/${b.slug}`} className="text-dark text-decoration-none stretched-link">{b.title.rendered}</a>
//                                             </h3>
//                                             <small className="text-secondary">{fmt(b.date)}</small>
//                                         </div>
//                                     </article>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}
//             </div>
//         </>
//     );
// }




import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeadTitle from "./Head/HeadTitle";
import BannerInnerSection from "./Banner/Inner";

const API = "https://cobizzer.com/wp-json/wp/v2/posts";
const TEAL = "#4ca99d";

const css = `
.blog-content{font-size:1.1rem;line-height:1.9;color:#333;overflow-wrap:anywhere}
.blog-content h2{font-size:1.75rem;font-weight:700;margin:2.4rem 0 1rem;color:#111;scroll-margin-top:100px}
.blog-content h3{font-size:1.35rem;font-weight:700;margin:1.8rem 0 .8rem;color:#111}
.blog-content p{margin-bottom:1.2rem}
.blog-content ul,.blog-content ol{margin-bottom:1.4rem;padding-left:1.4rem}
.blog-content li{margin-bottom:.5rem}
.blog-content a{color:${TEAL};font-weight:600}
.blog-content img{max-width:100%;height:auto;border-radius:1rem;margin:1.5rem 0}
.blog-content table{display:block;max-width:100%;overflow-x:auto}
.blog-content iframe{max-width:100%}
.blog-content blockquote{border-left:4px solid ${TEAL};background:#f4faf9;padding:1rem 1.4rem;border-radius:0 .75rem .75rem 0;margin:1.5rem 0}
.bd-link:hover{color:${TEAL}!important}
.bd-rel{transition:transform .2s,box-shadow .2s}
.bd-rel:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.1)!important}
`;

// WordPress sends HTML-encoded text (&#8217; etc.), so decode it to plain text
const text = (html = "") =>
    (new DOMParser().parseFromString(html, "text/html").body.textContent || "").trim();

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// adds ids to every <h2> and builds the table of contents
function enhance(html) {
    const toc = [];
    const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (m, attrs, inner) => {
        const label = text(inner);
        const existing = attrs.match(/\sid=["']([^"']+)["']/i);
        const id = existing ? existing[1] : `sec-${toc.length + 1}-${slugify(label)}`;
        toc.push({ id, text: label });
        return existing ? m : `<h2${attrs} id="${id}">${inner}</h2>`;
    });
    return { html: out, toc };
}

const fmt = (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const imgOf = (b) => b._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
const catOf = (b) => b._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
const authorOf = (b) => b._embedded?.author?.[0]?.name || "Cobizzer Team";

export default function BlogDetail() {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);
    const [list, setList] = useState([]);
    const [status, setStatus] = useState("loading"); // loading | ok | notfound | error
    const [progress, setProgress] = useState(0);
    const [copied, setCopied] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    // Fetch this blog (by slug) and the list of all blogs (for sidebar, related, prev/next)
    useEffect(() => {
        const controller = new AbortController();
        setStatus("loading");
        setBlog(null);
        window.scrollTo(0, 0);

        Promise.all([
            axios.get(API, { params: { slug, _embed: 1 }, signal: controller.signal }),
            axios.get(API, { params: { _embed: 1, per_page: 100 }, signal: controller.signal }),
        ])
            .then(([one, all]) => {
                setList(all.data);
                if (one.data.length) {
                    setBlog(one.data[0]);
                    setStatus("ok");
                } else {
                    setStatus("notfound");
                }
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                console.log(err);
                setStatus("error");
            });

        return () => controller.abort();
    }, [slug]);

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const max = h.scrollHeight - h.clientHeight;
            setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const { html, toc } = useMemo(
        () => (blog ? enhance(blog.content.rendered) : { html: "", toc: [] }),
        [blog]
    );

    if (status === "loading")
        return <p className="text-center py-5">Loading...</p>;

    if (status !== "ok")
        return (
            <div className="container py-5 text-center">
                <h1 className="h3">
                    {status === "notfound" ? "Blog not found" : "Could not load this blog"}
                </h1>
                <a href="/blog" className="btn btn-dark mt-3">All blogs</a>
            </div>
        );

    const title = text(blog.title.rendered);
    const img = imgOf(blog);
    const cat = catOf(blog);
    const author = authorOf(blog);
    const words = text(blog.content.rendered).split(/\s+/).filter(Boolean).length;
    const readTime = Math.max(1, Math.ceil(words / 200));
    const url = encodeURIComponent(window.location.href);
    const t = encodeURIComponent(title);

    const idx = list.findIndex((b) => b.slug === slug);
    const prev = idx >= 0 ? list[idx + 1] : null; // older
    const next = idx > 0 ? list[idx - 1] : null; // newer
    const others = list.filter((b) => b.slug !== slug);
    const latest = others.slice(0, 4);
    const related = [
        ...others.filter((b) => catOf(b) === cat),
        ...others.filter((b) => catOf(b) !== cat),
    ].slice(0, 3);

    const copy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <style>{css}</style>
            <div className="position-fixed top-0 start-0" style={{ height: 4, width: `${progress}%`, background: TEAL, zIndex: 2000 }} />

            <HeadTitle title={`${title} - Cobizzer`} />
            <BannerInnerSection title={title} currentPage={cat} />

            <div className="container py-5">
                <div className="row g-5">
                    {/* ARTICLE */}
                    <article className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center gap-3 mb-4 text-secondary">
                            <span className="text-white text-uppercase small px-3 py-2" style={{ background: TEAL }}>{cat}</span>
                            <span><i className="fa-solid fa-calendar me-2" style={{ color: TEAL }}></i>{fmt(blog.date)}</span>
                            <span><i className="fa-solid fa-clock me-2" style={{ color: TEAL }}></i>{readTime} min read</span>
                        </div>

                        {img && <img src={img} alt={title} className="img-fluid rounded-4 shadow-sm w-100 mb-4" />}

                        {toc.length > 1 && (
                            <nav className="border rounded-4 p-4 mb-4 bg-light" aria-label="Table of contents">
                                <strong className="d-block mb-2">In this article</strong>
                                <ol className="mb-0 ps-3">
                                    {toc.map((s) => (
                                        <li key={s.id} className="mb-1">
                                            <a href={`#${s.id}`} className="bd-link text-dark text-decoration-none">{s.text}</a>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        )}

                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />

                        {/* SHARE */}
                        <div className="d-flex flex-wrap align-items-center gap-2 border-top border-bottom py-4 my-5">
                            <strong className="me-2">Share:</strong>
                            <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>Facebook</a>
                            <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}&text=${t}`}>Twitter</a>
                            <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>LinkedIn</a>
                            <a className="btn btn-outline-dark btn-sm rounded-pill" target="_blank" rel="noreferrer" href={`https://wa.me/?text=${t}%20${url}`}>WhatsApp</a>
                            <button className="btn btn-dark btn-sm rounded-pill" onClick={copy}>{copied ? "Copied!" : "Copy link"}</button>
                        </div>

                        {/* AUTHOR */}
                        <div className="d-flex gap-3 align-items-center bg-light rounded-4 p-4 mb-5">
                            <div className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 64, height: 64, background: TEAL, fontSize: 24 }}>
                                {author.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <small className="text-secondary">Written by</small>
                                <div className="fw-bold">{author}</div>
                                <small className="text-secondary">Digital marketing insights from our team in Jaipur.</small>
                            </div>
                        </div>

                        {/* PREV / NEXT */}
                        <div className="row g-3">
                            {prev && (
                                <div className="col-md-6">
                                    <a href={`/blog/${prev.slug}`} className="bd-link d-block h-100 p-3 border rounded-3 text-decoration-none text-dark">
                                        <small className="text-secondary">← Previous</small>
                                        <div className="fw-semibold">{text(prev.title.rendered)}</div>
                                    </a>
                                </div>
                            )}
                            {next && (
                                <div className="col-md-6">
                                    <a href={`/blog/${next.slug}`} className="bd-link d-block h-100 p-3 border rounded-3 text-decoration-none text-dark text-md-end">
                                        <small className="text-secondary">Next →</small>
                                        <div className="fw-semibold">{text(next.title.rendered)}</div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </article>

                    {/* SIDEBAR */}
                    <aside className="col-lg-4">
                        <div className="position-sticky" style={{ top: 100 }}>
                            {latest.length > 0 && (
                                <div className="card border-0 shadow-sm rounded-4 mb-4">
                                    <div className="card-body p-4">
                                        <h2 className="h5 fw-bold mb-3">Latest Articles</h2>
                                        {latest.map((b) => (
                                            <a key={b.id} href={`/blog/${b.slug}`} className="bd-link d-block text-dark text-decoration-none py-3 border-top">
                                                <div className="fw-semibold lh-sm">{text(b.title.rendered)}</div>
                                                <small className="text-secondary">{fmt(b.date)}</small>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="card border-0 shadow-sm rounded-4 mb-4">
                                <div className="card-body p-4">
                                    <h2 className="h5 fw-bold mb-2">Newsletter</h2>
                                    <p className="text-secondary small">Get new articles and tips in your inbox.</p>
                                    {subscribed ? (
                                        <p className="fw-semibold mb-0" style={{ color: TEAL }}>Thanks for subscribing!</p>
                                    ) : (
                                        <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                                            <input type="email" required placeholder="Your email" className="form-control mb-2" />
                                            <button type="submit" className="btn btn-dark w-100 rounded-pill">Subscribe</button>
                                        </form>
                                    )}
                                </div>
                            </div>

                            <div className="card border-0 rounded-4 text-white" style={{ background: TEAL }}>
                                <div className="card-body p-4">
                                    <h2 className="h5 fw-bold">Want to grow your business online?</h2>
                                    <p className="mb-3">Talk to our team for a free consultation.</p>
                                    <a href="/contact" className="btn btn-light fw-semibold rounded-pill px-4">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* RELATED */}
                {related.length > 0 && (
                    <section className="mt-5 pt-4 border-top">
                        <h2 className="h3 fw-bold mb-4">Related Articles</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {related.map((b) => (
                                <div className="col" key={b.id}>
                                    <article className="bd-rel card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
                                        <div className="ratio ratio-16x9 bg-secondary-subtle">
                                            {imgOf(b) && <img src={imgOf(b)} alt={text(b.title.rendered)} className="object-fit-cover" loading="lazy" />}
                                        </div>
                                        <div className="card-body p-4">
                                            <small className="text-uppercase" style={{ color: TEAL }}>{catOf(b)}</small>
                                            <h3 className="h6 fw-bold lh-base mt-1 mb-2">
                                                <a href={`/blog/${b.slug}`} className="text-dark text-decoration-none stretched-link">{text(b.title.rendered)}</a>
                                            </h3>
                                            <small className="text-secondary">{fmt(b.date)}</small>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}