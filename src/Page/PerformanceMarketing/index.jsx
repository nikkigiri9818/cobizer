import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import ExpertiseSection from "../../Components/Expertise/PerformaceExpertise";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipListSection from "../../Components/Partnership/PartnershipList";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import IndustriesSection from "../../Components/PerformanceMarketing/Industery";
function PerformanceMarketing(){
    return(
        <>
            <HeadTitle title="Partnership dsd- Marko - Digital Marketing Agency" />
            <BannerInnerSection title="Partnership" currentPage="Partnership"/>
            <ExpertiseSection />
            <PartnershipListSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
            <IndustriesSection />
        </>
    );
}

export default PerformanceMarketing;