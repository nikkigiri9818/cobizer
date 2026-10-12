// import React from "react";
// import BlogCard from "../Card/BlogCard";
// import { useEffect, useState } from "react";
// import { getPosts } from "../../services/api"
// import axios from "axios";
// import { blogs } from "../Blogsdata";

// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// function BlogSection() {
//     const [posts, setPosts] = useState([]);
//     console.log(posts)


// useEffect(() => {

//   axios
//     .get("https://cms.nidhisinghmackupacademy.com/wp-json/wp/v2/posts?.embed")
//     .then((response) => {
//       setPosts(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// }, []);


//     return (
//         <div className="section">
//             <div className="hero-container">
//                 <div className="d-flex flex-column gspace-5">
//                     {/* <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 m-0">
//                         <div className="col col-lg-8 ps-0 pe-0">
//                             <AnimateOnScroll animation="fadeInLeft" speed="fast">
//                                 <div
//                                     className="d-flex flex-column gspace-2">
//                                     <div className="sub-heading">
//                                         <i className="fa-regular fa-circle-dot"></i>
//                                         <span>Insights & Trends</span>
//                                     </div>
//                                     <h2 className="title-heading">Latest Digital Marketing Strategies & Tips</h2>
//                                 </div>
//                             </AnimateOnScroll>
//                         </div>
//                         <div className="col col-lg-4 ps-0 pe-0">
//                             <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                 <div
//                                     className="d-flex flex-column gspace-2 justify-content-end h-100">
//                                     <p>
//                                         Explore our latest blog articles covering industry trends,
//                                         expert insights, and actionable strategies to elevate your
//                                         digital marketing game.
//                                     </p>
//                                     <div className="link-wrapper">
//                                         <a href="./blog">View All Articles</a>
//                                         <i className="fa-solid fa-circle-arrow-right"></i>
//                                     </div>
//                                 </div>
//                             </AnimateOnScroll>
//                         </div>
//                     </div> */}

//                     <div className="row row-cols-md-3 row-cols-1 grid-spacer-3">
//                         {/* {posts.map((blog) => (
//                             <BlogCard key={blog.id} blog={blog} />
//                         ))} */}


                        
//                     {blogs.map((blog) => (
//                         <BlogCard key={blog.id} blog={blog} />
//                     ))}
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BlogSection;



import React, { useEffect, useRef, useState } from "react";
import BlogCard from "../Card/BlogCard";
import { blogs } from "../Blogsdata";

function BlogSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // Section screen par aate hi animation chalu
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
        <div className={`section blog-sec ${visible ? "is-visible" : ""}`} ref={sectionRef}>
            <style>{`
                .blog-sec{
                    position: relative;
                    overflow: hidden;
                }

                /* background glow */
                .blog-sec::before,
                .blog-sec::after{
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(110px);
                    pointer-events: none;
                    z-index: 0;
                }
                .blog-sec::before{
                    width: 380px; height: 380px;
                    top: -120px; left: -100px;
                    background: var(--accent-color-6);
                    opacity: .45;
                }
                .blog-sec::after{
                    width: 320px; height: 320px;
                    bottom: -120px; right: -80px;
                    background: var(--accent-color-6);
                    opacity: .3;
                }
                .blog-sec .hero-container{
                    position: relative;
                    z-index: 1;
                }

                /* ---------- Header ---------- */
                .blog-head{
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: 40px;
                    align-items: end;
                }

                .blog-badge{
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
                .blog-badge i{
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    animation: blogPulse 2s infinite;
                }

                .blog-title{
                    margin: 16px 0 0;
                    font-size: clamp(32px, 4.2vw, 56px);
                    line-height: 1.15;
                    letter-spacing: -.5px;
                    color: var(--primary);
                }
                .blog-title .hl{
                    background: linear-gradient(90deg, var(--accent-color), #5EEAD4, var(--accent-color));
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: blogShine 6s linear infinite;
                }

                .blog-side{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: flex-start;
                }
                .blog-side p{
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.7;
                    color: var(--text-color);
                }

                .blog-link{
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 10px 10px 24px;
                    border-radius: 100px;
                    border: 1px solid var(--accent-color-3);
                    background: var(--accent-color-4);
                    color: var(--primary);
                    font-weight: 500;
                    transition: all .35s ease;
                    font-size:15px !important;
                }
                .blog-link span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px; height: 38px;
                    border-radius: 50%;
                    background: var(--accent-color);
                    color: #fff;
                    transition: transform .35s ease;
                }
                .blog-link:hover{
                    border-color: var(--accent-color);
                    box-shadow: var(--box-shadow-bottom-right);
                    color: var(--accent-color);
                }
                .blog-link:hover span{
                    transform: translateX(4px) rotate(-45deg);
                }

                .blog-divider{
                    height: 2px;
                    margin: 50px 0;
                    background: radial-gradient(at center, var(--accent-color) 0%, transparent 75%);
                    opacity: .5;
                }

                /* ---------- Cards ---------- */
                .blog-grid .card-blog{
                    border-radius: 24px;
                    transition: transform .4s ease, box-shadow .4s ease, border-color .4s ease;
                }
                .blog-grid .card-blog:hover{
                    transform: translateY(-10px);
                    border-color: var(--accent-color);
                    box-shadow: 0 20px 40px rgba(0,0,0,.25), var(--box-shadow-bottom-right-wide);
                }
                .blog-grid .blog-image{
                    border-radius: 24px 24px 0 0;
                }

                /* ---------- Reveal animation ---------- */
                .blog-reveal{
                    opacity: 0;
                    transform: translateY(32px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .blog-sec.is-visible .blog-reveal{
                    opacity: 1;
                    transform: none;
                }
                .blog-sec.is-visible .blog-head > div:nth-child(2){ transition-delay: .15s; }
                .blog-sec.is-visible .blog-divider{ transition-delay: .25s; }
                .blog-sec.is-visible .blog-grid > *:nth-child(1){ transition-delay: .3s; }
                .blog-sec.is-visible .blog-grid > *:nth-child(2){ transition-delay: .45s; }
                .blog-sec.is-visible .blog-grid > *:nth-child(3){ transition-delay: .6s; }

                .blog-grid > *{
                    opacity: 0;
                    transform: translateY(32px);
                    transition: opacity .8s cubic-bezier(.22,1,.36,1),
                                transform .8s cubic-bezier(.22,1,.36,1);
                }
                .blog-sec.is-visible .blog-grid > *{
                    opacity: 1;
                    transform: none;
                }

                @keyframes blogShine{ to{ background-position: 200% center; } }
                @keyframes blogPulse{
                    0%{ box-shadow: 0 0 0 0 var(--accent-color-6); }
                    70%{ box-shadow: 0 0 0 10px transparent; }
                    100%{ box-shadow: 0 0 0 0 transparent; }
                }

                @media (max-width: 991px){
                    .blog-head{ grid-template-columns: 1fr; gap: 24px; }
                    .blog-divider{ margin: 36px 0; }
                }

                @media (prefers-reduced-motion: reduce){
                    .blog-reveal, .blog-grid > *{
                        opacity: 1 !important;
                        transform: none !important;
                        transition: none !important;
                    }
                    .blog-title .hl, .blog-badge i{ animation: none; }
                }
            `}</style>

            <div className="hero-container">
                <div className={visible ? "is-visible-wrap" : ""}>
                    {/* ---------- Heading ---------- */}
                    <div className="blog-head">
                        <div className="blog-reveal">
                            <span className="blog-badge">
                                <i></i> Insights &amp; Trends
                            </span>
                            <h2 className="blog-title">
                                Latest <span className="hl">Digital Marketing</span> Strategies &amp; Tips
                            </h2>
                        </div>

                        <div className="blog-side blog-reveal">
                            <p>
                                Explore our latest articles on SEO, social media, ads and
                                growth. Practical, easy-to-apply ideas to help your business
                                get more leads and real results online.
                            </p>
                            <a href="./blog" className="blog-link">
                                View All Articles
                                <span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="blog-divider blog-reveal"></div>

                    {/* ---------- Cards ---------- */}
                    <div className="row row-cols-md-3 row-cols-1 grid-spacer-3 blog-grid">
                        {blogs.slice(0, 3).map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;