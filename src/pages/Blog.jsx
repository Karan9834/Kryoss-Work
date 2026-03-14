import React from "react";
import Hero from "../components/Blog/Hero";
import BlogList from "../components/Blog/BlogList";
import PopularBlogs from "../components/Blog/PopularBlogs";
import BlogFeature from "../components/Blog/BlogFeature";
import Newsletter from "../components/Blog/Newsletter";

const Blog = () => {
  return (
    <>
    <Hero/>
    <BlogList/>
    <PopularBlogs/>
    <BlogFeature/>
    <Newsletter/>
    </>
  );
};

export default Blog;