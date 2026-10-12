import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import ExpertiseSection from "../../Components/Expertise/PerformaceExpertise";
import BannerInnerSection from "../../Components/Banner/Inner";
import WebPartnershipListSection from "../../Components/Partnership/WebPartner";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import WebDevServicesSection from "../../Data/WebDevServicesSection";

function WebDevelopment(){
    return(
        <>
            <HeadTitle title="Web development - Marko - Digital Marketing Agency" />
            <BannerInnerSection title="Web Development" currentPage="Partnership"/>
            <WebDevServicesSection/>
                        <WebPartnershipListSection />


        </>
    );
}

export default WebDevelopment;