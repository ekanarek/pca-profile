import './Navigation.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <Stack className="nav-container" direction="horizontal" gap={5}>
          <Image className="nav-icon" src="src/assets/icons/flower2.png" roundedCircle/>
          <div className="welcome">Welcome to my site!</div>
          <Link to="/" className="nav-link ms-auto">Home</Link>
          <Link to="interests" className="nav-link">Interests</Link>
          <Link to="library" className="nav-link">Library</Link>
          <ThemeToggle />
        </Stack>
      );
}