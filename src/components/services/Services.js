import React from "react";

import images from "../Data/yoga.jpeg";
import "./Services.css";
import ServiceDetails from "./ServicesDetails";

import { connect } from "react-redux";

const Services = (props) => {
  return (
    <React.Fragment>
      <header className="header-top services">
        <div className="images">
          <img src={images} alt="services1.jpeg" />
        </div>
        <div className="details">
          <ServiceDetails
            title={props.title}
            type={props.type}
            description={props.description}
            price={props.price}
          />
        </div>
      </header>
    </React.Fragment>
  );
};

export default connect()(Services);
