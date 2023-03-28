import Card from 'react-bootstrap/Card';
import React from 'react';

function ImageAndTextExample({title, description, time, category, img}) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageAndTextExample;