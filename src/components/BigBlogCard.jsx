import React from "react";
import Card from 'react-bootstrap/Card';

export default function BigBlogCard({title, description, time, category, img}){
    return(
        <Card className="bg-dark text-white">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
        </Card>
    )
}