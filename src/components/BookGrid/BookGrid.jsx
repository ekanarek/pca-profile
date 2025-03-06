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
}

export default BookGrid