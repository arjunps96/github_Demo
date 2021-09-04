import React from "react";
import Services from "../components/services/Services";
import data from "../components/Data/devData.json";

const Payments = () => {
  return (
    <>
      {data.Services.map((data) => {
        return (
          <Services
            key={data.id}
            id={data.id}
            title={data.title}
            type={data.type}
            description={data.description}
            price={data.price}
            bookings={data.bookings}
          />
        );
      })}
    </>
  );
};

export default Payments;
