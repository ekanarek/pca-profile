import "./BookGrid.css";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function BookGrid({ bookData, selectedGenres }) {
  const filteredBooks = selectedGenres.includes("All")
    ? bookData
    : bookData.filter((book) => selectedGenres.includes(book.genre));

  return (
    <div className="grid">
      {filteredBooks.map((book, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${index}`}>
              <strong>{book.title}</strong> <br />
              by {book.author}
            </Tooltip>
          }
        >
          <Image src={book.imgUrl} className="cover" />
        </OverlayTrigger>
        // <Image key={index} src={book.imgUrl} className="cover" />
      ))}
    </div>
  );
}

export default BookGrid;
