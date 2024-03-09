/*********************************************************************************
*  WEB422 – Assignment 4
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ali Keshavarzi Student ID: 138245220 Date: 3/8/2024
*
********************************************************************************/ 

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Col, Pagination, Card } from 'react-bootstrap';
import Error from 'next/error';
import ArtworkCard from '../../components/ArtworkCard';

const PER_PAGE = 12;

const Artwork = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [page, setPage] = useState(1);
  const router = useRouter();

  let finalQuery = router.asPath.split('?')[1];
  const { data, error } = useSWR(finalQuery ? `https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}` : null);

  useEffect(() => {
    if (data && data.objectIDs) {
      const results = [];
      for (let i = 0; i < data.objectIDs.length; i += PER_PAGE) {
        results.push(data.objectIDs.slice(i, i + PER_PAGE));
      }
      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  const previousPage = () => setPage(page => Math.max(1, page - 1));
  const nextPage = () => setPage(page => Math.min(artworkList.length, page + 1));

  if (error) return <Error statusCode={404} />;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {artworkList.length > 0 ? (
        <Row className="gy-4">
          {artworkList[page - 1].map((objectID) => (
            <Col lg={3} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))}
        </Row>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Nothing Here</Card.Title>
            Try searching for something else.
          </Card.Body>
        </Card>
      )}
      {artworkList.length > 0 && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev onClick={previousPage} />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Artwork;
