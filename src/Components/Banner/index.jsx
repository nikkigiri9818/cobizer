


// import React, { useEffect, useRef } from "react";

// function BannerHomeSection() {
//     const playerRef = useRef(null);
//     const videoContainerRef = useRef(null);

//     useEffect(() => {
//         const VIDEO_ID = "P68V3iH4TeE";

//         function setYoutubeSize() {
//             const container = videoContainerRef.current;
//             if (!container || !playerRef.current?.getIframe) return;

//             const w = container.offsetWidth;
//             const h = container.offsetHeight;
//             const ratio = 16 / 9;
//             const newWidth = w / h > ratio ? w : h * ratio;
//             const newHeight = w / h > ratio ? w / ratio : h;

//             const iframe = playerRef.current.getIframe();
//             iframe.style.width = `${newWidth}px`;
//             iframe.style.height = `${newHeight}px`;
//         }

//         function initPlayer() {
//             if (playerRef.current) return;
//             playerRef.current = new window.YT.Player("banner-video-background", {
//                 videoId: VIDEO_ID,
//                 playerVars: {
//                     autoplay: 1,
//                     controls: 0,
//                     mute: 1,
//                     loop: 1,
//                     playlist: VIDEO_ID,
//                     rel: 0,
//                     enablejsapi: 1,
//                     disablekb: 1,
//                     modestbranding: 1,
//                     iv_load_policy: 3,
//                     origin: window.location.origin,
//                 },
//                 events: {
//                     onReady: (e) => {
//                         e.target.playVideo();
//                         setYoutubeSize();
//                         window.addEventListener("resize", setYoutubeSize);
//                     },
//                     onStateChange: (e) => {
//                         if (e.data === window.YT.PlayerState.ENDED) {
//                             playerRef.current.playVideo();
//                         }
//                     },
//                 },
//             });
//         }

//         if (window.YT && window.YT.Player) {
//             initPlayer();
//         } else {
//             window.onYouTubeIframeAPIReady = initPlayer;
//             if (!document.getElementById("yt-iframe-api")) {
//                 const tag = document.createElement("script");
//                 tag.id = "yt-iframe-api";
//                 tag.src = "https://www.youtube.com/iframe_api";
//                 document.head.appendChild(tag);
//             }
//         }

//         return () => {
//             window.removeEventListener("resize", setYoutubeSize);
//         };
//     }, []);

//     return (
//         <div className="section-banner">
//             <div ref={videoContainerRef} className="banner-video-container keep-dark">
//                 <div id="banner-video-background"></div>

//                 <span className="hero-glow hero-glow-1"></span>
//                 <span className="hero-glow hero-glow-2"></span>

//                 <div className="hero-container">
//                     <div className="hero-content">
//                         <span className="hero-badge hero-anim" style={{ "--d": "0.1s" }}>
//                             <i className="hero-dot"></i> Digital Marketing Agency · Jaipur
//                         </span>

//                         <h1 className="hero-title hero-anim" style={{ "--d": "0.25s" }}>
//                             Cobizzer - Leading Digital{" "}
//                             <span className="hl"> Marketing Agency </span> in Jaipur
//                         </h1>

//                         <p className="hero-text hero-anim" style={{ "--d": "0.45s" }}>
//                            Most of the digital marketing firms are all about likes and shares. An exclusive Digital Marketing Agency in Jaipur, Cobizzer is dedicated to delivering measurable outcomes, from growth and leads to conversions and revenue to help businesses improve their online presence and achieve tangible results. Being a reliable digital marketing agency in Jaipur, we devise strategies that help in achieving long term business growth.

//                         </p>

//                         <div className="hero-actions hero-anim" style={{ "--d": "0.65s" }}>
//                             <a href="./about" className="btn btn-accent">
//                                 <div className="btn-title">
//                                     <span>Get Started</span>
//                                 </div>
//                                 <div className="icon-circle">
//                                     <i className="fa-solid fa-arrow-right"></i>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BannerHomeSection;



import React, { useEffect, useRef, useState } from "react";

