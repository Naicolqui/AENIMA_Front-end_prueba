import React from 'react';
import './css/Card.scss'
import Card from 'react-bootstrap/Card';

export default function CardInfo({title, description, img, newC, description2}){
    return (
        <Card className='cardContainer' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className='bodyCard'>
                {newC ? <h4 className='new'>{newC}</h4> : null}
                <Card.Title className='titleCard'>{title}</Card.Title>
                <Card.Text className='textContainer'>
                    <Card.Text className='description'>{description}</Card.Text> <Card.Text className='titleBold'>{title}</Card.Text> <Card.Text className='description'>{description2}</Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}