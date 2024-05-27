import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import mrs from "../../assets/all-images/Untitled1_v2.jpg";
import arm from "../../assets/all-images/Untitled.jpg";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Luxury Cars Rental Of Monaco offers a wide range of exotic and luxury cars,
         including Ferrari, Lamborghini, and Aston Martin,
         which are perfect for exploring the scenic roads of Monaco and nearby French Riviera destinations.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={mrs} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Marius Cotoi</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Luxury Cars Rental Of Monaco is praised for its outstanding collection of vehicles.
        Their expertise and commitment to customer satisfaction are frequently mentioned by clients,
        making it a popular choice for luxury car rentals in Monaco
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={arm} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Armina Anderca</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

     
      
    </Slider>
  );
};

export default Testimonial;
