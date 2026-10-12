// import React, { useEffect, useRef } from "react";
// import VideoButton from "../Video/VideoButton";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// function BannerHomeSection() {

//     const playerRef = useRef(null);
//     const videoContainerRef = useRef(null);

//     useEffect(() => {
//         if (!window.YT) {
//             const tag = document.createElement("script");
//             tag.src = "https://www.youtube.com/iframe_api";
//             const firstScriptTag = document.getElementsByTagName("script")[0];
//             firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//         } else {
//             onYouTubeIframeAPIReady();
//         }

//         window.onYouTubeIframeAPIReady = () => {
//             playerRef.current = new window.YT.Player("banner-video-background", {
//                 videoId: "P68V3iH4TeE",
//                 playerVars: {
//                 autoplay: 1,
//                 controls: 0,
//                 mute: 1,
//                 loop: 1,
//                 playlist: "P68V3iH4TeE",
//                 showinfo: 0,
//                 rel: 0,
//                 enablejsapi: 1,
//                 disablekb: 1,
//                 modestbranding: 1,
//                 iv_load_policy: 3,
//                 'origin': window.location.origin
//                 },
//                 events: {
//                 onReady: onPlayerReady,
//                 onStateChange: onPlayerStateChange
//                 }
//             });
//         };

//         function onPlayerReady(event) {
//             event.target.playVideo();
//             setYoutubeSize();
//             window.addEventListener("resize", setYoutubeSize);
//         }

//         function onPlayerStateChange(event) {
//             if (event.data === window.YT.PlayerState.ENDED) {
//                 playerRef.current.playVideo();
//             }
//             if (event.data === window.YT.PlayerState.PLAYING) {
//                 playerRef.current.setPlaybackQuality("hd1080");
//             }
//         }

//         function setYoutubeSize() {
//             const container = videoContainerRef.current;
//             if (!container || !playerRef.current?.getIframe) return;

//             const containerWidth = container.offsetWidth;
//             const containerHeight = container.offsetHeight;
//             const aspectRatio = 16 / 9;

//             let newWidth, newHeight;
//             if (containerWidth / containerHeight > aspectRatio) {
//                 newWidth = containerWidth;
//                 newHeight = containerWidth / aspectRatio;
//             } else {
//                 newWidth = containerHeight * aspectRatio;
//                 newHeight = containerHeight;
//             }

//             const iframe = playerRef.current.getIframe();
//             iframe.style.width = `${newWidth}px`;
//             iframe.style.height = `${newHeight}px`;
//         }

//         function handleYouTubeErrors() {
//             window.addEventListener('message', function(event) {
//                 if (event.origin !== 'https://www.youtube.com') return;
            
//                 try {
//                     var data = JSON.parse(event.data);
                   
//                 } catch (e) {
         
//                 }
//             });
//         }

//         return () => {
//             window.removeEventListener("resize", setYoutubeSize);
//         };
//     }, []);

//     return (
//         <div className="section-banner">
//             <AnimateOnScroll animation="fadeInUp">
//                 <div
//                     ref={videoContainerRef}
//                     className="banner-video-container keep-dark"
//                 >
//                     <div id="banner-video-background"></div>
//                     <div className="hero-container position-relative">
//                         <div className="d-flex flex-column gspace-2">
//                             <AnimateOnScroll animation="fadeInLeft" speed="normal">
//                                 <h1 className="title-heading-banner">
//                                Cobizzer - Jaipur’s Trusted Digital Marketing Agency
//                                 </h1>
//                             </AnimateOnScroll>
//                             <div className="banner-heading">

//                                 <AnimateOnScroll animation="fadeInUp" speed="normal">
//                                     <div className="banner-video-content order-lg-1 order-2">
//                                             {/* <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
//                                                 <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
//                                                 <p>
//                                                     Watch our video reviews and see how businesses achieve success
//                                                     with Marko's digital marketing solutions.
//                                                 </p>
//                                             </div> */}
//                                     </div>
//                                 </AnimateOnScroll>

//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <div className="banner-content order-lg-2 order-1">
//                                         <p>
//                                         Most digital marketing agencies focus on likes and shares.
//                                         Cobizzer focuses on real business results—growth, leads, conversions,
//                                         and revenue—helping businesses grow online with measurable success.
//                                         </p>
//                                         <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
//                                             <a href="./about" className="btn btn-accent">
//                                                 <div className="btn-title">
//                                                     <span>Get Started</span>
//                                                 </div>
//                                                 <div className="icon-circle">
//                                                     <i className="fa-solid fa-arrow-right"></i>
//                                                 </div>
//                                             </a>
//                                             {/* <div className="banner-reviewer">
//                                                 <div className="d-flex flex-row align-items-center">
//                                                     <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
//                                                     <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
//                                                     <img src="/assets/images/dummy-img-400x400.jpg" alt="Reviewer" className="avatar" />
//                                                 </div>
//                                                 <div className="detail">
//                                                     <span>2.7k Positive</span>
//                                                     <span>Reviews</span>
//                                                 </div>
//                                             </div> */}
//                                         </div>
//                                     </div>
//                                 </AnimateOnScroll>
//                             </div>
//                         </div>
//                     </div>
//                 </div>  
//             </AnimateOnScroll>
//         </div>
//     );
// }

// export default BannerHomeSection;





import React, { useEffect, useRef } from "react";

function BannerHomeSection() {
    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);

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
                            Cobizzer - Jaipur’s Trusted{" "}
                            <span className="hl">Digital Marketing</span> Agency
                        </h1>

                        <p className="hero-text hero-anim" style={{ "--d": "0.45s" }}>
                            Most digital marketing agencies focus on likes and shares.
                            Cobizzer focuses on real business results—growth, leads,
                            conversions, and revenue—helping businesses grow online with
                            measurable success.
                        </p>

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