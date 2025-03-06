import "./Navigation.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import flowerIcon from "../../assets/icons/flower2.png";
import eagleIcon from "../../assets/icons/eagle.png";

export default function Navigation({ theme, toggleTheme }) {
  return (
    <Stack className="nav-container" direction="horizontal" gap={5}>
      <Image
        className="nav-icon"
        src={theme === "birds" ? eagleIcon : flowerIcon}
        roundedCircle
      />
      <div className="welcome">Welcome to my site!</div>
      <Link to="/" className="nav-link ms-auto">
        Home
      </Link>
      <Link to="interests" className="nav-link">
        Interests
      </Link>
      <Link to="library" className="nav-link">
        Library
      </Link>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </Stack>
  );
}
