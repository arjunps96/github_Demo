import React from "react";
import "./Booking.css";

import BookingUser from "./BookingUser";
import BookingDates from "./BookingDates";
import { ACCEPT_REQUEST } from "../../actions/types";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { connect } from "react-redux";

const Booking = (props) => {
  const acceptRequestHandler = () => {
    props.dispatch({
      type: ACCEPT_REQUEST,
      payload: { serviceId: "S1", bookingItem: props.booking },
    });
  };
  return (
    <section className="booking">
      <div className="header-booking">
        <div className="request">
          <p className="text-secondary">{props.heading}</p>
          <span className="grey time">{props.currentDate}</span>
        </div>
        <div className="progress">
          <Progress percent={props.progress} />
        </div>
      </div>

      <BookingUser
        username={props.username}
        userLocation={props.userLocation}
        userDeals={props.userDeals}
      />
      <h3 className="grey">{props.details}</h3>
      {!props.payment && (
        <div className="timings">
          <i className="far fa-clock"></i>
          <div>
            <BookingDates
              date="Sunday,December22nd 2019"
              time="9:00 AM-2:00 PM"
            />
            <BookingDates
              date="Sunday,December29th 2019"
              time="9:00 AM-2:00 PM"
            />
          </div>
        </div>
      )}
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <h3>{props.location}</h3>
      </div>
      <div className="action-takers">
        <button className="btn-white">
          <h3>{props.btnText1}</h3>
        </button>
        <button className="btn-primary" onClick={acceptRequestHandler}>
          <h3>{props.btnText2}</h3>
        </button>
        <div className="more">
          <i className="fas fa-ellipsis-h"></i>
          <h4>More</h4>
        </div>
      </div>
    </section>
  );
};
const mapStatetoProps = (state) => {
  return { services: state.services };
};

export default connect(mapStatetoProps)(Booking);
