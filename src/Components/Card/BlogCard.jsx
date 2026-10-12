import React from "react";

const strip = (html = "") => html.replace(/<[^>]+>/g, "").replace(/\s*\[…\]\s*$/, "…").trim();

export default function BlogCard({ blog }) {
    const img = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    const category = blog._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
    const count = blog.comment_count || 0;
    const comments = count === 0 ? "No Comments" : count === 1 ? "1 Comment" : `${count} Comments`;
    const date = new Date(blog.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="col">
            <article className="card h-100 border-0 rounded-0 bg-light overflow-hidden position-relative">
                <div className="ratio ratio-16x9 bg-secondary-subtle">
                    {img && (
                        <img
                            src={img}
                            alt={strip(blog.title.rendered)}
                            loading="lazy"
                            className="object-fit-cover"
                        />
                    )}
                </div>
                <span
                    className="position-absolute top-0 start-0 m-4 px-3 py-2 text-white text-uppercase"
                    style={{ backgroundColor: "#4ca99d" }}
                >
                    {category}
                </span>

                <div className="card-body p-4">
                    <h3 className="h4 fw-bold  mb-3">
                        <a
                            href={`/blog/${blog.slug}`}
                            className="text-dark text-decoration-none stretched-link"
                        >
                            {strip(blog.title.rendered)}
                        </a>
                    </h3>
                    <p
                        className="text-secondary mb-0"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {strip(blog.excerpt.rendered)}
                    </p>
                </div>

                <div className="card-footer bg-transparent text-secondary px-4 py-3 d-flex gap-2">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{comments}</span>
                </div>
            </article>
        </div>
    );
}