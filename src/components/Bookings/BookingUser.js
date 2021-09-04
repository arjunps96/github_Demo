import React from "react";
import image from "../Data/leo.jpg";
import "./BookingUser.css";
const BookingUser = (props) => {
  return (
    <div className="user-details">
      <div className="user-image">
        <img className="round-img" src={image} alt="user" />
        <div className="user-profile m-2">
          <h3 className="text-primary">{props.username}</h3>
          <p>{props.userLocation}</p>
        </div>
      </div>
      <div className="experience">
        <i className="far fa-handshake"></i>
        <h3 className="m-1">{`You had ${props.userDeals} deals before`}</h3>
      </div>
    </div>
  );
};

export default BookingUser;
