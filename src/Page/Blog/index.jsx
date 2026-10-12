import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";
import BlogCtaSection from "../../Data/BlogListSection";
import FaqSection from "../../Data/FaqSection";
import ContactSection from "../../Components/Contact/contact";

function BlogPage(){
    return(
        <>
            <HeadTitle title="Blog - Cobizzer - Digital Marketing Agency" />
            <BannerInnerSection title="Our Blog" currentPage="Blog" />
            <BlogSection />   
            <BlogCtaSection/>
            <FaqSection/>
            <ContactSection/>
        </>
    );
}

export default BlogPage;