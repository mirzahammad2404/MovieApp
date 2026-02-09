import React from "react";
import MovieCard from "./components/moviecard";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites";
import Navbar from "./components/navbar";
import "../src/css/App.css";
import { MovieProvider } from "./contexts/moviecontexts";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
