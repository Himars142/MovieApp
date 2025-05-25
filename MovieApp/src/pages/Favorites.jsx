import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  const searchQuery = "";

  if (Array.isArray(favorites) && favorites.length > 0) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) =>
          movie?.Title?.toLowerCase().startsWith(searchQuery.toLowerCase()) ? (
            <MovieCard movie={movie} key={movie.imdbID} />
          ) : null
        )}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorite;
