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
function SingleSmm(){
    return(
        <>
            <HeadTitle title="Best Digital Marketing Company in Jaipur, India – Cobizzer" />
             <BannerInnerSection title="Social Media Marketing" currentPage="Services Details" />
            <ExpertiseSection />
            <ServiceSection />

        </>
    );
}

export default SingleSmm;