import './BookGrid.css';
import {useState, useEffect} from "react";
import Image from 'react-bootstrap/Image';

function BookGrid({ bookData, selectedGenres }) {
    const filteredBooks = selectedGenres.includes("All") ? bookData : bookData.filter(book => selectedGenres.includes(book.genre));

    return (
        <div className="grid">
            {filteredBooks.map((book, index) => (
                <Image key={index} src={book.imgUrl} className="cover" />
            ))}
        </div>
    );
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch("/api/books")
    //     .then((res) => res.json())
    //     .then((data) => setBooks(data))
    //     .catch((error) => console.error("Error fetching books: ", error));
    // }, []);

    // const covers = bookData.map((book, title) => (
    //     <Image key={title} src={book.imgUrl} className="cover" />
    // ))

    // return (
    //     <div className="grid">
    //         {covers}
    //     </div>
    // )
}

export default BookGrid