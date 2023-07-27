import React from "react";
import { Card, Container, Row, Col, Accordion, Image } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="welcome-heading">Welcome to Our Food Website!</h2>

              <p className="welcome-paragraph">
                Welcome to our Food website! Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nulla ut fermentum quam. Ut
                facilisis luctus nulla, sit amet lobortis est vulputate non.
                Nullam scelerisque interdum nisl, eu volutpat lorem fringilla
                nec. Phasellus vehicula, justo eget pharetra iaculis, odio
                sapien cursus metus, et convallis ligula purus quis ex.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
                fermentum quam. Ut facilisis luctus nulla, sit amet lobortis est
                vulputate non. Nullam scelerisque interdum nisl, eu volutpat
                lorem fringilla nec. Phasellus vehicula, justo eget pharetra
                iaculis, odio sapien cursus metus, et convallis ligula purus
                quis ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla ut fermentum quam. Ut facilisis luctus nulla, sit amet
                lobortis est vulputate non. Nullam scelerisque interdum nisl, eu
                volutpat lorem fringilla nec. Phasellus vehicula, justo eget
                pharetra iaculis, odio sapien cursus metus, et convallis ligula
                purus quis ex.
              </p>
              {/* <p>Check out some of our featured destinations below:</p>  */}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="services-section contact-section-light">
              <h2>Our Services</h2>
              <p>
                Welcome to our food website! We are dedicated to providing you
                with the best dining experience and delicious food. Our team is
                passionate about cooking and serving high-quality meals. Here's
                what we offer:
              </p>
              <p>Our services include:</p>
              <ul className="services-list">
                <li>Varied Menu Options</li>
                <li>Food Delivery</li>
                <li>Catering for Events</li>
                <li>Customized Food Packages</li>
                <li>Online Ordering</li>
                <li>Quality Ingredients</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1505164294036-5fad98506d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZlYXR1cmVzJTIwb2YlMjB0cmF2ZWwlMjB3ZWJzaXRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1668095398258-a204bb6d2204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBicmVha2Zhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 2</Card.Title>
                <Card.Text>
                  Vestibulum in lacus vitae turpis varius blandit ac quis arcu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Service 3</Card.Title>
                <Card.Text>
                  Proin euismod metus sit amet scelerisque. Ut eget erat eu mi
                  iaculis venenatis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    About Us
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <strong>Malnad Cafe</strong> Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Fugit, laborum facere dolor
                    quaerat minima enim nisi magnam quasi itaque consectetur
                    quod impedit cupiditate aspernatur nostrum eum porro saepe
                    repellat animi. <code>.accordion-body</code>, Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quidem, id.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Address
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <strong>Adress</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Ipsum distinctio maiores earum
                    ullam, amet autem vitae assumenda officia, nobis aspernatur
                    consectetur, aliquam deserunt quae. Atque quos repudiandae
                    tempore accusamus exercitationem!,Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Mollitia, ipsum?
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contact-section contact-section-light ">
              <h2 className="contact-heading">Contact Us</h2>
              <p>
                If you have any questions or inquiries, feel free to contact us
                using the information below:
              </p>
              <ul className="contact-details">
                <li>Email: contact@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 1234 Travel Street, City, Country</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
