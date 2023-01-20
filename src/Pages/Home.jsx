import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/app/Banner";
import WelcomeText from "../components/app/WelcomeText";
import HomeSlider from "../components/core/HomeSlider";

const Home = () => {
  const { results: products } = useLoaderData();

  return (
    <>
      <WelcomeText />
      <Banner>
        <img
          className="w-full h-3/4"
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1531488959157-09298433615f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
      </Banner>
      <HomeSlider products={products} />
    </>
  );
};

export default Home;
