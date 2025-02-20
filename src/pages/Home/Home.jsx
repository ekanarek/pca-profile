import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
    return (
        <Container className="container">
            <Row>
                <Col className="home-left">
                    <h1><span className="tags">&lt;</span> Emily Kanarek <span className="tags">/&gt;</span></h1>
                    <p>A native New Yorker and Philly transplant who loves to code! Learn more about me by exploring the links above.</p>
                </Col>
                <Col className="home-right">
                    <div className="image-containter">
                    <Image src="src/assets/images/accent1.png" className="accent-img accent1" rounded />
                    <Image src="src/assets/images/me.jpeg" className="main-img" rounded />
                    <Image src="src/assets/images/accent2.png" className="accent-img accent2" rounded />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home