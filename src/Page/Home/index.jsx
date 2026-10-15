import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PartnershipSection from "../../Components/Partnership/Partnership";
import NewsletterSection from "../../Components/Form/Newsletter";

import TeamSection from "../../Components/Team/Team";
import FaqSection from "../../Data/FaqSection";
import HomeBlogSection from "../../Data/Homeblogsections";
import Homesercicesections from "../../Data/Homesercicesections";
function HomePage(){
    return(
        <>
            <HeadTitle title="Best Digital Marketing Company in Jaipur, India – Cobizzer" />
            <BannerHomeSection />
            <ExpertiseSection />
            <PartnershipSection />
            <ChooseUsSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <Homesercicesections/>
            <CaseStudiesSection noPadding={true} />
            <TestimonialSection />
            <DigitalProcessSection />
              <TeamSection/>
            {/* <PricingPlanSection /> */}
            <HomeBlogSection/>
                        <FaqSection/>
                                                <NewsletterSection />


        </>
    );
}

export default HomePage;