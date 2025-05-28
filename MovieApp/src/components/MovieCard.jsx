import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const { isFavorites, addToFavorite, removeFromFavorites } = useMovieContext();
  const favorite = isFavorites(movie.imdbID);
  const navigate = useNavigate(); 

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.imdbID);
    else addToFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-overlay">
        <button
          className={`favorite-btn ${favorite ? "active" : ""} `}
          onClick={onFavoriteClick}
        >
          ♡
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
