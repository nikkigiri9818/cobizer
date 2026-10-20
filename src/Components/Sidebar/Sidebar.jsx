// import React, { useEffect, useRef } from "react";

// function Sidebar() {
//     const overlayRef = useRef(null);
//     const sidebarRef = useRef(null);

//     useEffect(() => {
//         const menuBtn = document.querySelector(".nav-btn");
//         const closeBtn = sidebarRef.current?.querySelector(".close-btn");
//         const overlay = overlayRef.current;
//         const sidebar = sidebarRef.current;

//         function openSidebar() {
//         overlay.classList.add("active");
//         setTimeout(() => {
//             sidebar.classList.add("active");
//         }, 200);
//         }

//         function closeSidebar() {
//         sidebar.classList.remove("active");
//         setTimeout(() => {
//             overlay.classList.remove("active");
//         }, 200);
//         }

//         menuBtn?.addEventListener("click", openSidebar);
//         closeBtn?.addEventListener("click", closeSidebar);
//         overlay?.addEventListener("click", closeSidebar);

//         return () => {
//         menuBtn?.removeEventListener("click", openSidebar);
//         closeBtn?.removeEventListener("click", closeSidebar);
//         overlay?.removeEventListener("click", closeSidebar);
//         };
//     }, []);

//     useEffect(() => {
//         const dropdownBtns = sidebarRef.current?.querySelectorAll(".sidebar-dropdown-btn");

//         function handleDropdownClick(e) {
//         const btn = e.currentTarget;
//         const dropdownMenu = btn.parentElement.nextElementSibling;
//         const isOpen = dropdownMenu.classList.contains("active");

//         sidebarRef.current
//             .querySelectorAll(".sidebar-dropdown-menu")
//             .forEach(menu => {
//             menu.classList.remove("active");
//             });

//         if (!isOpen) dropdownMenu.classList.add("active");
//         }

//         dropdownBtns?.forEach(btn => {
//         btn.addEventListener("click", handleDropdownClick);
//         });

//         return () => {
//         dropdownBtns?.forEach(btn => {
//             btn.removeEventListener("click", handleDropdownClick);
//         });
//         };
//     }, []);

//     return (
//         <div>
//         <div ref={overlayRef} className="sidebar-overlay"></div>
//         <div ref={sidebarRef} className="sidebar">
//             <div className="sidebar-header">
//                 <div className="logo">
//                     <img src="/assets/images/marko-logo.png" className="site-logo img-fluid logo" alt="Logo" />
//                 </div>
//                 <button className="close-btn"><span>X</span></button>
//             </div>
//             <ul className="menu">
//                 <li><a href="/">Home</a></li>
//                 <li><a href="about">About Us</a></li>
//                 <li className="sidebar-dropdown">
//                     <div className="dropdown-header">
//                         <a href="#">Services</a>
//                     <button className="sidebar-dropdown-btn">
//                         <i className="fa-solid fa-angle-down"></i>
//                     </button>
//                     </div>
//                     <ul className="sidebar-dropdown-menu">
//                         <li><a href="service">Service</a></li>
//                         <li><a href="single_services">Service Details</a></li>
//                     </ul>
//                 </li>
//                 <li className="sidebar-dropdown">
//                     <div className="dropdown-header">
//                         <a href="#">Pages</a>
//                     <button className="sidebar-dropdown-btn">
//                         <i className="fa-solid fa-angle-down"></i>
//                     </button>
//                     </div>
//                     <ul className="sidebar-dropdown-menu">
//                         <li><a href="case_studies">Case Studies</a></li>
//                         <li><a href="team">Our Team</a></li>
//                         <li><a href="partnership">Partnership</a></li>
//                         <li><a href="pricing">Pricing Plan</a></li>
//                         <li><a href="testimonial">Testimonial</a></li>
//                         <li><a href="faq">FAQs</a></li>
//                         <li><a href="404_page">Error 404</a></li>
//                     </ul>
//                 </li>
//                 <li className="sidebar-dropdown">
//                     <div className="dropdown-header">
//                         <a href="#">Archive</a>
//                     <button className="sidebar-dropdown-btn">
//                         <i className="fa-solid fa-angle-down"></i>
//                     </button>
//                     </div>
//                     <ul className="sidebar-dropdown-menu">
//                         <li><a href="blog">Blog</a></li>
//                         <li><a href="single_post">Single Post</a></li>
//                     </ul>
//                 </li>
//                 <li className="below-dropdown"><a href="contact">Contact Us</a></li>
//             </ul>
//         </div>
//         </div>
//     );
//     }

// export default Sidebar;



import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const sidebarCss = `
.sidebar-overlay {
  position: fixed !important;
  inset: 0 !important;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 2147483646 !important;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

.sidebar {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 300px;
  max-width: 85%;
  height: 100vh;
  height: 100dvh;
  background: #f5fafb;
  padding: 20px 24px;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.35s ease;
  z-index: 2147483647 !important;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
}

.sidebar.active {
  transform: translateX(0);
}

/* menu khulne par header ko sidebar ke neeche bhejo */
body.sidebar-open .navbar-wrapper,
body.sidebar-open header {
  z-index: 1 !important;
}

.sidebar .sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.sidebar .sidebar-header .site-logo {
  max-height: 40px;
  width: auto;
}

.sidebar .close-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #1f9087;
  background: transparent;
  color: #1f9087;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar .menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar .menu li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.sidebar .menu li:last-child {
  border-bottom: none;
}

.sidebar .menu li a {
  display: block;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 500;
  color: #12303a;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.sidebar .menu li a:hover {
  color: #1f9087;
  padding-left: 6px;
}
`;

function Sidebar() {
  const overlayRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const menuBtn = document.querySelector(".nav-btn");
    const closeBtn = sidebarRef.current?.querySelector(".close-btn");
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;

    function openSidebar() {
      overlay.classList.add("active");
      sidebar.classList.add("active");
      document.body.classList.add("sidebar-open");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
      document.body.style.overflow = "";
    }

    menuBtn?.addEventListener("click", openSidebar);
    closeBtn?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    const links = sidebar?.querySelectorAll(".menu a");
    links?.forEach((link) => link.addEventListener("click", closeSidebar));

    return () => {
      menuBtn?.removeEventListener("click", openSidebar);
      closeBtn?.removeEventListener("click", closeSidebar);
      overlay?.removeEventListener("click", closeSidebar);
      links?.forEach((link) => link.removeEventListener("click", closeSidebar));
      document.body.classList.remove("sidebar-open");
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <>
      <style>{sidebarCss}</style>

      <div ref={overlayRef} className="sidebar-overlay"></div>

      <div ref={sidebarRef} className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img
              src="/assets/images/cobizzer.png"
              className="site-logo img-fluid logo"
              alt="Cobizzer Logo"
            />
          </div>
          <button className="close-btn" aria-label="Close menu">
            <span>X</span>
          </button>
        </div>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </>,
    document.body
  );
}

export default Sidebar;