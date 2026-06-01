import React from "react";

const industries = [
  {
    title: "E-Commerce",
    icon: "🛒",
    desc: "Drive online sales, increase conversions, and maximize revenue growth.",
  },
  {
    title: "Healthcare",
    icon: "🏥",
    desc: "Reach patients through targeted campaigns and trusted digital experiences.",
  },
  {
    title: "Education",
    icon: "🎓",
    desc: "Boost enrollments and connect with prospective students effectively.",
  },
  {
    title: "Real Estate",
    icon: "🏠",
    desc: "Generate high-quality leads for residential and commercial properties.",
  },
  {
    title: "SaaS",
    icon: "💻",
    desc: "Acquire users, reduce CAC, and scale recurring revenue faster.",
  },
  {
    title: "Finance",
    icon: "💰",
    desc: "Build trust and attract qualified customers with compliant campaigns.",
  },
  {
    title: "Travel & Hospitality",
    icon: "✈️",
    desc: "Increase bookings and attract travelers through performance-driven ads.",
  },
  {
    title: "Local Businesses",
    icon: "📍",
    desc: "Generate local leads and grow your customer base in your area.",
  },
];

function IndustriesSection() {
  return (
    <section className="section industries-section">
      <div className="hero-container">
        <div className="text-center mb-5">
          <span className="section-tag">INDUSTRIES WE SERVE</span>
          <h2 className="section-heading">
            Helping Businesses Across <em>Every Industry</em>
          </h2>
          <p className="section-sub">
            Our performance marketing strategies are tailored to the unique
            challenges and goals of your industry.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;