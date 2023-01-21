import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/app/Banner";
import CategorySlider from "../components/app/CategorySlider";
import { Investors } from "../components/app/Investors";
import Partners from "../components/app/Partners";
import { Teams } from "../components/app/Teams";
import WelcomeText from "../components/app/WelcomeText";
import HomeSlider from "../components/core/HomeSlider";
import Slider from "../components/core/Slider";
import { CategoryData } from "../constants/Constants";

const Home = () => {
  const { results: products } = useLoaderData();

  return (
    <>
      <WelcomeText>Welcome to sasol</WelcomeText>
      <Slider />
      <Partners />
      <HomeSlider products={products} />
      <CategorySlider
        slidesPerView={2}
        heading="Products Category"
        categoryData={CategoryData}
      />
      <Investors />
      <Teams />
      <Banner />
    </>
  );
};

export default Home;
