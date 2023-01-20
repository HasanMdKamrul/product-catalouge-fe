import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/app/Banner";
import WelcomeText from "../components/app/WelcomeText";
import HomeSlider from "../components/core/HomeSlider";
import Slider from "../components/core/Slider";

const Home = () => {
  const { results: products } = useLoaderData();

  return (
    <>
      <WelcomeText>Welcome to sasol</WelcomeText>
      <Slider />
      <HomeSlider products={products} />
      <Banner />
    </>
  );
};

export default Home;
