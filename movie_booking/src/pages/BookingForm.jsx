import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import movies from "../data/movies";

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));

  // A single state object holds all three form fields together,
  // since they're related and submitted as one unit.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Tracks validation error messages, keyed by field name.
  const [errors, setErrors] = useState({});

  // A single onChange handler for all three inputs. e.target.name
  // (set on each <input>) tells us WHICH field changed, so we don't
  // need three separate handler functions.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic validation: check that fields aren't empty and have a
  // roughly sane format for email/mobile.
  const validate = () => {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);

    // Form is valid if there are no keys in newErrors
    return Object.keys(newErrors).length === 0;
  };

  const generateBookingId = () => {
    // Produces something like "BK-7X2K9A1QF" - random enough for
    // demo purposes. Math.random().toString(36) generates a random
    // string using digits 0-9 and letters a-z.
    const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `BK-${randomPart}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser's default full-page form submit

    if (!validate()) {
      return; // stop here if validation failed
    }

    const bookingId = generateBookingId();

    // Navigate to the confirmation page, passing all the booking
    // details through route "state". This keeps the data out of
    // the URL (unlike route params) while still getting it safely
    // to the next page.
    navigate(`/confirmation`, {
      state: {
        bookingId,
        movieTitle: movie.title,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
      },
    });
  };

  if (!movie) {
    return (
      <div className="page">
        <p>Movie not found.</p>
        <Link to="/">Back to movie list</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to={`/movie/${movie.id}`} className="back-link">&larr; Back to {movie.title}</Link>

      <h1>Book Seat - {movie.title}</h1>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit number"
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
