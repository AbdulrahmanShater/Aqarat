"use client";
import Head from 'next/head';

import ProductRow from './components/homepage/Facts';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import HeroSection from './components/homepage/HeroSection';
import HomeBanner from './components/homepage/HomeBanner';
import About from './components/homepage/About';
import Header from './components/Header/Header'
import CategoryBanner from './components/homepage/CategoryBanner';
import Category from './components/homepage/Category';

HomeBanner
import { Pagination } from "swiper/modules";

const Home = () => (

  

    <>
    <HeroSection />

    <ProductRow/>
   
    <About />
    <CategoryBanner/>
    
    <HomeBanner />
    <Category/>
  </>
    //  <HomeBanner />
    // <CategoryBanner />
    // <ProductsBanner />
    // <ExploreBanner />
    // <SocialMedia />
    // <Footer /> */}
 
);

export default Home;
