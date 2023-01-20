import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/app/Banner";
import CategorySlider from "../components/app/CategorySlider";
import Partners from "../components/app/Partners";
import WelcomeText from "../components/app/WelcomeText";
import HomeSlider from "../components/core/HomeSlider";
import Slider from "../components/core/Slider";
import { CategoryData } from "../constants/Images";

const Home = () => {
  const { results: products } = useLoaderData();

  return (
    <>
      <WelcomeText>Welcome to sasol</WelcomeText>
      <Slider />
      <CategorySlider
        slidesPerView={2}
        heading="Products Category"
        categoryData={CategoryData}
      />
      <Partners />
      <HomeSlider products={products} />
      <Banner />
    </>
  );
};

export default Home;
