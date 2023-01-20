// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { SliderImages } from "../../constants/Images";

export default function Slider() {
  return (
    <>
      <div className="mb-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {SliderImages?.map((item) => (
            <SwiperSlide className="flex justify-center items-center w-full lg:h-[700px] ">
              <img className="w-full " src={item?.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
