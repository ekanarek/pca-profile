import Badge from 'react-bootstrap/Badge';
import './Filters.css';

const GENRES = ["All", "Classics", "Fantasy", "Historical Fiction", "Horror", "Literary Fiction", "Mystery", "Nonfiction", "Romance", "Science Fiction", "Thriller"]

function Filters({ selectedGenres, onGenreClick }) {
    return (
        <p>
            Filter by genres:{" "} 
            {GENRES.map((genre) => (
                <Badge
                    key={genre} 
                    pill 
                    bg={selectedGenres.includes(genre) ? "dark" : "secondary"} 
                    className="genre" onClick={() => onGenreClick(genre)} 
                    style={{ cursor: "pointer" }}>
                    {genre}
                </Badge>
            ))}
            {/* <Badge pill bg="dark" className="genre">All</Badge>
            <Badge pill bg="secondary" className="genre">Fantasy</Badge>
            <Badge pill bg="secondary" className="genre">Historical Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Horror</Badge>
            <Badge pill bg="secondary" className="genre">Literary Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Mystery</Badge>
            <Badge pill bg="secondary" className="genre">Nonfiction</Badge>
            <Badge pill bg="secondary" className="genre">Romance</Badge>
            <Badge pill bg="secondary" className="genre">Science Fiction</Badge>
            <Badge pill bg="secondary" className="genre">Thriller</Badge> */}
        </p>
    )
}

export default Filters