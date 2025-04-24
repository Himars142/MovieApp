const API_KEY = "bcd853e9";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export const getHomePageMovies = async () => {
  const response = await fetch(`${BASE_URL}s=batman&page=1`);
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query, Array) => {
  const response = await fetch(
    `${BASE_URL}&s=${encodeURIComponent(query)}&page=1`
  );
  const data = await response.json();
  if (data.Search) {
    Array.splice(0, Array.length);
    Array.push(...data.Search);
    0;
  } else {
    console.error(
      "No movies found or an error occurred:",
      data.Error || "Unknown error"
    );
  }
  return Array;
};
