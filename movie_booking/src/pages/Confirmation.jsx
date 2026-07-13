import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";

function Confirmation() {
  // useLocation() gives access to the "state" object that was
  // passed in via navigate(path, { state: {...} }) on the
  // booking form page.
  const location = useLocation();
  const bookingDetails = location.state;

  // Defensive check: if someone lands on /confirmation directly
  // (e.g. by typing the URL, or refreshing), there will be no
  // state, since route state only exists when navigated to
  // programmatically. Redirect them back to the home page instead
  // of showing a broken confirmation screen.
  if (!bookingDetails) {
    return <Navigate to="/" replace />;
  }

  const { bookingId, movieTitle, name, email, mobile } = bookingDetails;

  return (
    <div className="page">
      <div className="confirmation-card">
        <h1>✅ Seat Booked!</h1>
        <p className="movie-name">{movieTitle}</p>

        <div className="booking-id">
          Booking ID: <strong>{bookingId}</strong>
        </div>

        <div className="booking-summary">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mobile:</strong> {mobile}</p>
        </div>

        <Link to="/" className="back-link">Book another movie</Link>
      </div>
    </div>
  );
}

export default Confirmation;
