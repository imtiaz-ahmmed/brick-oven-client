import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="p-8">
      <SectionTitle
        headings={"Testimonials"}
        subHeadings={"What Our Clients Say"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center ">
              <Rating style={{ maxWidth: 300 }} value={review.rating} />
              <FaQuoteLeft className="text-2xl md:text-5xl my-7"></FaQuoteLeft>

              <p className="w-3/4 text-center">{review.details}</p>
              <h6 className="text-5xl text-orange-400 my-7">{review.name}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
