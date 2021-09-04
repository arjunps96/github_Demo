import React, { Fragment } from "react";
import Services from "../components/services/Services";
import Booking from "../components/Bookings/Booking";

import Carousel from "react-bootstrap/Carousel";

import { connect } from "react-redux";
const Requests = (props) => {
  return (
    <>
      <Carousel variant="dark">
        {props.services.pendingStateArr.map((data) => {
          return (
            <Carousel.Item>
              <Fragment key={data.id}>
                <Services
                  key={data.service.id}
                  id={data.service.id}
                  title={data.service.title}
                  type={data.service.type}
                  description={data.service.description}
                  price={data.service.price}
                />
                {data.pendingBookingArr.map((booking) => (
                  <Booking
                    key={booking.id}
                    heading="Pending Requests"
                    progress={0}
                    username={booking.username}
                    userLocation={booking.userLocation}
                    userDeals={booking.dealsDone}
                    payment={false}
                    btnText1="Reschedule"
                    btnText2="Accept Request"
                    service={data.service.id}
                    booking={booking}
                  />
                ))}
              </Fragment>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
const mapStatetoProps = (state) => {
  return {
    services: state.services,
  };
};

export default connect(mapStatetoProps)(Requests);
