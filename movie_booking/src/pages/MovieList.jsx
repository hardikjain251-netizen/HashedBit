import React from "react";
import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieList() {
  // useNavigate() gives us a function to programmatically change
  // the URL (and therefore the page shown) in response to an event,
  // like clicking a movie card.
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    // Navigate to the details page for this specific movie.
    // The movie's id becomes part of the URL, e.g. /movie/3
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="page">
      <h1>Now Showing</h1>

      {/* CSS grid set to exactly 4 columns in App.css creates the
          4x4 layout automatically, since we have 16 movies. */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://picsum.photos/seed/movie${movie.id}/300/420`}
              alt={`${movie.title} poster`}
            />
            <h3>{movie.title}</h3>
            <p className="genre">{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
