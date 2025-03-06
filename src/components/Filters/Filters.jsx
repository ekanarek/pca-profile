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
        </p>
    )
}

export default Filters