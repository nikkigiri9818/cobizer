import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import ExpertiseSection from "../../Components/Expertise/PerformaceExpertise";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipListSection from "../../Components/Partnership/PartnershipList";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function GraphicDesigning(){
    return(
        <>
            <HeadTitle title="GraphicDesigning - Cobizzer - Digital Marketing Agency" />
            <BannerInnerSection title="Graphic Designing" currentPage="Partnership"/>
            <ExpertiseSection />
            <PartnershipListSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default GraphicDesigning;