const bannerCss = `
.hero-text-wrap {
  max-width: 620px;
}

.hero-text-wrap .hero-text {
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.hero-text-wrap.expanded .hero-text {
  -webkit-line-clamp: unset;
  display: block;
}

.hero-readmore {
  background: none;
  border: none;
  padding: 0;
  margin-top: 10px;
  color: #5eead4;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.hero-readmore i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.hero-text-wrap.expanded .hero-readmore i {
  transform: rotate(180deg);
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0 6px;
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(94, 234, 212, 0.35);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.hero-chip i {
  color: #5eead4;
  font-size: 13px;
}

@media screen and (max-width: 767px) {
  .hero-text-wrap .hero-text {
    -webkit-line-clamp: 4;
  }

  .hero-chips {
    gap: 8px;
    // justify-content: center;
  }

  .hero-chip {
    padding: 7px 12px;
    font-size: 12px;
  }

  .hero-readmore {
    font-size: 13px;
  }
}
`;

function BannerHomeSection() {
    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const VIDEO_ID = "P68V3iH4TeE";

        function setYoutubeSize() {
            const container = videoContainerRef.current;
            if (!container || !playerRef.current?.getIframe) return;

            const w = container.offsetWidth;
            const h = container.offsetHeight;
            const ratio = 16 / 9;
            const newWidth = w / h > ratio ? w : h * ratio;
            const newHeight = w / h > ratio ? w / ratio : h;

            const iframe = playerRef.current.getIframe();
            iframe.style.width = `${newWidth}px`;
            iframe.style.height = `${newHeight}px`;
        }

        function initPlayer() {
            if (playerRef.current) return;
            playerRef.current = new window.YT.Player("banner-video-background", {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    mute: 1,
                    loop: 1,
                    playlist: VIDEO_ID,
                    rel: 0,
                    enablejsapi: 1,
                    disablekb: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    origin: window.location.origin,
                },
                events: {
                    onReady: (e) => {
                        e.target.playVideo();
                        setYoutubeSize();
                        window.addEventListener("resize", setYoutubeSize);
                    },
                    onStateChange: (e) => {
                        if (e.data === window.YT.PlayerState.ENDED) {
                            playerRef.current.playVideo();
                        }
                    },
                },
            });
        }

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            window.onYouTubeIframeAPIReady = initPlayer;
            if (!document.getElementById("yt-iframe-api")) {
                const tag = document.createElement("script");
                tag.id = "yt-iframe-api";
                tag.src = "https://www.youtube.com/iframe_api";
                document.head.appendChild(tag);
            }
        }

        return () => {
            window.removeEventListener("resize", setYoutubeSize);
        };
    }, []);

    return (
        <div className="section-banner">
            <style>{bannerCss}</style>

            <div ref={videoContainerRef} className="banner-video-container keep-dark">
                <div id="banner-video-background"></div>

                <span className="hero-glow hero-glow-1"></span>
                <span className="hero-glow hero-glow-2"></span>

                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-badge hero-anim" style={{ "--d": "0.1s" }}>
                            <i className="hero-dot"></i> Digital Marketing Agency · Jaipur
                        </span>

                        <h1 className="hero-title hero-anim" style={{ "--d": "0.25s" }}>
                            Cobizzer - Leading Digital{" "}
                            <span className="hl"> Marketing Agency </span> in Jaipur
                        </h1>

                        <div
                            className={`hero-text-wrap hero-anim ${expanded ? "expanded" : ""}`}
                            style={{ "--d": "0.45s" }}
                        >
                            <p className="hero-text">
                                Most of the digital marketing firms are all about likes and shares. An exclusive Digital Marketing Agency in Jaipur, Cobizzer is dedicated to delivering measurable outcomes, from growth and leads to conversions and revenue to help businesses improve their online presence and achieve tangible results. Being a reliable digital marketing agency in Jaipur, we devise strategies that help in achieving long term business growth.
                            </p>
                            <button
                                type="button"
                                className="hero-readmore"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {expanded ? "Read Less" : "Read More"}
                                <i className="fa-solid fa-angle-down"></i>
                            </button>
                        </div>

                        <div className="hero-chips hero-anim" style={{ "--d": "0.55s" }}>
                            <span className="hero-chip">
                                <i className="fa-solid fa-arrow-trend-up"></i> Growth
                            </span>
                            <span className="hero-chip">
                                <i className="fa-solid fa-bullseye"></i> Quality Leads
                            </span>
                            <span className="hero-chip">
                                <i className="fa-solid fa-chart-line"></i> Conversions
                            </span>
                            <span className="hero-chip">
                                <i className="fa-solid fa-indian-rupee-sign"></i> Revenue
                            </span>
                        </div>

                        <div className="hero-actions hero-anim" style={{ "--d": "0.65s" }}>
                            <a href="./about" className="btn btn-accent">
                                <div className="btn-title">
                                    <span>Get Started</span>
                                </div>
                                <div className="icon-circle">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerHomeSection;