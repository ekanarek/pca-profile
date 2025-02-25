import './BookGrid.css';
import {useState, useEffect} from "react";

function BookGrid({ bookData }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/books")
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error("Error fetching books: ", error));
    }, []);

    const covers = bookData.map((book, title) => (
        <img key={title} src={book.imgUrl} />
    ))

    return (
        <div className="grid">
            {covers}
        </div>
    )
}

export default BookGrid