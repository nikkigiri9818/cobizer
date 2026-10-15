
import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

/* ===== CSS (isi file mein; HMR par bhi update hoti hai) ===== */
const css = `
.card-service-wrapper .col { display: flex; }
.card-service-wrapper .col > * { display: flex; width: 100%; }

.card.card-service {
  position: relative;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;                       /* padding ab neeche .card-service-body mein hai */
  text-align: left;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}

/* TOP ~30%: sirf animated image */
.card-service-art {
  flex: 0 0 auto;
  width: 100%;
  aspect-ratio: 5 / 2;              /* card ki height ka lagbhag 30%; slim chahiye toh 3 / 1 */
  background-image: var(--card-art);
  background-repeat: no-repeat;
  background-position: center 58%;
  background-size: 92% auto;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(#000 70%, transparent);
          mask-image: linear-gradient(#000 70%, transparent);
}

/* NEECHE: saara content */
.card-service-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4px 28px 28px;
}
.card-service-body p { flex: 1; }
.card-service-body .btn { margin-top: auto; align-self: stretch; }

@media (hover: hover) {
  .card.card-service:hover {
    transform: translateY(-6px);
    border-color: #1f8f85;
    box-shadow: 0 18px 40px -18px rgba(31, 143, 133, .5);
  }
}
@media (max-width: 575px) {
  .card-service-body { padding: 4px 20px 22px; }
}
@media (prefers-reduced-motion: reduce) {
  .card.card-service { transition: none; }
  .card.card-service:hover { transform: none; }
}
`;

if (typeof document !== "undefined") {
    let style = document.getElementById("service-card-css");
    if (!style) {
        style = document.createElement("style");
        style.id = "service-card-css";
        document.head.appendChild(style);
    }
    style.textContent = css;
}

/* ===== Component =====
   image -> top art (animated SVG)
   icon  -> chhota icon box (sirf tab, jab `image` alag se diya ho)
   Sirf `icon` diya ho (SVG), toh wahi top art banta hai aur khali icon box nahi dikhta. */
const ServiceCard = ({ icon, image, title, content, link = "#", speed = "" }) => {
    const art = image || icon;
    const showIcon = Boolean(image && icon);

    return (
        <>
            <AnimateOnScroll animation="fadeInLeft" speed={speed}>
                <div className="card card-service">
                    {art && (
                        <div
                            className="card-service-art"
                            style={{ "--card-art": `url("${art}")` }}
                            aria-hidden="true"
                        />
                    )}

                    <div className="card-service-body">
                        <div className="card-service-head d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center mb-3">
                            {showIcon && (
                                <div>
                                    <div className="service-icon-wrapper">
                                        <div className="service-icon">
                                            <img src={icon} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="service-title">
                                <h4 style={{fontSize:"26px"}}>{title}</h4>
                            </div>
                        </div>

                        <p>{content}</p>

                        <a href={link} className="btn btn-accent" aria-label={`View details: ${title}`}>
                            <div className="btn-title">
                                <span>View Details</span>
                            </div>
                            <div className="icon-circle">
                                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </AnimateOnScroll>
        </>
    );
};

export default ServiceCard;