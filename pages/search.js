import { useState } from 'react';
import { Container, Row, Col, Form, Button, FormControl, FormGroup, FormCheck } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [geoLocation, setGeoLocation] = useState('');
  const [medium, setMedium] = useState('');
  const [searchBy, setSearchBy] = useState('title');
  const [highlighted, setHighlighted] = useState(false);
  const [onView, setOnView] = useState(false);

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.append('q', searchQuery);
    if (searchBy) queryParams.append('searchBy', searchBy);
    if (geoLocation) queryParams.append('geoLocation', geoLocation);
    if (medium) queryParams.append('medium', medium);
    if (highlighted) queryParams.append('isHighlight', highlighted.toString());
    if (onView) queryParams.append('isOnView', onView.toString());

    router.push(`/artwork?${queryParams.toString()}`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="searchQuery">
              <Form.Label>Search Query</Form.Label>
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="searchBy">
              <Form.Label>Search By</Form.Label>
              <Form.Control
                as="select"
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="tags">Tags</option>
                <option value="artistOrCulture">Artist or Culture</option>
              </Form.Control>
            </Form.Group>

            <Row>
              <Col md={6}>
                <FormGroup controlId="geoLocation">
                  <Form.Label>Geo Location</Form.Label>
                  <FormControl
                    type="text"
                    placeholder="e.g., Europe, France"
                    value={geoLocation}
                    onChange={(e) => setGeoLocation(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="medium">
                  <Form.Label>Medium</Form.Label>
                  <FormControl
                    type="text"
                    placeholder="e.g., Ceramics, Paintings"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Form.Check
              type="checkbox"
              label="Highlighted"
              checked={highlighted}
              onChange={(e) => setHighlighted(e.target.checked)}
            />

            <Form.Check
              type="checkbox"
              label="Currently on View"
              checked={onView}
              onChange={(e) => setOnView(e.target.checked)}
            />

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
