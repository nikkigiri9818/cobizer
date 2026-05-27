import React, { useEffect, useState } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/Blog/SinglePost";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePostPage(){
    const { slug } = useParams();

    const[singleBlog,setSingleBlog] = useState(null);


    useEffect(()=>{
        axios
    .get(`https://cms.nidhisinghmackupacademy.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => {
      setSingleBlog(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
    },[slug])

 if (!singleBlog) {

        return <h2 >Loading...</h2>;

    }
    return(
        <>
            <HeadTitle title="Cobizzer - Best Digital Marketing Agency In Jaipur" />
           <BannerInnerSection  title={singleBlog.title.rendered}  currentPage="Single Post"/>
            <BlogPostSection singleBlog = {singleBlog} />

        </>
    );
}

export default SinglePostPage;