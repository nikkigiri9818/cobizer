import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { blogs } from "../../Data/BlogPostData";

const BlogPostSection = ({singleBlog}) => {
         const [blogs, setBlogs] = useState([]);
         


useEffect(() => {

  axios
    .get("https://cms.nidhisinghmackupacademy.com/wp-json/wp/v2/posts?.embed")
    .then((response) => {
      setBlogs(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

}, []);

  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4 order-2 order-lg-1">
                    <div className="d-flex flex-column flex-md-row flex-lg-column gspace-5">
                        <div className="card recent-post">
                            <h4>Recent Blog</h4>
                            {blogs.map((blog) => (
                                <div
                                    className="d-flex flex-row w-100 gspace-1"
                                    key={blog.id}
                                >
                                    <div className="image-container">
                                    <img
                                        src={
                                blog._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url || ""
                            }
                                        alt={blog.title.rendered}
                                        className="img-fluid"
                                    />
                                    </div>
                                    <div className="d-grid">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color"></i>
                                            <span className="meta-data-post">{new Date(blog.date).toDateString()}</span>
                                        </div>
                                        <a href={`/blog/${blog.slug}`} className="blog-link-post">
                                            {blog.title.rendered}
                                        </a>
                                    </div>
                                </div>
                                ))}
                        </div>
                        <div className="cta-service-banner">
                            <div className="spacer"></div>
                            <h3 className="title-heading">Transform Your Business with Cobizzer!</h3>
                            <p>
                                Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                            </p>
                            <div className="link-wrapper">
                                <a href="/about">Read More</a>
                                <i className="fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-8 order-1 order-lg-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="post-image">
                            <img
                            src={
                                singleBlog._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url || ""
                            }
                            alt="Recent Post"
                            className="img-fluid"
                            />
                        </div>
                        <h3>{singleBlog.title.rendered}</h3>
                        <div className="underline-muted-full"></div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex flex-row align-items-center gspace-2">
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-calendar accent-color"></i>
                                    <span className="meta-data-post">{new Date(singleBlog.date).toDateString()}</span>
                                </div>
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-folder accent-color"></i>
                                    {/* <span className="meta-data-post">SEO</span> */}
                                </div>
                            </div>
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-user accent-color"></i>
                                {/* <span className="meta-data">Fox Creation</span> */}
                            </div>
                        </div>

                    <div
  dangerouslySetInnerHTML={{
    __html: singleBlog.content.rendered,
  }}
/>
                    {/* <div className="quote-container">
                        <div>
                        <div className="icon-wrapper">
                            <div className="icon-box">
                            <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        </div>
                        <p className="quote">
                            Nam finibus diam non orci lobortis volutpat. In non odio in enim scelerisque finibus. Praesent mattis accumsan metus ut ultrices.
                            Quisque tortor dui, facilisis at pharetra non, tincidunt a sem. quam diam. Morbi lobortis massa id porta maximus.
                        </p>
                        <div>
                        <h5>Adam Malik</h5>
                        <p className="quote-description">User Malik</p>
                        </div>
                    </div> */}
                    {/* <p>
                        Pellentesque ac velit libero. Phasellus sed elit sit amet diam ultricies dapibus. Curabitur pretium, eros ut posuere finibus, sem
                        mauris accumsan nulla, nec elementum metus turpis at nibh. Phasellus commodo lobortis semper. Fusce velit augue, efficitur id elit
                        ut, volutpat feugiat est. Cras ac mi orci. Maecenas nibh neque, faucibus sed lacus nec, elementum tempor dui. Fusce porta nunc vitae
                        finibus dapibus. In vulputate nisl id mollis fringilla.
                    </p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPostSection;