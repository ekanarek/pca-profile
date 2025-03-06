import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import useTheme from "./useTheme.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Interests from "./pages/Interests/Interests.jsx";
import Library from "./pages/Library/Library.jsx";

function App() {
  const storedTheme = localStorage.getItem("theme") || "default";
  const [theme, setTheme] = useState(storedTheme);

  const { toggleTheme } = useTheme(theme, setTheme);

  return (
    <>
      <Router>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
