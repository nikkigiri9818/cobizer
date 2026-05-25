import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BlogCard({ blog }) {
    const handleClick = () => {
        window.location.href = `/blog/${blog.slug}`;
    };

    return (
        <div className="col">
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div className="card card-blog" onClick={handleClick}>

                    {/* IMAGE */}
                    <div className="blog-image">
                        <img
                            src={
                                blog._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url || ""
                            }
                            alt="Blog"
                        />
                    </div>

                    <div className="card-body">

                        {/* DATE */}
                        <div className="d-flex flex-row gspace-2">
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-calendar accent-color"></i>
                                <span className="meta-data">
                                    {new Date(blog.date).toDateString()}
                                </span>
                            </div>

                            {/* CATEGORY (basic fallback) */}
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-folder accent-color"></i>
                                <span className="meta-data">
                                    Blog
                                </span>
                            </div>
                        </div>

                        {/* TITLE */}
                        <a href={`/blog/${blog.slug}`} className="blog-link">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blog.title.rendered,
                                }}
                            />
                        </a>

                        {/* EXCERPT */}
                        <p
                            dangerouslySetInnerHTML={{
                                __html: blog.excerpt.rendered,
                            }}
                        />

                        <a href={`/blog/${blog.slug}`} className="read-more">
                            Read More
                        </a>

                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BlogCard;