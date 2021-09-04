import data from "../components/Data/devData.json";
import { ACCEPT_REQUEST } from "../actions/types";

let pendingState = [];
let activeState = [];

data.Services.forEach((service) => {
  let pendingBookingArr = [];
  service.bookings.forEach((booking) => {
    if (booking.bookingStatus === "PENDING") {
      pendingBookingArr.push(booking);
    }
  });
  pendingState.push({ service, pendingBookingArr });
});

data.Services.forEach((service) => {
  let activeBookingArr = [];
  service.bookings.forEach((booking) => {
    if (booking.bookingStatus === "ACTIVE") {
      activeBookingArr.push(booking);
    }
  });
  activeState.push({ service, activeBookingArr });
});
const initialState = {
  pendingStateArr: pendingState,
  activeStateArr: activeState,
  paymentStateArr: [],
};
const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ACCEPT_REQUEST) {
    const servicesIndex = state.pendingStateArr.findIndex(
      (item) => item.service.id === payload.serviceId
    );
    if (!servicesIndex) {
      const { service, booking } = state[servicesIndex];
      booking.filter((data) => data.id !== booking.id);
      const updatedData = { service, booking };
      state[servicesIndex] = updatedData;

      if (
        state.activeStateArr.filter(
          (item) => item.service.id === payload.serviceId
        ) !== []
      ) {
        const activeServiceIndex = state.activeStateArr.findIndex(
          (item) => item.service.id === payload.serviceId
        );
        state.activeStateArr[activeServiceIndex].activeBookingArr.push(
          payload.bookingItem
        );
      }
    }
  }

  return state;
  // const { type, payload } = action;
  // if (type === ACCEPT_REQUEST) {
  //   const { serviceId, bookingId } = payload;
  //   const serviceIndex = state.findIndex((service) => service.id === serviceId);
  //   const currentService = state[serviceIndex];
  //   let Bookings = currentService.bookings;
  //   const bookingIndex = Bookings.findIndex(
  //     (booking) => booking.id === bookingId
  //   );
  //   const currentBooking = Bookings[bookingIndex];
  //   let updatedBooking, updatedService;
  //   updatedBooking = { ...currentBooking, bookingStatus: "ACTIVE" };
  //   Bookings[bookingIndex] = updatedBooking;
  //   updatedService = { ...currentService, bookings: Bookings };
  //   state[serviceIndex] = updatedService;
  //   return state;
  // }
  // return state;
};

export default serviceReducer;
