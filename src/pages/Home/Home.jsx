import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import useTheme from "../../useTheme.js";
import accent1 from "../../assets/images/accent1.png";
import accent2 from "../../assets/images/accent2.png";
import birdsaccent from "../../assets/images/accent3.png";
import mainimg from "../../assets/images/me.jpeg";
import birdsmain from "../../assets/images/eagles.jpg";

function Home({ theme }) {
  return (
    <Container className="container">
      <Row>
        <Col className="home-left">
          <h1>
            <span className="tags">&lt;</span> Emily Kanarek{" "}
            <span className="tags">/&gt;</span>
          </h1>
          <p>
            A native New Yorker and Philly transplant who loves to code! Learn
            more about me by exploring the links above.
          </p>
        </Col>
        <Col className="home-right">
          <div className="image-containter">
            <Image
              src={theme === "birds" ? birdsaccent : accent1}
              className="accent-img accent1"
              rounded
            />
            <Image
              src={theme === "birds" ? birdsmain : mainimg}
              className="main-img"
              rounded
            />
            <Image
              src={theme === "birds" ? birdsaccent : accent2}
              className="accent-img accent2"
              rounded
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
