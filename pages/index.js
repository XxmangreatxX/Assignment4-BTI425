import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container>
        <Row className="mb-4">
          <Col>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>
            The Metropolitan Museum of Art of New York City, colloquially "the Met", is the largest art museum
             in the Americas. Its permanent collection contains over two million works, divided among 17 curatorial
              departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park
               on Manhattan's Upper East Side, is by area one of the world's largest art museums. A much smaller
                second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection
                 of art, architecture, and artifacts from medieval Europe.
            </p>
            <p>
              <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" 
              rel="noopener noreferrer">Link to wikipedia</a>
            </p>
          </Col>
          <Col md={6}>
            <p>
            The Fifth Avenue building opened on March 30, 1880. In 2021, despite the COVID-19 pandemic in New York City,
             the museum attracted 1,958,000 visitors, ranking fourth on the list of most-visited art museums in the world.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}