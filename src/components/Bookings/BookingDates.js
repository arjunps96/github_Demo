import React from "react";
import "./BookingDates.css";
const BookingDates = (props) => {
  return (
    <div className="date-time">
      <h3>{props.date}</h3>
      <h3>{props.time}</h3>
    </div>
  );
};

export default BookingDates;
