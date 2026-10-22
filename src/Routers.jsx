import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import CaseStudiesPage from "./Page/CaseStudies";
import TeamPage from "./Page/Team";
import PartnershipPage from "./Page/Partnership";
import PricingPage from "./Page/Pricing";
import TestimonialPage from "./Page/Testimonial";
import NotFoundPage from "./Page/NotFound";
import FaqPage from "./Page/FAQs";
import BlogPage from "./Page/Blog";
import ContactPage from "./Page/Contact";
import SingleServicePage from "./Page/SingleService";
import SinglePostPage from "./Page/SinglePost";
import SingleSeo from "./Page/SingleSeo";
import Seo from "./Page/Seo";
import PerformanceMarketing from "./Page/PerformanceMarketing";
import WebDevelopment from "./Page/WebDevelopment";
import GraphicDesigning from "./Page/GraphicDesigning";
import PPCManagement from "./Page/Pricing";
import Blogdetails from "./Components/Blogdetails";
import ThankYou from "./Page/Thank-you";

function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="service" element={<ServicePage />}/>
            <Route path="social-media-marketing-company-in-jaipur" element={<SingleSeo />}/>
            <Route path="performance-marketing-company-in-jaipur" element={<PerformanceMarketing />}/>
            <Route path="web-development-company-in-jaipur" element={<WebDevelopment />}/>
            <Route path="graphics-designing-company-in-jaipur" element={<GraphicDesigning />}/>
            <Route path="/ppc-management" element={<PricingPage/>}></Route>
            <Route path="seo-services-in-jaipur" element={<Seo />}/>
            <Route path="single_services" element={<SingleServicePage />}/>
            <Route path="case_studies" element={<CaseStudiesPage />}/>
            <Route path="team" element={<TeamPage />}/>
            <Route path="partnership" element={<PartnershipPage />}/>      
            <Route path="pricing" element={<PricingPage />}/>
            <Route path="Testimonial" element={<TestimonialPage />}/>
            <Route path="faq" element={<FaqPage />}/>
            <Route path="blog" element={<BlogPage />}/>
            {/* <Route path="blog/:slug" element={<SinglePostPage />}/> */}

            <Route path="contact" element={<ContactPage />}/>
         <Route path="/blog/:slug" element={<Blogdetails/>}/>
         <Route path="/thank-you" element={<ThankYou/>}/>

            <Route path="404_page" element={<NotFoundPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    );
}

export default AppRouter;