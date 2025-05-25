import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { getHomePageMovies, searchMovies } from "../servises/api";
import { useState, useEffect } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("Batman");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getHomePageMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error loading popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await searchMovies(searchQuery, movies);
      setMovies(searchResults);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter title..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) =>
            movie?.Title?.toLowerCase().startsWith(
              searchQuery.toLowerCase()
            ) ? (
              <MovieCard movie={movie} key={movie.imdbID} />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
