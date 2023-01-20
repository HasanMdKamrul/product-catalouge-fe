import React from "react";
import Heading from "../core/Heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import CategoryCard from "./CategoryCard";

const CategorySlider = ({ children, categoryData, heading, slidesPerView }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <div className="mx-24">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-12  "
        >
          <div className="flex justify-center items-center  ">
            {categoryData?.map((category) => (
              <SwiperSlide key={category?.id}>
                <CategoryCard
                  id={category?.id}
                  title={category?.title}
                  imgSrc={category?.imgSrc}
                />
              </SwiperSlide>
            ))}
          </div>
          {!categoryData &&
            children?.map((child) => <SwiperSlide>{child}</SwiperSlide>)}
        </Swiper>
      </div>
    </>
  );
};

export default CategorySlider;
