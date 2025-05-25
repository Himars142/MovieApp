# Movie App

A simple React application for searching movies and managing your favorite movies list, built with [Vite](https://vitejs.dev/) for fast development and [OMDb API](https://www.omdbapi.com/) for movie data.

## Features

- **Search Movies:** Search for movies by title using the OMDb API.
- **Popular Movies:** Displays a list of popular movies (default: Batman).
- **Favorites:** Add or remove movies from your favorites list.
- **Persistent Favorites:** Favorites are saved in your browser's local storage.
- **Responsive UI:** Clean and responsive design.

## Technologies Used

- [React](https://react.dev/) – UI library for building user interfaces.
- [Vite](https://vitejs.dev/) – Fast build tool and development server.
- [React Router DOM](https://reactrouter.com/) – Routing for React applications.
- [OMDb API](https://www.omdbapi.com/) – Movie data API.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) – Custom styles for components and pages.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/components/` – Reusable UI components (NavBar, MovieCard).
- `src/pages/` – Main pages (Home, Favorites).
- `src/contexts/` – React context for managing favorites.
- `src/servises/` – API calls to OMDb.
- `src/css/` – CSS files for styling.

## How It Works

- On the Home page, you can search for movies by title.
- Click the heart icon on a movie card to add or remove it from your favorites.
- The Favorites page shows all your saved movies.
- Your favorites are stored in local storage and persist across sessions.

---

**Enjoy exploring movies!**
