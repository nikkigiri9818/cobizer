// Local images: import them here (adjust the paths to your project), e.g.
// import aeoImg from "../assets/blog/aeo-vs-seo.png";
// Or use a full URL string: "https://example.com/aeo.png"
// Or a file inside /public: "/images/blog/aeo-vs-seo.png"

const make = ({ id, slug, title, date, category, image = "", excerpt = "", content }) => ({
    id,
    slug,
    date,
    title: { rendered: title },
    excerpt: { rendered: excerpt ? `<p>${excerpt}</p>` : "" },
    content: { rendered: content },
    _embedded: {
        "wp:featuredmedia": [{ source_url: image }],
        "wp:term": [[{ name: category }]],
    },
});

export const blogs = [
    make({
        id: 1,
        slug: "aeo-vs-seo-difference-between-aeo-and-seo-and-what-matters-in-2026",
        title: "AEO vs SEO: Difference Between AEO and SEO and What Matters in 2026",
        date: "2026-01-30",
        category: "Digital Marketing",
        image: "/images/blog/aeo-vs-seo.png", // <- your image here
        excerpt:
            "It's not enough to just type terms into Google and click blue links anymore. People browse the web differently now, and search engines have changed with them.",
        content:
            "<h2>What is SEO?</h2><p>SEO helps your pages rank in search results through keywords, quality content, backlinks and technical health.</p><h2>What is AEO?</h2><p>AEO structures your content so AI assistants and search features can pull a direct answer from it.</p><h2>What matters in 2026</h2><p>Use both. Keep technical SEO strong, add FAQs and schema, and write in plain question-and-answer language.</p>",
    }),
    make({
        id: 2,
        slug: "seo-strategies-in-2026-how-businesses-can-rank-higher",
        title: "SEO Strategies in 2026: How Businesses Can Rank Higher and Get More Traffic",
        date: "2026-01-29",
        category: "Digital Marketing",
        image: "/images/blog/seo-strategies-2026.png",
        excerpt:
            "Ranking on Google is not as easy in 2026 as it used to be. Adding keywords and building backlinks is no longer enough.",
        content: "<p>Add the full article text here.</p>",
    }),
    make({
        id: 3,
        slug: "top-10-best-performance-marketing-agencies-in-jaipur-2",
        title: "Top 10 Best Performance Marketing Agencies In Jaipur",
        date: "2025-04-05",
        category: "Performance Marketing",
        image: "/images/blog/performance-marketing-jaipur.png",
        excerpt:
            "As the market becomes more competitive with new technologies, businesses are always looking for better ways to expand.",
        content: "<p>Add the full article text here.</p>",
    }),
    make({
        id: 4,
        slug: "best-seo-company-in-jaipur",
        title: "Best SEO Company in Jaipur: Achieve Higher Rankings on Google",
        date: "2025-04-04",
        category: "SEO Service",
        image: "/images/blog/best-seo-company-jaipur.png",
        content: "<p>Add the full article text here.</p>",
    }),
    make({
        id: 5,
        slug: "graphic-designing-company-in-jaipur-2",
        title: "Stunning Visuals by DIGIROKET, a Trusted Graphic Designing Company in Jaipur",
        date: "2025-03-22",
        category: "Graphic Designing",
        image: "/images/blog/graphic-designing-jaipur.png",
        content: "<p>Add the full article text here.</p>",
    }),
    make({
        id: 6,
        slug: "social-media-agency-in-jaipur",
        title: "Social Media Management Services by Jaipur's Top Agency",
        date: "2025-02-27",
        category: "Social Media Marketing",
        image: "/images/blog/social-media-agency-jaipur.png",
        content: "<p>Add the full article text here.</p>",
    }),
];