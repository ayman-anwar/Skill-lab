import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1611688370466-0e415a5c922e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMCUyNiUyMGJldmVyYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore Beautiful Dishes!</h3>
            <p>Find your perfect hangout spot.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1543826173-cfe2ca17577d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore Beautiful Dishes!</h3>
            <p>Find your perfect hangout spot.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1619290463523-6d18f6a6b220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore Beautiful Dishes!</h3>
            <p>Find your perfect hangout spot.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more carousel items with different images and captions */}
      </Carousel>
      <Container>
        <Row>
          <Col>
          <Link to="/menu">

            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1646926395455-38805b4a5ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2QlMjBhZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
              <Card.Body>
                <Card.Title>Food 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          </Col>
          <Col>
          <Link to="/menu">

            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1646926395277-08f98ad9c533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBhZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
              <Card.Body>
                <Card.Title>Food 2</Card.Title>
                <Card.Text>
                  Vestibulum in lacus vitae turpis varius blandit ac quis arcu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
            
          </Col>
          <Col>
          <Link to="/menu">

            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=600" />
              <Card.Body>
                <Card.Title>Food 3</Card.Title>
                <Card.Text>
                  Proin euismod metus sit amet scelerisque. Ut eget erat eu mi
                  iaculis venenatis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <div>
          <p>© {new Date().getFullYear()} Food Website. All rights reserved.</p>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          {/* Add more footer links as needed */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
