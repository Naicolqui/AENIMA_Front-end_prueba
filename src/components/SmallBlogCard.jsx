import Card from 'react-bootstrap/Card';
import React from 'react';
import clock from '../Assets/iconos/time.png';
import './css/SmallCards.scss'

function ImageAndTextExample({title, description, time, category, img}) {
  return (
    <>
      <Card className='smallBlogCard'>
        <Card.Img variant="top" src={img}/>
        <Card.Body className="bodyCont">
            <Card.Title className='titleCont'>{title}</Card.Title>
            <div className='timeCont'>
                <img src={clock} alt="clock"/>
                <Card.Text className='timeText'>
                    Hace: {time}
                </Card.Text>
            </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageAndTextExample;