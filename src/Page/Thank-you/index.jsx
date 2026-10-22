import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const thankYouStyles = `
  .ty-wrapper {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
  }
  .ty-card {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    padding: 48px 32px;
    text-align: center;
    animation: tyRise 0.6s ease;
  }
  .ty-check {
    width: 96px;
    height: 96px;
    margin: 0 auto 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: teal;
    animation: tyPop 0.6s ease 0.2s both;
  }
  .ty-check svg {
    width: 52px;
    height: 52px;
  }
  .ty-check path {
    stroke: #fff;
    stroke-width: 4;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: tyDraw 0.6s ease 0.6s forwards;
  }
  .ty-card .title-heading {
    margin-bottom: 12px;
    font-size:42px !important;
  }
  .ty-card p {
    margin-bottom: 24px;
    font-size:17px !important;
  }
  .ty-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    margin-bottom: 28px;
  }
  .ty-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 28px;
    padding-top: 22px;
    border-top: 1px solid rgba(128, 128, 128, 0.25);
  }
  .ty-contact a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }
  .ty-contact i {
    color: var(--accent-color, #ff6a00);
  }
  @keyframes tyRise {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes tyPop {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes tyDraw {
    to { stroke-dashoffset: 0; }
  }
  @media (max-width: 575px) {
    .ty-card { padding: 36px 20px; }
    .ty-buttons .btn { width: 100%; justify-content: center; }
  }
`;

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You | Cobizzer";
    window.scrollTo(0, 0);

    // Thank-you page search me index na ho
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <div className="section">
      <style>{thankYouStyles}</style>

      <div className="hero-container ty-wrapper">
        <div className="card ty-card">
          <div className="ty-check">
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <path d="M14 27 L23 36 L39 17" />
            </svg>
          </div>

          <h1 className="title-heading">Thank You!</h1>
          <p>
            Your message has been sent successfully. Our team will review your
            requirement and get back to you shortly.
          </p>

          <div className="ty-buttons">
            <Link to="/" className="btn btn-accent">
              <span className="btn-title">
                <span>Back to Home</span>
              </span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            <Link to="/blog" className="btn btn-accent">
              <span className="btn-title">
                <span>Read Our Blog</span>
              </span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>

          <div className="ty-contact">
            <a href="tel:7220018888">
              <i className="fa-solid fa-phone-volume"></i>
              <span>+91- 7220018888</span>
            </a>
            <a href="mailto:info@cobizzer.com">
              <i className="fa-solid fa-envelope"></i>
              <span>info@cobizzer.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;