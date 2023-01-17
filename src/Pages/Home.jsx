import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/app/Banner";
import HomeSlider from "../components/core/HomeSlider";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <Banner />
      <HomeSlider products={products} />
    </>
  );
};

export default Home;
