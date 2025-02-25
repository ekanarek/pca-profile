import './Library.css';
import BookGrid from '../../components/BookGrid/BookGrid.jsx';
import Filters from '../../components/Filters/Filters.jsx';

function Library() {
    return (
        <div className="library">
            <h1>Library</h1>
            <p>A selection of just some of my favorite books!</p>
            <Filters />
            <BookGrid />
        </div>
    )
}

export default Library