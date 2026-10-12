import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../Blogsdata";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog)
        return (
            <p className="text-center py-5">
                Blog not found. <a href="/blog">All blogs</a>
            </p>
        );

    const img = blog._embedded["wp:featuredmedia"][0].source_url;
    const cat = blog._embedded["wp:term"][0][0].name;

    return (
        <article className="container blog-detail py-5">
            <a href="/blog">All blogs</a>
            <p className="meta-data mt-3">{cat}</p>
            <h1>{blog.title.rendered}</h1>
            <p className="meta-data">{new Date(blog.date).toDateString()}</p>
            {img && <img src={img} alt={blog.title.rendered} className="img-fluid my-4" />}
            <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
        </article>
    );
}