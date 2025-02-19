import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './pages/Home/Home.jsx';
import Interests from './pages/Interests/Interests.jsx';
import Library from './pages/Library/Library.jsx';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
