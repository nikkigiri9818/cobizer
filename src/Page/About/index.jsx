import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import TeamSection from "../../Components/Team/Team";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/newtesti";

function AboutPage(){
    return(
        <>
            <HeadTitle title="About - Cobizzer - Digital Marketing Agency"/>
            {/* <BannerInnerSection title="About Cobizzer" currentPage="About Us" /> */}
            <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            <ModalVideoSection />
            <TeamSection />
            {/* <TestimonialSection /> */}
        </>
    );
}

export default AboutPage;