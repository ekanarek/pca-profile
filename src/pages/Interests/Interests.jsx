import "./Interests.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Interests() {
  return (
    <div className="interests">
      <h1>My Interests</h1>
      <p>A few of my favorite things.</p>
      <Container className="interests-grid">
        <Row className="row">
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/book.png"
            />
            <div>
              <h3>Reading</h3>
              <p>There's nothing like a good book!</p>
            </div>
          </Col>
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/typewriter.png"
            />
            <div>
              <h3>Writing</h3>
              <p>I'd love to finish my own novel one day.</p>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/luggage.png"
            />
            <div>
              <h3>Travel</h3>
              <p>My goal is to see as much of the world as possible.</p>
            </div>
          </Col>
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/tree.png"
            />
            <div>
              <h3>Nature</h3>
              <p>Few things make me happier than seeing trees.</p>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/cat.png"
            />
            <div>
              <h3>Animals</h3>
              <p>I've got a cat and a lizard at home!</p>
            </div>
          </Col>
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/music.png"
            />
            <div>
              <h3>Music</h3>
              <p>Pop music is my usual go-to.</p>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/theatre.png"
            />
            <div>
              <h3>Theatre</h3>
              <p>When I was a kid, I wanted to be on Broadway someday.</p>
            </div>
          </Col>
          <Col className="interest-item">
            <Image
              roundedCircle
              className="interest-icon"
              src="src/assets/icons/coding.png"
            />
            <div>
              <h3>Coding</h3>
              <p>Way more fun than I ever imagined.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Interests;
