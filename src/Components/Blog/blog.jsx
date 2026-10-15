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
//     .get("https://cms.cobizzer.com/wp-json/wp/v2/posts?.embed")
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





import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../Card/BlogCard";
import { blogs as fallbackBlogs } from "../Blogsdata"; // used only if the API fails
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// cms.cobizzer.com does not resolve. The WordPress site is on cobizzer.com
const API = "https://cobizzer.com/wp-json/wp/v2/posts";

function BlogSection() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        async function loadAll() {
            try {
                // WordPress gives max 100 posts per request, so loop through all pages
                let page = 1;
                let totalPages = 1;
                let all = [];
                do {
                    const res = await axios.get(API, {
                        params: { _embed: 1, per_page: 100, page },
                        signal: controller.signal,
                    });
                    totalPages = Number(res.headers["x-wp-totalpages"]) || 1;
                    all = all.concat(res.data);
                    page++;
                } while (page <= totalPages);
                setPosts(all);
            } catch (err) {
                if (axios.isCancel(err)) return;
                console.log(err);
                setPosts(fallbackBlogs); // show static blogs if the API is unreachable
            } finally {
                setLoading(false);
            }
        }

        loadAll();
        return () => controller.abort();
    }, []);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    {/* Heading */}
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 m-0">
                        <div className="col col-lg-8 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInLeft" speed="fast">
                                <div className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>Insights &amp; Trends</span>
                                    </div>
                                    <h2 className="title-heading">
                                        Latest Digital Marketing Strategies &amp; Tips
                                    </h2>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col col-lg-4 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                                    <p>
                                        Explore our latest blog articles covering industry trends,
                                        expert insights, and actionable strategies to elevate your
                                        digital marketing game.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* All blogs */}
                    {loading ? (
                        <p className="text-center">Loading blogs...</p>
                    ) : (
                        <div className="row row-cols-md-3 row-cols-1 grid-spacer-3">
                            {posts.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogSection;


