import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const movieNumber = 1;

  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
