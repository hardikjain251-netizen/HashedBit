import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    // <Routes> looks at the current URL and renders whichever
    // <Route> below matches it - only one is shown at a time,
    // which is what gives the app its "multi-page" feel while
    // still being a single-page React application.
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
