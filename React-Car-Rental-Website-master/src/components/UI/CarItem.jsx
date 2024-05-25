import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/car-item.css";
const CarItem = ({ item }) => {
  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="car__item">
        <img src={item.imgUrl} alt={item.carName} className="w-100" />
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{item.carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${item.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-roadster-line"></i> {item.model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {item.automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {item.speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
          <Link to={`/cars/${item.carName}`}>
            Rent
          </Link>
          </button>
          <button className=" w-50 car__item-btn car__btn-details">
          <Link to={`/cars/${item.carName}`} className="w-50 car__item-btn car__btn-details">
            Details
          </Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;









