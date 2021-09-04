import React, { Fragment } from "react";
import Services from "../components/services/Services";
import Booking from "../components/Bookings/Booking";

import Carousel from "react-bootstrap/Carousel";
const ServicesPage = (props) => {
  return (
    <>
      <Carousel variant="dark">
        {props.services.activeStateArr.map((data) => {
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
                    userDeals={booking.userDeals}
                    payment={false}
                    btnText1="Check In"
                    btnText2="Generate Invoice"
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

export default ServicesPage;
