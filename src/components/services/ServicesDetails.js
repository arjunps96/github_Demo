import React from "react";
import "./Services.css";
import "./ServicesDetails.css";

const ServicesDetails = (props) => {
  return (
    <>
      <div className="services-item">
        <h2 className="text-primary">{props.title}</h2>
        <p className="lead">{props.type}</p>
        <p>{props.description}</p>
        <div className="price-details">
          <p className="grey">For one session</p>
          <p className="price">{` $ ${props.price}`}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
