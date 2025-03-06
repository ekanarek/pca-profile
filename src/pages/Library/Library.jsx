import { useState } from "react";
import './Library.css';
import BookGrid from '../../components/BookGrid/BookGrid.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import BOOK_DATA from '../../../server/book-data.js';

function Library() {
    const [selectedGenres, setSelectedGenres] = useState(["All"]);

    const handleGenreClick = (genre) => {
        if (genre === "All") {
            setSelectedGenres(["All"]);
        } else {
            setSelectedGenres((prev) => {
                const isSelected = prev.includes(genre);
                const newSelection = isSelected 
                    ? prev.filter(g => g !== genre) 
                    : [...prev.filter(g => g !== "All"), genre];
                return newSelection.length === 0 ? ["All"] : newSelection;
            });
        }
    };
    
    return (
        <div className="library">
            <h1>Library</h1>
            <p>A selection of just some of my favorite books!</p>
            <Filters selectedGenres={selectedGenres} onGenreClick={handleGenreClick} />
            <BookGrid bookData={BOOK_DATA} selectedGenres={selectedGenres} />
        </div>
    )
}

export default Library