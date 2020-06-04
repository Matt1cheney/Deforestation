import React from "react";
import { Link } from "react-router-dom";


const EventDetails = ({ event }) => {
//   const { startDate, endDate, coordinator, description, _id } = event;

  return (
    <div>
      <h1>Event Details</h1>
      {/* <p>{startDate}</p> */}
      <Link to="/getInvolved">← Back to Events</Link>
    </div>
  );
};
export default EventDetails;
