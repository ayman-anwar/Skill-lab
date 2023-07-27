import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Menu.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1611599539392-0198d33c4c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>Spanish Pizza</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $50</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1564759079737-98304981246f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>English Breakfast</Card.Title>
              <Card.Text>
                Vestibulum in lacus vitae turpis varius blandit ac quis arcu.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $60</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1668095398227-c943ddb69d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>Brunch</Card.Title>
              <Card.Text>
                Proin euismod metus sit amet scelerisque. Ut eget erat eu mi
                iaculis venenatis.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $70</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjAlMjYlMjBiZXZlcmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>Pancake</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $50</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1487004121828-9fa15a215a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMCUyNiUyMGJldmVyYWdlJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>Burger</Card.Title>
              <Card.Text>
                Proin euismod metus sit amet scelerisque. Ut eget erat eu mi
                iaculis venenatis.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $60</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1468070975228-085c1fdd2d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMCUyNiUyMGJldmVyYWdlJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            <Card.Body>
              <Card.Title>Torronto</Card.Title>
              <Card.Text>
                Vestibulum in lacus vitae turpis varius blandit ac quis arcu.
              </Card.Text>
              <div className="price-and-button">
                <Card.Text>Price: $70</Card.Text>
                {/* Read More button with Link to Future page */}
                <Link to="/future">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu