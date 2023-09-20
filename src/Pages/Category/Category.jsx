import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Slider-Images
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-12"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h4 className="text-4xl -mt-16 uppercase text-white text-center shadow-lg">
          Salads
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h4 className="text-4xl -mt-16 uppercase text-white text-center shadow-lg">
          Pizzas
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h4 className="text-4xl -mt-16 uppercase text-white text-center shadow-lg">
          Soups
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h4 className="text-4xl -mt-16 uppercase text-white text-center shadow-lg">
          Deserts
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h4 className="text-4xl -mt-16 uppercase text-white text-center shadow-lg">
          Salads
        </h4>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
