import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/ServicePages/servicepage";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSection from "../../Components/SocialMedia/SocialMedia";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import PartnershipSection from "../../Components/Partnership/Partnership";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import CustomImage from "../../Components/Custom/customImage";
import TeamSection from "../../Components/Team/Team";
import BannerInnerSection from "../../Components/Banner/Inner";
import FaqSection from "../../Data/FaqSection";
import ContactSection from "../../Components/Contact/contact";
function SingleSmm(){
    return(
        <>
            <HeadTitle title="Best Digital Marketing Company in Jaipur, India – Cobizzer" />
             <BannerInnerSection title="Social Media Marketing" currentPage="Services Details" />
            <ExpertiseSection />
            <ServiceSection />
            <FaqSection/>
            <ContactSection/>

        </>
    );
}

export default SingleSmm;