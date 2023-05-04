// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Slider1 from "../../../assets/slider/SchoolBuilding.jpg";
import Slider2 from "../../../assets/slider/4G7A113.jpg";
import Slider3 from "../../../assets/slider/slider3.jpg";
import Slider4 from "../../../assets/slider/slider4.jpg";

const HeroAria = () => {
  return (
    <div className="">
      <div className="pb-10 mx-auto max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="relative sm:h-[780px]"
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-[44px] text-white drop-shadow-lg shadow-white font-semibold sm:font-bold z-50">
            WELCOME TO OUR SCHOOL
          </h1>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
          <SwiperSlide>
            <div >
              <img
                src={Slider1}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div >
              <img
                src={Slider2}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div >
              <img
                src={Slider3}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div >
              <img
                src={Slider4}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroAria;
