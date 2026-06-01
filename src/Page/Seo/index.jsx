import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ExpertiseSection from "../../Components/ServicePages/seoservice";

function Seo(){
    return(
        <>
            <HeadTitle title="Best Digital Marketing Company in Jaipur, India – Cobizzer" />
             <BannerInnerSection title="Search Engine Optimization" currentPage="Services Details" />
            <ExpertiseSection />
                   </>
    );
}

export default Seo;