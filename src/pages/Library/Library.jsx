import './Library.css';
import BookGrid from '../../components/BookGrid/BookGrid.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import BOOK_DATA from '../../../server/book-data.js';

function Library() {
    return (
        <div className="library">
            <h1>Library</h1>
            <p>A selection of just some of my favorite books!</p>
            <Filters />
            <BookGrid bookData={BOOK_DATA} />
        </div>
    )
}

export default Library