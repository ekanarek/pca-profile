import Badge from 'react-bootstrap/Badge';
import './Filters.css';

function Filters() {
    return (
        <p>
            Filter by genres: 
            <Badge pill bg="dark" className="genre">All</Badge>
            <Badge pill bg="secondary" className="genre">Fantasy</Badge>
            <Badge pill bg="secondary" className="genre">Historical Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Horror</Badge>
            <Badge pill bg="secondary" className="genre">Literary Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Mystery</Badge>
            <Badge pill bg="secondary" className="genre">Nonfiction</Badge>
            <Badge pill bg="secondary" className="genre">Romance</Badge>
            <Badge pill bg="secondary" className="genre">Science Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Thriller</Badge>
        </p>
    )
}

export default Filters