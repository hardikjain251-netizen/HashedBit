import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  // useParams() reads the dynamic part of the URL. Our route is
  // defined as "/movie/:id" in App.jsx, so useParams() gives us
  // back { id: "3" } (as a STRING, even though it looks numeric).
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie whose id matches the URL parameter.
  // Number(id) converts the string "3" to the number 3, so it can
  // be compared against movie.id (which is a number in our data).
  const movie = movies.find((m) => m.id === Number(id));

  // Defensive check: if someone visits an invalid URL like
  // /movie/999, movie will be undefined - show a friendly message
  // instead of crashing.
  if (!movie) {
    return (
      <div className="page">
        <p>Movie not found.</p>
        <Link to="/">Back to movie list</Link>
      </div>
    );
  }

  const handleBookSeat = () => {
    navigate(`/book/${movie.id}`);
  };

  return (
    <div className="page">
      <Link to="/" className="back-link">&larr; Back to movies</Link>

      <div className="movie-details">
        <img
          src={`https://picsum.photos/seed/movie${movie.id}/300/420`}
          alt={`${movie.title} poster`}
        />

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p>{movie.description}</p>

          <button onClick={handleBookSeat}>Book Seat</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
