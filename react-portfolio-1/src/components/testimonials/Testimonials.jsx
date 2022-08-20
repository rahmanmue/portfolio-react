import React from "react";
import "./testimonials.css";
import { avatar1, avatar2, avatar3, avatar4 } from "../../assets";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    img: avatar1,
    name: "Raman Dud",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eius molestias excepturi impedit distinctio unde dolorum eligendi dolorem recusandae officiis, saepe veritatis pariatur ratione corporis tenetur soluta facilis sit doloremque?",
  },
  {
    id: 2,
    img: avatar2,
    name: "D Mey",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eius molestias excepturi impedit distinctio unde dolorum eligendi dolorem recusandae officiis, saepe veritatis pariatur ratione corporis tenetur soluta facilis sit doloremque?",
  },
  {
    id: 3,
    img: avatar3,
    name: "Owaka",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eius molestias excepturi impedit distinctio unde dolorum eligendi dolorem recusandae officiis, saepe veritatis pariatur ratione corporis tenetur soluta facilis sit doloremque?",
  },
  {
    id: 4,
    img: avatar4,
    name: "Losa",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eius molestias excepturi impedit distinctio unde dolorum eligendi dolorem recusandae officiis, saepe veritatis pariatur ratione corporis tenetur soluta facilis sit doloremque?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.map(({ id, img, name, review }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={img} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
