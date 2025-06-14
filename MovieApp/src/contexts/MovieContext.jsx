import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorite = localStorage.getItem("favorites");
    if (storedFavorite) setFavorites(JSON.parse(storedFavorite));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== movieId));
  };

  const isFavorites = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId);
  };

  const value = {
    favorites,
    addToFavorite,
    removeFromFavorites,
    isFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
